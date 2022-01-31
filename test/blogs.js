const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


const should = chai.should();

chai.use(chaiHttp);
chai.should();

//Get all the blogs

describe('1) Get all the blogs', function () {
    // this.timeout(577);
    it("it should Get all the blogs", function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        chai.request(app)
        .get("/api/v1/blogs")
        .end((err, res) =>{
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eq(4);
            done();
        })
    });
    it("Internal Server Error", function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        chai.request(app)
        .get("/api/v1/blogs/blog")
        .end((err, res) =>{
            res.should.have.status(500);
           
        });
    });
    it("Blog  not found", function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        chai.request(app)
        .get("/api/v1/blog")
        .end((err, res) =>{
            res.should.have.status(404);
           
        })
    });
});

describe(' Get blog by Id', function () {
    it("Internal Server Error", function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        chai.request(app)
        .get("/api/v1/blogs/" + "11")
        .end((err, res) =>{
            res.should.have.status(500);
           
        });
    });
    it("Blog  not found", function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        const blogId = "61dff76b8a9f8853e96b6069"
        chai.request(app)
        .get("/api/v1/blogs/" + blogId + "12")
        .end((err, res) =>{
            res.should.have.status(500);
           
        })
    });
});

//postBlog

describe('/POST blog', function(){
    it('it should not POST a blog without title field', function(done){
        this.timeout(500);
        setTimeout(done, 300);
        let blog = {
            subtitle: "ggggggg",
            author: "damas",
            content: "hhhshshshsh"
        }
          chai.request(app)
          .post('/api/v1/blogs')
          .send(blog)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('title');
                res.body.errors.title.should.have.property('title').eql('required');
            done();
          });
    });
    it('it should POST a blog ', function(done) {
        this.timeout(500);
        setTimeout(done, 300);
        let blog = {
            title: "education",
            subtitle:"blah blah....",
            content:"blah blah....",
            author: "damas",
            
        }
          chai.request(app)
          .post('/api/v1/blogs')
          .send(blog)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Blog Created');
                res.body.blog.should.have.property('title');
                res.body.blog.should.have.property('subtitle');
                res.body.blog.should.have.property('content');
                res.body.blog.should.have.property('author');
            done();
          });
    });
});