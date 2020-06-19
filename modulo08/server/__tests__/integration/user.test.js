import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
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
});
