//form validation
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

const form = document.getElementById('main');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    axios.post("https://cyifuzo-backend.herokuapp.com/api/v1/user/signup", {
        fullName: username,
        email: email,
        password: password
    }).then((user) => {
        console.log("hello")
        console.log(user)
    
    }).catch((error) => {
        console.log(error)
    })

    validateInputs();
});

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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    }
    else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
};
















//firebase

console.log("kakka")

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8RalzTwbiyOFjIAZ8XD0-tz5erWwZa2A",
    authDomain: "capstone-project-2c209.firebaseapp.com",
    projectId: "capstone-project-2c209",
    storageBucket: "capstone-project-2c209.appspot.com",
    messagingSenderId: "908272886510",
    appId: "1:908272886510:web:3bbb7137663785d85709ff"
};

//   // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth()
//    getAuth = require("firebase/auth")
//    createUserWithEmailAndPassword = require("firebase/auth")

// const auth = firebase.auth();
db.settings({ timestampsInSnapshots: true });





        // export const signupUser = (userDetails) => {
        //     //deconstruct the users details we will need these later
        //     const {username, email, password} = userDetails
        //     return () => {
        //         //user firebase using the appropriate firebase method
        //         firebase.auth().createUserWithEmailAndPassword(email, password)
        //         .then(() => {
        //             //Once the user creation has happened successfully, we can add the currentUser into firestore
        //             //with the appropriate details.
        //             firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
        //             .set({
        //                 username: usename,
        //                 email: email
        //             })
        //             //ensure we catch any errors at this stage to advise us if something does go wrong
        //             .catch(error => {
        //                 console.log('Something went wrong with added user to firestore: ', error);
        //             })
        //         })
        //         //we need to catch the whole sign up process if it fails too.
        //         .catch(error => {
        //             console.log('Something went wrong with sign up: ', error);
        //         }
        //     },
        // };

// const firebaseConfig = {
//     apiKey: "AIzaSyA8RalzTwbiyOFjIAZ8XD0-tz5erWwZa2A",
//     authDomain: "capstone-project-2c209.firebaseapp.com",
//     projectId: "capstone-project-2c209",
//     storageBucket: "capstone-project-2c209.appspot.com",
//     messagingSenderId: "908272886510",
//     appId: "1:908272886510:web:3bbb7137663785d85709ff"
//   };




// const signupform = document.querySelector('#main');
// form.addEventListener('submit', (e) =>{
//   e.preventDefault();

//   //get user information
//   const user = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
// //   const user = signupform['username'].value;
// //   const email = signupform['email'].value;
// //   const pass = signupform['password'].value;
//   console.log(user, email, password);

// auth.createUserWithEmailAndPassword(email, password).then( cred =>{
//     console.log(cred)
// })
// })






//   auth.createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//     // ..
//   });
// })