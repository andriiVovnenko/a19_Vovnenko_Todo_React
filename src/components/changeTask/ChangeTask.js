import React, { useState, useEffect, useCallback } from "react";
import {connect} from "react-redux";
import {selectCurrentTask, selectTaksText} from "../../selectors/tasks";
import {Link} from "react-router-dom";
import * as actions from './../../actionCreators/tasks'
import styled from "styled-components";

const L = styled.div`
  color: white !important;
`;

const ChangeTask = ({ currentTaskId, getTask, load, task, error, loadTask, updateTask }) => {
  const [useTask, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    console.log('render')
      getTask(currentTaskId);
  }, [currentTaskId]);

  useEffect(() => {
    console.log('render')
    setTask(task.task);
  }, [task.task]);

  return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="input-group input-group-l">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Change Task</span>
              </div>
              <input type="text" value={!load ? 'Грузим таск!!!!!!!!!!!!!!!' : !error ? useTask : error } onChange={onChange} className="form-control"
                     aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-sm"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="submit" className="btn btn-success btn-lg btn-block"
                    /*onClick={() => changeTask({id: currentTaskId, textTask: task})}>update</button>*/
                    onClick={() => updateTask( currentTaskId, useTask)}>update</button>
          </div>
          <div className="col-6">
            <L as={Link} to="/"><button type="button" className="btn btn-primary btn-lg btn-block">Back</button></L>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {!loadTask ? <h1>updating</h1> : null}
          </div>
        </div>
      </div>
  )
};

const mapStateToProps = (state, { match }) => {
  const currentTaskId = selectCurrentTask(match);
  return {
    currentTaskId,
    //taskText: selectTaksText(state, currentTaskId),
    load: state.taskLoad,
    task: state.changeTaskReducer,
    error: state.er,
    loadTask: state.taskUpdate,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTask: ({id, textTask}) => dispatch(actions.changeTask({id, textTask})),
    getTask: (id) => dispatch(actions.getTaskActionCreator(id)),
    updateTask: (id, task) => dispatch(actions.updateTaskActionCreator(id, task)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTask);
