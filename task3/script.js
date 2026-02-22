document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").textContent = "Welcome, " + name + "!";
  });
