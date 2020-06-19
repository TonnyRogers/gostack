import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
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
