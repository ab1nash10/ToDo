const inputField = document.querySelector("#input-field");
const taskList = document.querySelector(".taskList");

function addTask() {
  if (inputField.value === "") alert("Please add Task !!");
  else {
    let li = document.createElement("li");
    li.innerHTML = `${inputField.value}`;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputField.value = "";
  saveData();
}
taskList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("active");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
function showData() {
  taskList.innerHTML = localStorage.getItem("data");
}
showData();
