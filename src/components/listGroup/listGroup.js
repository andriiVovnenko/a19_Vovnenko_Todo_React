import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const TaskLink = styled.div`
    z-index: 1000;
    transition: 0.7s;
        :hover {
            color: green;
        }
`;

const ListGroup = ({tasks, checkTask, deleteTask}) => {
    return (
        <div>
        <ul className="list-group">
            {tasks
                .map(({task, done, show, id}) =>
                    <li
                        key={id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${done ? "taskDone items" : ""} ${show? "" : "dis" }`}
                        onClick={() => checkTask(id)}><TaskLink as={Link} to={`/change-task/${id}`}>{task}</TaskLink>
                        <button type="button" value={id} className="btn btn-outline-danger" onClick={deleteTask}>Delete</button>
                    </li>)}
        </ul>
        </div>
    )
};

export default ListGroup;
