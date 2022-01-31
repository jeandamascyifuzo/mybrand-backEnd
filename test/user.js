const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);
chai.should();

  describe('POST /', function() {
    it('Only Verified user should login', function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        chai.request(app)
        .post('/api/v1/user/login')
        .send({ email: 'cyifuzo@gmail.com', password: 'test123' })
        .end((err, response) => {
          response.should.have.status(400);
          done();
        });
    });
    it('It should not login with Invalid password', (done) => {
        chai.request(app)
        .post('/api/v1/users/login')
        .send({ email: 'cyifuzo@gmail.com', password: 123456789 })
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
    it('It should not login with null password', (done) => {
        chai.request(app)
        .post('/api/v1/users/login')
        .send({ email: 'cyifuzos@gmail.com', password: null })
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
    it('It should not login with null email', (done) => {
        chai.request(app)
        .post('/api/v1/users/login')
        .send({ email: null, password: 'test1235' })
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
    
    it('should not login with unregistred email', (done) => {
        chai.request(app)
        .post('/api/v1/users/login')
        .send({ email: 'cyifuzoooo@gmail.com', password: 'test123' })
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

