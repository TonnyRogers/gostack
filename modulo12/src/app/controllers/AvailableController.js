import AvailableService from '../services/AvailableService';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const searchDate = Number(date);

    const isAvailable = await AvailableService.run({
      provider_id: req.params.id,
      date: searchDate,
    });

    return res.json(isAvailable);
  }
}

export default new AvailableController();
