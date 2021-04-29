import Element from "../element/index.js";
import { TRASH } from "../../mocks/svg/index.js";
import todo from "../../data/index.js";
import PrintTaskList from "../printTaskList/index.js";

const Task = {
  build: (props) => {
    const _trash = Element({
      elementType: "div",
      classList: ["box-trash"],
      inner: TRASH,
    });

    const _taskName = Element({
      elementType: "span",
      text: props.name,
      classList: ["task-name"],
    });

    const _editField = Element({
      elementType: "input",
      classList: ["edit-field", "hide"],
      value: props.name,
    });

    const _checkbox = Element({
      elementType: "div",
      classList: ["checkbox"],
    });

    const _container = Element({
      elementType: "li",
      classList: ["task", props.done ? "task-done" : "task-not-done"],
      children: [_checkbox, _taskName, _editField, _trash],
    });

    _trash.addEventListener("click", async () => {
      const taskList = await todo.delete(props._id);

      PrintTaskList({ parent: ".task-list", taskList });
    });

    _checkbox.addEventListener("click", async () => {

     const taskList = await todo.toggleTask(props._id);

      PrintTaskList({ parent: ".task-list", taskList });
    });

    _taskName.addEventListener("click", () => {
      _taskName.classList.toggle("hide");
      _editField.classList.toggle("hide");
      _editField.focus();
    });

    _editField.addEventListener("blur", async () => {
      _taskName.classList.toggle("hide");
      _editField.classList.toggle("hide");

      const taskList = await todo.update(props._id, { name: _editField.value });

      PrintTaskList({ parent: ".task-list", taskList });
    });

    _editField.addEventListener("keyup", async (e) => {
      const key = e.key;

      if (key === "Enter") {
        const taskList = await todo.update(props._id, {
          name: _editField.value,
        });

        PrintTaskList({ parent: ".task-list", taskList });
      }
    });

    return _container;
  },
};

export default Task;
