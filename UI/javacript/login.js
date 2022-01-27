
// import  { getAuth, createUserWithEmailAndPassword } from "firebase/auth";    
//     document.querySelector('#signupbtn').addEventListener("click",(e)=>{
//        e.preventDefault();
//         alert("clicked")
//         const auth = getAuth();
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//        console.log(email,password)
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user)
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//         console.log(errorMessage)
//       });
//     })
 
//==========================================================================================================================================


// form validation

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
});

// const form = document.getElementById('main');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form.addEventListener('click', e => {
//     e.preventDefault();
//      console.log("clicked me")
//     validateInputs();
// });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 character.')
    } else {
        setSuccess(password);
    }
};


//firebase
console.log("hello");

    const firebaseConfig = {
        apiKey: "AIzaSyA8RalzTwbiyOFjIAZ8XD0-tz5erWwZa2A",
        authDomain: "capstone-project-2c209.firebaseapp.com",
        databaseURL: "https://capstone-project-2c209-default-rtdb.firebaseio.com",
        projectId: "capstone-project-2c209",
        storageBucket: "capstone-project-2c209.appspot.com",
        messagingSenderId: "908272886510",
        appId: "1:908272886510:web:3bbb7137663785d85709ff"
      };
    //   // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    // const db = firebase.firestore();
    const auth =firebase.auth()
    function login(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        alert("signed In" +email.value);
    }

    // function login(){
    //     var email = document.getElementById("email");
    //     var password = document.getElementById("password");
    //     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //     promise.catch(e => alert(e.message));
    //     alert("signed In");
    // }




      document.getElementById("loginbtn").addEventListener("click",(event)=>{
          event.preventDefault()
         let email = document.getElementById("email").value;
         let password = document.getElementById("password").value;

         axios.post("https://cyifuzo-backend.herokuapp.com/api/v1/user/login",{email:email,password:password}).then((user)=>{
             console.log(user)
         }).catch((error)=>{
             console.log(error)
         })

          console.log("hello ")
      })
  