import { isBefore, subHours } from 'date-fns';

import User from '../models/User';
import Appointment from '../models/Appointment';
import File from '../models/File';

import CreateAppointmentService from '../services/CreateAppointmentService';
import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      attributes: ['id', 'date', 'past', 'cancelable'],
      order: ['date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'url', 'path'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const { provider_id, date } = req.body;

    const appointment = await CreateAppointmentService.run({
      provider_id,
      user_id: req.userId,
      date,
    });

    return res.json(appointment);
  }

  async delete(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: 'provider',
            attributes: ['name', 'email'],
          },
          {
            model: User,
            as: 'user',
            attributes: ['name', 'email'],
          },
        ],
      });

      if (appointment.user_id !== req.userId) {
        return res.status(401).json({
          error: "You don't have permission to cancel this appointment",
        });
      }

      const dateWhitSub = subHours(appointment.date, 2);

      if (isBefore(dateWhitSub, new Date())) {
        return res
          .status(401)
          .json({ error: 'You can only cancel appointments 2 hours advance' });
      }

      appointment.canceled_at = new Date();

      await appointment.save();

      await Queue.add(CancellationMail.key, {
        appointment,
      });

      return res.json(appointment);
    } catch (error) {
      console.log(error); /* eslint no-console: "off" */
      return res.status(500).json({ error: 'Server error' });
    }
  }
}

export default new AppointmentController();
