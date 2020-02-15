import React, {useState} from "react";
import ToDoInput from "./../input";
import ListGroup from "../listGroup";
import Weeks from "../weeks";
import { selectSortedTasks, selectFilteredSortedTasks } from '../../selectors/tasks';
import { connect } from 'react-redux';
import { TOGGLE, ADD_TASK, DELETE_TASK, DELETE_ALL_CHECKED, FILTER_TASK } from '../../actionTypes';


const TaskList = ({ reduxTasks, dispatch }) => {
    const [dayToShow, setDayToShow] = useState(new Date().getDay() - 1);
    const [id, setId] = useState(100);
    const [fileredStding, setFilteredString] = useState('');

    const changeDay = (day) => {
        setDayToShow(day);
    };

    const addTask = (task) => {
        setFilteredString('')
        setId(id+1);
        dispatch({type: ADD_TASK, payload: {task, dayToShow, id}});
    };

    const checkTask = (id) => {
        dispatch({ type: TOGGLE, payload: id });
    };

    const deleteTask = (e) => {
        e.stopPropagation();
       dispatch({ type: DELETE_TASK, payload: e.target.value });
    };

    const deleteChecked = (day) => {
        dispatch({type: DELETE_ALL_CHECKED, payload : day });
    };

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <ToDoInput addTask={addTask} setFilteredString={setFilteredString} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 weeks">
                    <Weeks changeDay={changeDay} dayToShow={dayToShow} />
                    <button type="button" className="btn btn-outline-danger deleteAllBtn" onClick={() => deleteChecked(dayToShow)}>delete all checked</button>
                </div>
                <div className="col-12 col-md-8">
                    <ListGroup tasks={selectFilteredSortedTasks(reduxTasks, fileredStding)} checkTask={checkTask} deleteTask={deleteTask} dayToShow={dayToShow} deleteChecked={deleteChecked}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state => {
    return {
        reduxTasks: selectSortedTasks(state),
    }
});


export default connect(mapStateToProps)(TaskList);
