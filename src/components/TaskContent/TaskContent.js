import React, { useState } from "react";
import "./TasjContent.css";

export default function ({ id, title, taskState, onUpdateTask, onDeleteTask }) {
  const [editableTitle, setEditableTitle] = useState(title);
  const [isEditiing, setIsEditing] = useState(false);

  const onTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onUpdateTask(id, editableTitle, taskState);
      if (editableTitle === "") {
        onDeleteTask(id);
      }
    }
  };

  const editState = (e) => {
    onUpdateTask(id, title, e.target.value);
  };

  if (isEditiing === false) {
    return (
      <div className="task-content">
        <div
          onClick={() => {
            setIsEditing(true);
          }}
        >
          {editableTitle}
        </div>
        <div>
          <select onChange={editState} value={taskState}>
            <option value="Pendente">pendente</option>
            <option value="Fazendo">fazendo</option>
            <option value="Concluido">concluido</option>
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <input
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
          value={editableTitle}
        ></input>
      </div>
    );
  }
}
