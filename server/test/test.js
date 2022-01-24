const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe('Blog API', ()=>{
//get all users

describe("Get all post", ()=>{
    it("it should Get all the blogs", (done) =>{
        chai.request(server)
        .get("/api/v1/blogs")
        .end((err, response) =>{
            response.should.have.status(200);
            response.body.should.be.a('array');
            done();
        })
    })
})

});
module.exports = server