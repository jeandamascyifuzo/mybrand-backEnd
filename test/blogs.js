const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


const should = chai.should();

chai.use(chaiHttp);
chai.should();


//Blog API testing'
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
    // it("it should Get blog by it's Id", function(done) {
    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5aWZ1em8xMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2MWVhYWY2Yzk1YjY4ZWMzMGEwODdlYTkiLCJpYXQiOjE2NDM2MzY5MjYsImV4cCI6MTY0MzY0MDUyNn0.Tzq2QXDNFOrfSnjbq5ra4DKuVlvgE2dHzjb1m9_GubQ";
    //     this.timeout(500);
    //     setTimeout(done, 300);
    //     const blogId = "61dff76b8a9f8853e96b6069"
    //     chai.request(app).post('/api/v1/blogs')
    //     .set({ 'authorization': token, Accept: 'application/json' })
    //     .get("/api/v1/blogs/" + blogId)
    //     .end((err, res) =>{
    //         res.should.have.status(200);
    //         res.body.should.be.a('object');
    //         res.body.should.have.property('id');
    //         res.body.should.have.property('title');
    //         res.body.should.have.property('subtitle');
    //         res.body.should.have.property('content');
    //         res.body.should.have.property('author');
    //         res.body.should.have.property('id').eq("61dff76b8a9f8853e96b6069");

    //         done();
    //     })
    // });
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

//create blog
// describe(' Get blog by Id', function () {
    
//       it('Created new blog', function(done){
//         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5aWZ1em8xMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2MWVhYWY2Yzk1YjY4ZWMzMGEwODdlYTkiLCJpYXQiOjE2NDMxNDQwODcsImV4cCI6MTY0MzE0NzY4N30.96DE70x9wkA-PcvRUchF4F3jvpbDTLeoOzdadyjeq6Q"
//         this.timeout(500);
//         setTimeout(done, 300);   
//         chai.request(app).post('/api/v1/blogs')
//           .set({ 'token': token, Accept: 'application/json' })
//           .send({
//             title: "technologies ",
//             subTitle: "mocha",
//             content: "Lorem Ipsum is simply dummy text of the printing.",
//             author: "damas"
//           })
//           .end((err, res) =>{
//             res.should.have.status(401);
//             res.body.should.be.a('object');
//             res.body.should.have.property('id');
//             res.body.should.have.property('title');
//             res.body.should.have.property('subtitle');
//             res.body.should.have.property('content');
//             res.body.should.have.property('author');
//             done();
//           })
//       })
// });


