import Task from "../Task/index.js"

const PrintTaskList = (props) => {
  const $container = document.querySelector(props.parent)
  
  $container.innerHTML = ''

  props.taskList.forEach(task => {
    const newTask = Task.build(task)

    $container.appendChild(newTask)
  })
}

export default PrintTaskList