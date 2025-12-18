const request = require('supertest');
const app = require('../server'); 

describe('API Tests', () => {
    let expect;
    before(async () => {
        ({expect} = await import('chai'))
    });

    it("should retrieve all resources", async () => {
        const res = await request(app)
            .get('/resources')
            .set('Accept', 'application/json');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        expect(res.body[0]).to.have.property('id', 1);
        expect(res.body[0]).to.have.property('name', 'Resource One');
        expect(res.body[0]).to.have.property('type', 'Type A');
    })

    it("should create a new resource", async () => {
        const newResource = { name: 'Resource three', type: 'Type C' };
        const res = await request(app)
            .post('/resource')
            .send(newResource)
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
    })

});