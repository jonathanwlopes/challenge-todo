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

    _trash.addEventListener("click", () => {
      todo.delete(props._id);

      const taskList = todo.read();

      PrintTaskList({ parent: ".task-list", taskList });
    });

    _checkbox.addEventListener("click", () => {
      todo.toggleTask(props._id);

      const taskList = todo.read();

      PrintTaskList({ parent: ".task-list", taskList });
    });

    _taskName.addEventListener("click", () => {
      _taskName.classList.toggle("hide");
      _editField.classList.toggle("hide");
      _editField.focus();
    });

    _editField.addEventListener("blur", () => {
      _taskName.classList.toggle("hide");
      _editField.classList.toggle("hide");

      todo.update(props._id, { name: _editField.value });

      const taskList = todo.read();

      PrintTaskList({ parent: ".task-list", taskList });
    });

    _editField.addEventListener("keyup", (e) => {
      const key = e.key;

      if (key === "Enter") {
        todo.update(props._id, { name: _editField.value });

        const taskList = todo.read();

        PrintTaskList({ parent: ".task-list", taskList });
      }
    });

    return _container;
  },
};

export default Task;
