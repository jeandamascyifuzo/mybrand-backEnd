    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    menu.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        });



        //contact form validation and fire base

//     // Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyA8RalzTwbiyOFjIAZ8XD0-tz5erWwZa2A",
    authDomain: "capstone-project-2c209.firebaseapp.com",
    projectId: "capstone-project-2c209",
    storageBucket: "capstone-project-2c209.appspot.com",
    messagingSenderId: "908272886510",
    appId: "1:908272886510:web:3bbb7137663785d85709ff"
  };

//   // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

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

  
