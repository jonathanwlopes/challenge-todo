import api from "../api/index.js";
import generateID from "../utils/generateID.js";

const todo = {
  data: [],
  create: async (task) => {
    const todoList = await api(
      { url: "/create" },
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return todoList;
  },
  read: async () => {
    const todoList = await api({ url: "/list" });

    return todoList;
  },
  update: async (id, newData) => {
    const taskList = await api(
      { url: `/update/${id}` },
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    return taskList;
  },
  toggleTask: async (id) => {
    const taskList = await api(
      { url: `/toggleTask/${id}` },
      {
        method: "PUT",
      }
    );

    return taskList;
  },
  delete: async (id) => {
    const taskList = await api(
      { url: `/delete/${id}` },
      {
        method: "DELETE",
      }
    );

    return taskList;
  },
};

export default todo;
