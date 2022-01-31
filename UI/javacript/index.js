    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    menu.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        });



 


//Add information to the database

  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("messages").value;

  const addMessage = () => {
    db.collection("Messages").add({
        name,
        email,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then((result) => {
        const data = result.data;
        localStorage.setItem("contactform", data);
        
    }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    })
  
    // Clear form
    document.getElementById('contactForm').reset();

}

addMessage();    
})



 

  



// const btnNewsletter = document.getElementById("btn_submit_newletter");

document.getElementById("btnMsg").addEventListener('click', (e) => {
  e.preventDefault()
  console.log("hello");
  const names = document.getElementById("fname").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("messages").value;

let contact= {
  FullName: names,
  email: email,
  subject: subject,
  message: message
}
sendMessage(contact);

})

const sendMessage = (contact) =>{

  fetch('https://cyifuzo-backend.herokuapp.com/api/v1/contact/send', {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
        'Content-Type': 'application/json',
    }
  
  })
    .then((response) => {
        // console.log("Success")
        console.log(response);
        //       Toastify({
        //   text: "Message sent !!",
        //   className: "info",
        //   style: {
        //     // background: "linear-gradient(to right, #00b09b, #96c93d)",
        //     background: "#d81515",
            
        //   }
        // }).showToast();
    })
    .catch((error) => {
        console.log(error);
    });
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

  
