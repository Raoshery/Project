// signup js

function signup(){
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
// check if username or password fields are empty
if(username.trim()=== '' || password.trim() === ''){
    alert('Please entre both username and password');
    return;//  stop further execution if field are empty
}
// save user data to session storage

sessionStorage.setItem('username',username);
sessionStorage.setItem('password',password);

alert('Sign up successfull');
document.getElementById('signupUsername').value='';
document.getElementById('signupPassword').value='';

// Redirect to the login page after successfull signup
window.location.href='login.html';
}







// login js

function login(){
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
// check if username or password fields are empty
if(username.trim()=== '' || password.trim() === ''){
    alert('Please entre both username and password');
    return;//  stop further execution if field are empty
}
// Retrive user data from session storage

const savedUsername = sessionStorage.getItem('Username');
const savedPassword = sessionStorage.getItem('password');

if(savedUsername  === savedUsername && password === savedPassword){
    alert('Login successful');
    document.getElementById('loginUsername').value='';
    document.getElementById('loginPassword').value='';
    
    // Redirect to index page after successful login
    window.location.href='index.html';
} else {
    alert('Invalid username or password');
}
}
