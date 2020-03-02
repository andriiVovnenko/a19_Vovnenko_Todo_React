import React, {useState} from "react";
import {connect} from "react-redux";
import {selectCurrentTask, selectTaksText} from "../../selectors/tasks";
import {Link} from "react-router-dom";
import * as actions from './../../actionCreators/tasks'
import styled from "styled-components";

const L = styled.div`
  color: white !important;
`;

const ChangeTask = ({taskText, currentTaskId, changeTask}) => {
  const [task, setTask] = useState(taskText);

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="input-group input-group-l">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Change Task</span>
              </div>
              <input type="text" value={task} onChange={onChange} className="form-control"
                     aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-sm"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="submit" className="btn btn-success btn-lg btn-block"
                    onClick={() => changeTask({id: currentTaskId, textTask: task})}>update</button>
          </div>
          <div className="col-6">
            <L as={Link} to="/"><button type="button" className="btn btn-primary btn-lg btn-block">Back</button></L>
          </div>
        </div>
      </div>
  )
};

const mapStateToProps = (state, { match }) => {
  const currentTaskId = selectCurrentTask(match);
  return {
    currentTaskId,
    taskText: selectTaksText(state, currentTaskId),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTask: ({id, textTask}) => dispatch(actions.changeTask({id, textTask}))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTask);