import request from 'supertest';
import app from '../app';

describe('API Endpoints', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Test Backend Server is running!');
    });
  });

  describe('Health Endpoints', () => {
    it('GET /health should return health status', async () => {
      const res = await request(app).get('/health');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status', 'OK');
      expect(res.body).toHaveProperty('uptime');
    });

    it('GET /health/detailed should return detailed health info', async () => {
      const res = await request(app).get('/health/detailed');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status', 'OK');
      expect(res.body).toHaveProperty('memory');
      expect(res.body).toHaveProperty('version');
    });
  });

  describe('API Endpoints', () => {
    it('GET /api/users should return users list', async () => {
      const res = await request(app).get('/api/users');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('success', true);
      expect(res.body).toHaveProperty('data');
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('GET /api/users/1 should return specific user', async () => {
      const res = await request(app).get('/api/users/1');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('success', true);
      expect(res.body.data).toHaveProperty('id', 1);
    });

    it('GET /api/users/999 should return 404', async () => {
      const res = await request(app).get('/api/users/999');
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('success', false);
    });

    it('POST /api/users should create new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com'
      };

      const res = await request(app)
        .post('/api/users')
        .send(newUser);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('success', true);
      expect(res.body.data).toHaveProperty('name', newUser.name);
      expect(res.body.data).toHaveProperty('email', newUser.email);
    });

    it('POST /api/users without required fields should return 400', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({});

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('success', false);
    });
  });

  describe('Error Handling', () => {
    it('should handle 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('error', 'Not Found');
    });
  });
});