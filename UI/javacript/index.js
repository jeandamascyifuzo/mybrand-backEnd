    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    menu.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        });


document.getElementById("btnMsg").addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("messages").value;;

let _data = {
  name ,
  email, 
  subject,
  message
  // author
}

  console.log(_data)

// console.log(JSON.parse(localStorage.getItem("token")).token)
sendMessage(_data);  
  
})
const sendMessage = (_data) => {
  fetch('https://cyifuzo-backend.herokuapp.com/api/v1/contact/send', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err))
  // Toastify({
  //   text: "Message sent !!",
  //   className: "info",
  //   style: {
  //     // background: "linear-gradient(to right, #00b09b, #96c93d)",
  //     background: "#d81515",
      
  //   }
  // }).showToast();
  
   document.getElementById("fname").value="";
   document.getElementById("email").value="";
   document.getElementById("subject").value="";
   document.getElementById("messages").value="";
  //  document.getElementById("author").value="";
}



// LATEST BLOGS
const getBlogs = () => {
    db.collection("blog").orderBy("timestamp", 'desc').onSnapshot((snaphot) => {
        const data = snaphot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        //   console.log("data",data.data.ImageUrl)
        document.querySelector(".rowblog").innerHTML =
            data.slice(0,3).map((blogs) => `
 <div class="row">
 <div class="blog-col">
 <img id="imge" src=${blogs?.data?.ImageUrl}>
 <h3 id="header">
 ${blogs?.data?.Title}
 </h3>
 <p id="paragraph">
 ${blogs?.data?.content}
 </p>
 </div>
 
 </div>
 `).join("")

    })
}
getBlogs();

  
