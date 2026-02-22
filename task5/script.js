let students = [];
const form = document.getElementById("studentForm");
const input = document.getElementById("studentName");
const list = document.getElementById("studentList");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = input.value;
  students.push(name);
  input.value = "";
  displayStudents();
});
function displayStudents() {
  list.innerHTML = "";
  students.forEach(function (student) {
    const li = document.createElement("li");
    li.textContent = student;
    list.appendChild(li);
  });
}
