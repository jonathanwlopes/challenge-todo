import generateID from "../utils/generateID.js";

const todo = {
  data: [],
  create: (task) => {
    const taskList = todo.read();
    const _id = generateID(40);

    taskList.push({ done: false, ...task, _id });

    todo.data = taskList;
  },
  read: () => {
    return [...todo.data];
  },
  update: (id, newData) => {
    const taskList = todo.read();
    const newTaskList = taskList.map((task) => {
      if (task._id !== id) {
        return task;
      } else {
        return { ...task, ...newData };
      }
    });

    todo.data = newTaskList;
  },
  toggleTask: (id) => {
    const taskList = todo.read();
    const newTaskList = taskList.map((task) => {
      if (task._id !== id) {
        return task;
      } else {
        const done = task.done;

        return { ...task, done: !done };
      }
    });

    todo.data = newTaskList;
  },
  delete: (id) => {
    const taskList = todo.read();
    const newTaskList = taskList.filter((task) => {
      return task._id !== id;
    });

    todo.data = newTaskList;
  },
};

export default todo;
