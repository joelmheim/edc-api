//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    /*
      * Test the /GET route
      */
    describe('/GET all books', () => {
        it('should GET all the books', (done) => {
            chai.request(server)
                .get('/api/books')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });
    });

    describe('/GET one book', () => {
        it('should GET a book based on id', (done) => {
            chai.request(server)
                .get('/api/books/0')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.id.should.be.eql(0);
                    done();
                });
        });
    });

});