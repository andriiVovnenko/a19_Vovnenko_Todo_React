import React, {useEffect} from "react";
import './listGroul.css';

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
                        <button type="button" value={id} className="btn btn-outline-danger" onClick={(e) => deleteTask(e)}>Delete</button>
                    </li>)}
        </ul>
            {/*<button type="button" className="btn btn-outline-danger deleteAllBtn" onClick={() => deleteChecked(dayToShow)}>delete all checked</button>*/}
        </div>
    )
};

export default ListGroup;