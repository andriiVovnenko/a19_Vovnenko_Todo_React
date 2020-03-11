import React, { useState, useEffect } from "react";
import ToDoInput from "./../input";
import ListGroup from "../listGroup";
import Weeks from "../weeks";
import * as actions from './../../actionCreators/tasks'
import {selectFilteredSortedTasks, selectByDay, selectDay} from '../../selectors/tasks';
import { connect } from 'react-redux';
import FilterButtons from "../filterButtons";

import {bindActionCreators} from "redux";

const TaskList = ({
  reduxTasks,
  day,
  toogleTaskCreator,
  deleteCheckedCreated,
  deleteTaskCreator,
  addTaskCreator,
  refreshStringCreator,
  changeDayCreator,
  getTasksActionCreator,
  load,
    er,
}) => {
    const [id, setId] = useState(100);

    const addTask = (task) => {
        setId(id+1);
        refreshStringCreator();
        addTaskCreator({task, day, id});
    };

    const deleteTask = (e) => {
        e.stopPropagation();
        deleteTaskCreator(e);
    };

    useEffect(() => {
      getTasksActionCreator();
    }, [getTasksActionCreator]);

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
                        changeDay={changeDayCreator}
                        dayToShow={day}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-danger deleteAllBtn"
                        onClick={() => deleteCheckedCreated(day)}>
                        delete all checked
                    </button>
                </div>
              <div className="col-12 col-md-8">
                {
                  !load ? 'Грузим таски!!!!!!!!!!!!!!!' : !er ? (
                    <ListGroup
                      tasks={reduxTasks}
                      checkTask={toogleTaskCreator}
                      deleteTask={deleteTask}
                      deleteChecked={deleteCheckedCreated}
                    />
                  )
                      : <h1>{er}</h1>
                }
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
        load: state.tasksLoad,
        er: state.er,
    }
});

const mapDispatchToProps = (dispatch => {
   return bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
