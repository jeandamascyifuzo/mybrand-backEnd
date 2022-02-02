




const getBlogs =  async() => {
  let result=[];
fetch('https://cyifuzo-backend.herokuapp.com/api/v1/blogs', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => {
    result = json.data.blogs
    console.log(json.data.blogs)

result?.length?
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
    ${res?.content?.slice(1,200)}
    ....
    </p>
    <button id="${res._id}" class="readMore" onclick = "readMore('${res._id}')">readMore..</button>
    
     </div>
    </div>
    `
  ).join(""):
document.querySelector(".row").innerHTML=`<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
  }) 
.catch(err => console.log(err));
}
getBlogs();














const token =localStorage.getItem('token');
const readMore = (id) =>{

  console.log(id)
  let results=[];
fetch(`https://cyifuzo-backend.herokuapp.com/api/v1/blogs/${id}`, {
  
  method: "GET",
  headers: {"Content-type": "application/json", 
  "authorization": token
}
})
.then(response => response.json()) 
.then(json => {
  location.href =  './single-blog.html';
    results = [json.data.blog]
    console.log(results)
    localStorage.setItem("Blog",JSON.stringify(results))
  document.getElementById("sigle-row").innerHTML = results.map((res)=>{
  
  `
    <div class="row2">
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
   
    
    </button>
     </div>
    </div>
    `
    
  }).join("")
 
  }) 
.catch(err => console.log(err));

}
































document.querySelector(".readMore").addEventListener("click",(e)=>{
  e.preventDefault()

  console.log(e.target.id.split("+")[0])
 })
// SEARCH BLOG



document.getElementById('searchbtn').addEventListener("click",()=>{
  
  const searchBlog = async() => {

    let results;
    const searchkeyword = document.getElementById("search").value;
  
   await fetch('https://cyifuzo-backend.herokuapp.com/api/v1/blogs', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response =>{
      console.log(response)
    })
  
    let searchResult;
       if(searchkeyword!==''){
        searchResult = results?.data?.data?.blogs?.filter((blog)=>{
          return Object.values(blog).join(' ').toLowerCase().includes(searchkeyword.toLowerCase())
        })
       }
       console.log(searchResult)
  
       if(searchkeyword!==''){
        searchResult?.map((search)=>console.log(search))
        
        document.querySelector(".row").innerHTML =
        searchResult?.map((blogs) => `
      <div class="row fgfg">
      <div class="blog-col">
      <img id="imge" src=${blogs?.ImageUrl}>
      <h3 id="header">
      ${blogs?.title}
      </h3>
      <p id="paragraph">
      ${blogs?.content}
      </p>
      
      <button type="submit"><a href="/mybrand/UI/pages/single-blog.html">Read more...</a></button>
      </div>
      
      </div>
      `).join("")
      }else{
        document.querySelector(".row").innerHTML =
        results?.map((blogs) => `
      <div class="row fgfg">
      <div class="blog-col">
      <img id="imge" src=${blogs?.ImageUrl}>
      <h3 id="header">
      ${blogs?.title}
      </h3>
      <p id="paragraph">
      ${blogs?.content}
      </p>
      
      <button type="submit">Read more..</button>
      </div>
      
      </div>
      `).join("")
      }

}
searchBlog();

})


{/* <a href="/UI/pages/single-blog.html">Read more...</a> */}



