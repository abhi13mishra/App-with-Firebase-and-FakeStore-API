import { db } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  const usersRef = ref(db, "users");

  push(usersRef, {
    name,
    email,
    password,
  })
    .then(() => {
      alert("Registration Successful! Please log in.");
      window.location.href = "login.html";
    })
    .catch((err) => {
      console.error(err);
      alert("Something went wrong during registration.");
    });
});