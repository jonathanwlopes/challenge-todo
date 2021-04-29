import todo from "./data/index.js";
import PrintTaskList from "./modules/printTaskList/index.js";

const BASE_URL = "https://aula-crud.herokuapp.com";

const $addForm = document.querySelector(".add-wrapper");
const $taskField = document.querySelector(".task-field");

$addForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const taskName = $taskField.value;
  
  const taskList = await todo.create({ name: taskName })

  PrintTaskList({ parent: ".task-list", taskList: taskList });

  $taskField.value = "";
});

const printPrimatyResult = async () => {
  const result = await todo.read();

  PrintTaskList({ parent: ".task-list", taskList: result });
};

printPrimatyResult();
