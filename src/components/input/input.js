// todo remove useEffect
import React, { useState, useEffect } from 'react';


const ToDoInput = ({ addTask, filter }) => {

    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value);
        filter(e.target.value);
    };

    return (
        <div className="wrap_input">
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                <span className="input-group-text"
                      id="inputGroup-sizing-lg">Your Task
                </span>
                </div>
                <input type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-lg"
                       value={task}
                       onChange={onChange}/>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                            if(task === '') return;
                            addTask(task);
                            setTask('');
                        }}>Add task</button>
                </div>
            </div>
        </div>
    );
};

export default ToDoInput;
