import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await (await user).checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    try {
      await user.update(req.body);

      const { id, name, provider, avatar } = await User.findByPk(req.userId, {
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      return res.json({
        id,
        name,
        email,
        provider,
        avatar,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new UserController();
