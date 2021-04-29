import todo from "./data/index.js";
import PrintTaskList from "./modules/printTaskList/index.js";

const BASE_URL = 'https://aula-crud.herokuapp.com'

const $addForm = document.querySelector(".add-wrapper");
const $taskField = document.querySelector(".task-field");

$addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskName = $taskField.value;
  todo.create({ name: taskName });
  const todoList = todo.read();

  PrintTaskList({ parent: ".task-list", taskList: todoList });

  $taskField.value = "";
});



  // fetch(`${BASE_URL}/create`).then( (response) =>{
  //   return response.json()
  // }).then((data) => {
  //   console.log(data)
  //   return data
  // })

