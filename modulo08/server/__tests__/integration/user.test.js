import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

import truncate from '../util/truncate';
import User from '../../src/app/models/User';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt password when new user created', async () => {
    const user = await User.create({
      name: 'Antoniel',
      email: 'antoniel15975@gmail.com',
      password: '112233',
    });

    const compareHash = await bcrypt.compare('112233', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Antoniel',
        email: 'antoniel15975@gmail.com',
        password_hash: '112233',
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to resgiter a duplated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Antoniel',
        email: 'antoniel15975@gmail.com',
        password_hash: '112233',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Antoniel',
        email: 'antoniel15975@gmail.com',
        password_hash: '112233',
      });

    expect(response.status).toBe(400);
  });
});
