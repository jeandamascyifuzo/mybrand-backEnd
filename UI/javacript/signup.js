// //form validation
// const menu = document.querySelector('.menu');
// const nav = document.querySelector('.nav-links');
// menu.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
// });

// const form = document.getElementById('main');
// // const username = document.getElementById('username');
// // const email = document.getElementById('email');
// // const password = document.getElementById('password');
// // const password2 = document.getElementById('password2');

// form.addEventListener('click', e => {
//     e.preventDefault();
    
//     const username = document.getElementById('username');
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const password2 = document.getElementById('password2');

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if (usernameValue === '') {
//         setError(username, 'Username is required');
//     }
//     else {
//         setSuccess(username);
//     }

//     if (emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if (passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 6) {
//         setError(password, 'Password must be at least 6 character.')
//     } else {
//         setSuccess(password);
//     }

//     if (password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }
// };



// document.getElementById("signup").addEventListener("click", (event) => {
//     event.preventDefault();

// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
 
// let data ={
//     fullName = username.value,
//     email = email.value,
//     password = password.value
// }
// console.log(data)
// signupFunction(data)
// })
 
// const signupFunction = (data) =>{
// fetch("https://cyifuzo-backend.herokuapp.com/api/v1/user/signup", {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// }).then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))

// };
