const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  alert("You must log in first!");
  window.location.href = "login.html";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

const container = document.getElementById("productContainer");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" width="100">
        <p>Price: $${product.price}</p>
        <hr/>
      `;
      container.appendChild(div);
    });
  })
  .catch((err) => {
    console.error(err);
    container.innerText = "Failed to load products.";
  });