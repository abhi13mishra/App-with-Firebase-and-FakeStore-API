// script/login.js
function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  db.ref("users").once("value", (snapshot) => {
    const users = snapshot.val();
    let match = false;

    for (let id in users) {
      if (users[id].email === email && users[id].password === password) {
        match = true;
        localStorage.setItem("loggedInUser", JSON.stringify({ id, ...users[id] }));
        break;
      }
    }

    if (match) {
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong credentials! Try again.");
    }
  });
}