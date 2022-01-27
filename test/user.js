// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');


// const should = chai.should();

// chai.use(chaiHttp);
// chai.should();

//   describe('POST /', function() {
//     it('Only Verified user should login', function(done) {
//         this.timeout(500);
//         setTimeout(done, 300);
//         chai.request(app)
//         .post('/api/v1/user/login')
//         .send({ email: user[0].email, password: 'test123' })
//         .end((err, response) => {
//           response.should.have.status(400);
//           done();
//         });
//     });
//     it('It should  verify the user', (done) => {
//       chai.request(server)
//         .get(`/api/v1/users/verify/${User.authToken}`)
//         .end((err, response) => {
//           response.should.have.status(200);
//           response.body.should.be.a('object');
//           response.body.should.have.property('status');
//           response.body.should.have.property('message');
//           done();
//         });
//     });
//     it('It should login with email and password', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: User.email, password: 'elysee123' })
//         .end((err, response) => {
//           response.should.have.status(200);
//           done();
//         });
//     });
//     it('Admin should login with Pre confogured credentials', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: 'barefoot@gmail.com', password: '123456' })
//         .end((err, response) => {
//           response.should.have.status(200);
//           done();
//         });
//     });
//     it('It should not login with Invalid password', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: 'nishimwelys@gmail.com', password: 123456789 })
//         .end((err, response) => {
//           response.should.have.status(400);
//           done();
//         });
//     });
//     it('It should not login with null password', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: 'nishimwelys@gmail.com', password: null })
//         .end((err, response) => {
//           response.should.have.status(400);
//           done();
//         });
//     });
//     it('It should not login with null email', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: null, password: 'elysee1235' })
//         .end((err, response) => {
//           response.should.have.status(400);
//           done();
//         });
//     });
//     it('Password should be between 8 to 15 characters', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: 'nishimwelys@gmail.com', password: 'elys' })
//         .end((err, response) => {
//           response.should.have.status(400);
//           done();
//         });
//     });
//     it('should not login with unregistred email', (done) => {
//       chai.request(server)
//         .post('/api/v1/users/login')
//         .send({ email: 'kezaAlice@gmail.com', password: 'elysee123' })
//         .end((err, response) => {
//           response.should.have.status(404);
//           done();
//         });
//     });
//   });

// // export default manualLoginTest;