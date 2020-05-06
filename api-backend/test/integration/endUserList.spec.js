const request = require('supertest');
const app = require('../../src/app');

describe('USER', () => {
   
    it('should be able to get userlist', async () => {
        jest.setTimeout(30000);
        const number = await Math.floor(Math.random() * 99 + 0);
        const response = await request(app)
            .get(`/api/users?since=${number}`);

        expect(response.body).toHaveLength(30);
    })

})