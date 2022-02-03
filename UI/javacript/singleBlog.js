
console.log(JSON.parse(localStorage.getItem('Blog'))[0])

document.getElementById("singleblog").innerHTML=`<div class="blog-col">
<img src=${JSON.parse(localStorage.getItem('Blog'))[0]?.blogImage}>
<h3>${JSON.parse(localStorage.getItem('Blog'))[0]?.title}</h3>
<h4>${JSON.parse(localStorage.getItem('Blog'))[0]?.subtitle}</h4>
<p><h3>${JSON.parse(localStorage.getItem('Blog'))[0]?.content}</h3></p>
</div>
<button id="${res._id}" class="comment" onclick = "comment('${res._id}')">comment</button>
`








document.getElementById("sendCommnet").addEventListener("click", (event) => {
    event.preventDefault();
    const fullName = document.getElementById("fname").value;
    const comment = document.getElementById("messages").value;
   console.log("hello")
    
  
let _data = {
    full: fullName,
    comment: comment, 
  }
  console.log(_data)

  

})














// data to be sent to the POST request

// let _data = {
//   full: "damas",
//   comment: "nice blog", 
 
// }

// fetch('https://cyifuzo-backend.herokuapp.com/api/v1/comment/61f7ab2c19f78f3f968fbd9e', {
//   method: "POST",
//   body: JSON.stringify(_data),
//   headers: {"Content-type": "application/json", 
//   "authorization": token
// }
// })
// .then(response => response.json()) 
// .then(json => console.log(json))
// .catch(err => console.log(err));
