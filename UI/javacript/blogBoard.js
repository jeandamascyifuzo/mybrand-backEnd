

//ADD DATA

document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;
 
let _data = {
    title,
    subtitle, 
    content,
    author
  }
  
  console.log(_data)
  
    
    addData(_data);  
    
})

const addData = (_data) => {

    fetch('https://cyifuzo-backend.herokuapp.com/api/v1/blogs', {
method: "POST",
body: JSON.stringify(_data),
headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
       
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
     document.getElementById("author").value="";
     
     getBlogs();
}
// GET BLOGS FROM FIREBASE

// fetch('https://cyifuzo-backend.herokuapp.com/api/v1/blogs', {
//     method: "GET",
//     headers: {"Content-type": "application/json;charset=UTF-8"}
//   })
//   .then(response => response.json()) 
//   .then(json => console.log(json)) 
//   .catch(err => console.log(err));
  

const getBlogs =  async() => {
    let result=[];
//  await axios.get('https://cyifuzo-backend.herokuapp.com/api/v1/blogs')
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
      <img id="imge" src=${res?.ImageUrl}>
      <h3 id="header">
      ${res?.title}
      </h3>
      <p id="paragraph">
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
  
  
//  .then((response)=>{
      
//  console.log(response)
//  result=response
//     }).catch((error)=>{
//         console.log(error)
//     })
//   console.log(result?.data?.data?.blogs)
// console.log(result)
  

//   result?.data?.data?.blogs?.map((blogs) => `
//   <div class="row fgfg">
//   <div class="blog-col">
//   <img id="imge" src=${blogs?.ImageUrl}>
//   <h3 id="header">
//   ${blogs?.title}
//   </h3>
//   <p id="paragraph">
//   ${blogs?.content}
//   </p>
 
//   <button id=${blogs._id}+edit_blog class="blog__update--btn"onclick="myFunc(${JSON.stringify(blogs).split('"').join("&quot;")})">
//   Edit
//   </button>
//   <button id="deletes" class="blog__delete--btn"onClick="deleteBlog(${JSON.stringify(blogs).split('"').join("&quot;")})">
//   Delete
//   </button>
//    </div>
//   </div>
//   `)


//     db.collection("blog").orderBy("timestamp", 'desc').onSnapshot((snaphot) => {
//         const data = snaphot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
//         //   console.log("data",data.data.ImageUrl)
//         document.querySelector(".row").innerHTML =
//             data.map((blogs) => `
//  <div class="row fgfg">
//  <div class="blog-col">
//  <img id="imge" src=${blogs?.data?.ImageUrl}>
//  <h3 id="header">
//  ${blogs?.data?.Title}
//  </h3>
//  <p id="paragraph">
//  ${blogs?.data?.content}
//  </p>

//  <button id=${blogs.id}+edit_blog class="blog__update--btn"onclick="myFunc(${JSON.stringify(blogs).split('"').join("&quot;")})">
//  Edit
//  </button>
//  <button id="deletes" class="blog__delete--btn"onClick="deleteBlog(${JSON.stringify(blogs).split('"').join("&quot;")})">
//  Delete
//  </button>
//   </div>
//  </div>
//  `).join("")

//     })
}
getBlogs();

// UPDATE BLOG
document.getElementById("update_blog").addEventListener("click", (event) => {
    event.preventDefault()
    const Title = document.getElementById("title").value;
    const ImageUrl = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    const id = document.getElementById("blog_id").value;
    
    // db.collection("blog").doc('oSyX0Eo6gDdkD9TbllVQ').set({

    const updateblog = ()=>{

        db.collection("blog").doc(id).set({
            Title,
            content,
            ImageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
            {
                merge: true
            }
        ).then((result) => {
            const data = result.data;
            localStorage.setItem("blogs", data);
            alert("Data well Updated...")
            
            console.log("Document written with ID: ", result.id);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        document.getElementById("title").value="";
        document.getElementById("image").value="";
        document.getElementById("content").value="";
    }
    updateblog()
})

// DELETE BLOG
function deleteBlog(blog) {
    document.getElementById("deletes").addEventListener("click",(event)=>{
      event.preventDefault()
      db.collection("blog").doc(blog.id).delete()
    })

}

// GETTING BLOG CONTENTS AND ID 


function myFunc(blog) {
    document.querySelector(".blog__update--btn").addEventListener('click', (event) => {
        const Titles = document.getElementById("header").innerHTML;
        const ImageUrls = document.getElementById("imge").src;
        const contents = document.getElementById("paragraph").innerHTML;
        document.getElementById("blog_id").value=event.target.id.split("+")[0]
        document.getElementById("title").value = Titles;
        document.getElementById("image").value = ImageUrls;
        document.getElementById("content").innerHTML = contents;
         console.log(Titles,ImageUrls,contents);
    })
    
   
}


//edit_blog