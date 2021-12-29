const firebaseConfig = {
  apiKey: "AIzaSyBfoAN9yxFNnCOznz0z8wAxSQlV783FWxA",
  authDomain: "tunelo-music.firebaseapp.com",
  databaseURL: "https://tunelo-music-default-rtdb.firebaseio.com",
  projectId: "tunelo-music",
  storageBucket: "tunelo-music.appspot.com",
  messagingSenderId: "562353448162",
  appId: "1:562353448162:web:831f7027a673428d9c2abb"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
