import { subHours, isBefore } from 'date-fns';

import Appointment from '../models/Appointment';
import User from '../models/User';

import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';
import Cache from '../../lib/Cache';

class CancelAppointmentService {
  async run({ appointment_id, user_id }) {
    const appointment = await Appointment.findByPk(appointment_id, {
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

    if (appointment.user_id !== user_id) {
      throw new Error("You don't have permission to cancel this appointment");
    }

    const dateWhitSub = subHours(appointment.date, 2);

    if (isBefore(dateWhitSub, new Date())) {
      throw new Error('You can only cancel appointments 2 hours advance');
    }

    appointment.canceled_at = new Date();

    await appointment.save();

    await Queue.add(CancellationMail.key, {
      appointment,
    });

    /**
     * Invalidade cahce
     */

    await Cache.invalidatePrefix(`user:${user_id}:appointments`);

    return appointment;
  }
}

export default new CancelAppointmentService();
