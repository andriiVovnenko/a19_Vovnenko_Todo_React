import React, { useState } from 'react';
import {connect} from "react-redux";
import {CHANGE_STRING} from "../../constants/filterConstants";

const ToDoInput = ({ addTask, filteredString, dispatch }) => {

    const onChange = (e) => {
        dispatch({ type: CHANGE_STRING, payload: e.target.value })
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
                       value={filteredString}
                       onChange={onChange}/>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                            if(filteredString === '') return;
                            addTask(filteredString);
                        }}>Add task</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
      filteredString: state.filteredString
  }
};

export default connect(mapStateToProps)(ToDoInput);
