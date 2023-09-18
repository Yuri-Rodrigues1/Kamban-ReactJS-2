import "./styles.css";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import { useState } from "react";
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    console.log(newTask);
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <TaskContainer
        title="Pendente"
        taskState="Pendente"
        tasks={tasks.filter((e) => e.state === "Pendente")}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
      <TaskContainer
        title="Fazendo"
        taskState="Fazendo"
        tasks={tasks.filter((e) => e.state === "Fazendo")}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
      <TaskContainer
        title="Concluido"
        taskState="Concluido"
        tasks={tasks.filter((e) => e.state === "Concluido")}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}
