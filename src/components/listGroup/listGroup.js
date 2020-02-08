// todo remove useEffect
import React, {useEffect} from "react";
// todo remove to listGroup/index.js
import './listGroul.css';
// todo remove deleteChecked
const ListGroup = ({tasks, checkTask, deleteTask, dayToShow, deleteChecked}) => {

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
                        { /* same without create new function on every rendering onClick={deleteTask} */ }
                        <button type="button" value={id} className="btn btn-outline-danger" onClick={(e) => deleteTask(e)}>Delete</button>
                    </li>)}
        </ul>
            { /* todo remove commented code */}
            {/*<button type="button" className="btn btn-outline-danger deleteAllBtn" onClick={() => deleteChecked(dayToShow)}>delete all checked</button>*/}
        </div>
    )
};

export default ListGroup;
