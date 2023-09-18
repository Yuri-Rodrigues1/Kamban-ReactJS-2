import React from "react";
import "./TaskContainer.css";
import TaskContent from "../TaskContent/TaskContent";

export default function ({
  title,
  tasks,
  onAddTask,
  taskState,
  onUpdateTask,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div>
      <div className="task-container">
        <div className="title">{title}</div>
        <div className="content">
          {tasks.map((task) => {
            return (
              <TaskContent
                key={task.id}
                id={task.id}
                title={task.title}
                taskState={task.state}
                onUpdateTask={onUpdateTask}
                onDeleteTask={onDeleteTask}
              />
            );
          })}
        </div>
        <button onClick={addTask}>Adcionar task</button>
      </div>
    </div>
  );
}
