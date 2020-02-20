import React, {useState} from "react";
import ToDoInput from "./../input";
import ListGroup from "../listGroup";
import Weeks from "../weeks";
import {selectFilteredSortedTasks, selectByDay, selectDay} from '../../selectors/tasks';
import { connect } from 'react-redux';
import FilterButtons from "../filterButtons";
import {
    addTaskCreator, changeDayCreator,
    deleteCheckedCreated,
    deleteTaskCreator,
    refreshStringCreator,
    toogleTaskCreator
} from "../../actionCreators/tasks";

const TaskList = ({
                      reduxTasks,
                      day,
                      checkTask,
                      deleteChecked,
                      deleteTaskAction,
                      addTaskToStore,
                      changeString,
                      changeDay,
    }) => {
    const [id, setId] = useState(100);

    const addTask = (task) => {
        setId(id+1);
        changeString();
        addTaskToStore({task, day, id});
    };

    const deleteTask = (e) => {
        e.stopPropagation();
        deleteTaskAction(e);
    };

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <ToDoInput addTask={addTask} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    < FilterButtons />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 weeks">
                    <Weeks
                        changeDay={changeDay}
                        dayToShow={day}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-danger deleteAllBtn"
                        onClick={() => deleteChecked(day)}>
                        delete all checked
                    </button>
                </div>
                <div className="col-12 col-md-8">
                    <ListGroup
                        tasks={reduxTasks}
                        checkTask={checkTask}
                        deleteTask={deleteTask}
                        deleteChecked={deleteChecked}
                    />
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = (state => {
    return {
        reduxTasks: selectFilteredSortedTasks({
            tasks: selectByDay(state),
            state
        }),
        day: selectDay(state),
    }
});

const mapDispatchToProps = (dispatch => {
   return {
       checkTask: (id) => dispatch(toogleTaskCreator(id)),
       changeDay: (day) => dispatch(changeDayCreator(day)),
       changeString: () => dispatch(refreshStringCreator()),
       addTaskToStore: ({task, day, id}) => dispatch(addTaskCreator({task, day, id})),
       deleteTaskAction: (e) => dispatch(deleteTaskCreator(e)),
       deleteChecked: (day) => dispatch(deleteCheckedCreated(day)),
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
