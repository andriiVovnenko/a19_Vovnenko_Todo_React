import React from "react";

const ListGroup = ({tasks, checkTask, deleteTask, dayToShow}) => {

    let tasksToShow = tasks.filter(task => task.day === dayToShow);

    return (
        <div>
        <ul className="list-group">
            {tasksToShow
                .map(({task, done, show, id}) =>
                    <li
                        key={id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${done ? "taskDone items" : ""} ${show? "" : "dis" }`}
                        onClick={() => checkTask(id)}>{task}
                        <button type="button" value={id} className="btn btn-outline-danger" onClick={deleteTask}>Delete</button>
                    </li>)}
        </ul>
        </div>
    )
};

export default ListGroup;
