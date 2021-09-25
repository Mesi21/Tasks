const createTask = (tasks, currTask) => {
  console.log(typeof(currTask))
  const newTask = {
    description: null,
    completed: false,
    index: null
  };
  newTask.description = currTask;
  newTask.index = tasks.length;
  console.log(currTask)
  tasks.push(newTask);
  return tasks;
}

export default createTask;