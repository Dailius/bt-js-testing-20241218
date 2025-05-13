const request = require('supertest');
const app = require('../app');

describe('APi testing', () => {
    test('GET should return \'API is running\'', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('API is running');
    });

    test('POST /api/users/ new user', async () => {
        const res = await request(app).post('/api/users/').send({name: 'Vardenis'})
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Vardenis');
    });
});