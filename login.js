 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword}  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 import { getFirestore, setDoc, doc}  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBTlZxXB5IGuv-3OwUbNstjfCbqMfYcbJM",
   authDomain: "agventures-3b6ee.firebaseapp.com",
   projectId: "agventures-3b6ee",
   storageBucket: "agventures-3b6ee.firebasestorage.app",
   messagingSenderId: "1080330708245",
   appId: "1:1080330708245:web:be0b06096c08494148b51c"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const signUp = document.getElementById('submitRegiternow')
 Regiternow.addEventListener('click',(event)=>{
  event.preventDefault();
  const username=document.getElementById('rUsername').value;
  const email=document.getElementById('rEmail').value;
  const password=document.getElementById('rPassword').value;

  const auth=getAuth();
  const db=getFirestore();

  createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
  const user = userCredential.user;
  const userData={
    email:email,
    username: username
  };
  showMessage('Register Successfully');
  .then(()=>{
    window.location.href='login.html';
  )}
  .catch((error)=>{
    console.error("error writing document",error);

  });
})
   .catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/email-already-in-use'){
      showMessage('Email Address Already Exists !!!','login');
    }
    else{
      showMessage('unable to create user','signup');
    }
   })
})