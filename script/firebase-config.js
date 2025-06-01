import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCcNZzKQYVhwzPNGlD-_yJ1iF3RLV7MOo",
  authDomain: "irebase-dashboard.firebaseapp.com",
  databaseURL: "https://irebase-dashboard-default-rtdb.firebaseio.com",
  projectId: "irebase-dashboard",
  storageBucket: "irebase-dashboard.firebasestorage.app",
  messagingSenderId: "378523909085",
  appId: "1:378523909085:web:01313e3a4665b32e819434",
  measurementId: "G-PC8C614LMG"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };