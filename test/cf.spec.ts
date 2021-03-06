import request from 'supertest';

import { app } from '../scripts/app';

describe('Hello World', () => {
  describe('GET /', () => {
    it('return status 200: when message is provided as query param', () => {
      return request(app).get(`/?message=Hello`).expect(200);
    });

    it('return status 200: when message is provided as body data', () => {
      return request(app).get(`/?message=Hello`).expect(200);
    });

    it('return status 400: when message is not provided', () => {
      return request(app).get(`/`).expect(400);
    });
  });
});
