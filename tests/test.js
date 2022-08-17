
const request = require('supertest');
const app = require("../Server/app");

test('/ should return the home page', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if (err) return done(err);
        done();
    })
})

test('/giphy should return the giphy page', (done) => {
    request(app)
    .get('/giphy')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if (err) return done(err);
        done();
    })
})

test('/404 should return the 404 Not Found Page', (done) => {
    request(app)
    .get('/404')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if (err) return done(err);
        done();
    })
})

