document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const content = document.getElementById("content").value;
    const blogImage= document.getElementById("image").value;
    // const author = document.getElementById("author").value;
 
let _data = {
    title,
    subtitle, 
    content,
    blogImage
    // author
  }
  
  console.log(_data)
  
  // console.log(JSON.parse(localStorage.getItem("token")).token)
    addData(_data);  
    
})
const addData = (_data) => {
    fetch('https://cyifuzo-backend.herokuapp.com/api/v1/blogs', {
method: "POST",
body: JSON.stringify(_data),
headers: {
    "Content-type": "application/json; charset=UTF-8",
   
}
})
.then(response => console.log(response.json()))
       
.then((result) => {
        const data = result.data;
        localStorage.setItem("blogs", data);
        
    }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    })
     document.getElementById("title").value="";
     document.getElementById("subtitle").value="";
     document.getElementById("content").value="";
     document.getElementById("image").value="";
    //  document.getElementById("author").value="";
     
     getBlogs();
}
//   const url =https://cyifuzo-backend.herokuapp.com/api/v1;
const getBlogs =  async() => {
    let result=[];
fetch('https://cyifuzo-backend.herokuapp.com/api/v1/blogs', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
      result = json.data.blogs
    //   console.log(json.data.blogs)
    document.querySelector(".row").innerHTML = result.map((res)=>
    `
      <div class="row fgfg">
      <div class="blog-col">
      <img id="imge" src=${res?.blogImage}>
      <h3 id="header">
      ${res?.title}
      </h3>
      <h3 id="subheader">
      ${res?.subtitle}
      </h3>
      <p id="contentt">
      ${res?.content}
      </p>
     
      <button id=${res._id}+edit_blog class="blog__update--btn"onclick="myFunc(${JSON.stringify(res).split('"').join("&quot;")})">
      Edit
      </button>
      <button id="deletes" class="blog__delete--btn"onClick="deleteBlog(${JSON.stringify(res).split('"').join("&quot;")})">
      Delete
      </button>
       </div>
      </div>
      `
  ).join("")
    }) 
  .catch(err => console.log(err));
}
getBlogs();

// UPDATE BLOG
document.getElementById("update_blog").addEventListener("click", (event) => {
    event.preventDefault()
    const Title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const ImageUrl = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    const id = document.getElementById("blog_id").value;
    console.log(id)
    const token =localStorage.getItem('token');

const updateblog = ()=>{
            
    const inputs = [
        {
            "proName": "title",
            "value": Title
        },
        {
            "proName": "subtitle",
            "value": subtitle
        },
        {
            "proName": "content",
            "value": content
        },
        {
            "proName": "blogImage",
            "value": ImageUrl
        },
    ];
    for(let i = 0; i < inputs.length ; i++ ){
        fetch(`https://cyifuzo-backend.herokuapp.com/api/v1/blogs/${id}`, {
            method: "PUT",
            body: JSON.stringify(
                [
                    inputs[i]
                    
                ]
            ),
            headers: {"Content-type": "application/json", 
            "authorization": token
        }
          }).then(function (response) {
            // if (response.ok) {
            //     return response.json();
            // } else {
                return response.json();
            
        })
        .then(function (response) {
           console.log(response);
           getBlogs();
        })
    }
 
        document.getElementById("title").value="";
        document.getElementById("subtitle").value="";
        document.getElementById("image").value="";
        document.getElementById("content").value="";
        // document.getElementById("author").value="";
    }
    updateblog()
    
})
// DELETE BLOG
const token =localStorage.getItem('token');


function deleteBlog (blog) {
    document.getElementById("deletes").addEventListener("click",(event)=>{
      event.preventDefault()
      const id = document.getElementById("blog_id").value;
      console.log(id)

fetch(`https://cyifuzo-backend.herokuapp.com/api/v1/blogs/${id}`, {
    method: 'DELETE',
    headers: {"Content-type": "application/json", 
    "authorization": token
     }
})
.then(function (response) {
        console.log(response);
        getBlogs();
     })
})
}



// GETTING BLOG CONTENTS AND ID 
function myFunc(blog) {
    document.querySelector(".blog__update--btn").addEventListener('click', (event) => {
        const Titles = document.getElementById("header").innerHTML;
        const subTitles = document.getElementById("subheader").innerHTML;
        const ImageUrls = document.getElementById("imge").src;
        const contents = document.getElementById("contentt").innerHTML;
        // const author = document.getElementById("authorr").innerHTML;
        
         console.log(Titles,subTitles,ImageUrls,contents);
       
        document.getElementById("blog_id").value=event.target.id.split("+")[0]
        document.getElementById("title").value = Titles;
        document.getElementById("subtitle").value = subTitles;
        document.getElementById("image").value = ImageUrls;
        document.getElementById("content").value = contents;
        // document.getElementById("authorr").value = author;
       
    })
}
//logout 
document.getElementById('logout').addEventListener('click', (e) =>{
    e.preventDefault()
    console.log("clicked")
    const token =localStorage.getItem('token');
    const log = ()=>{
    (async () => {
        const token = await new Authenticator().logout();
        if (token) {
         logger.success('Logout successful');
        }
        process.exit(0);
       })().catch(async (error) => {
        logger.error(error);
        process.exit(1);
       });
       log()
    }
    location.href =  '../pages/login.html'; 
})