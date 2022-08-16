import * as supertest from "supertest";
import app from "../app";

//create request object
const request = supertest(app)

describe('Test endpoint response', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    }
)});
