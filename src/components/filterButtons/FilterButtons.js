import React from "react";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_DONE} from "../../constants/filterConstants";
import { connect } from "react-redux";

const FilterButtons = ({dispatch, filter}) => {
    return (
            <div className="btn-group">
            <button className={`btn btn-outline-success ${filter===SHOW_DONE? 'active' : ''}`} onClick={() => dispatch({type: SHOW_DONE})}>DONE</button>
            <button className={`btn btn-outline-success ${filter===SHOW_ALL? 'active' : ''}`} onClick={() => dispatch({type: SHOW_ALL})}>ALL</button>
            <button className={`btn btn-outline-success ${filter===SHOW_ACTIVE? 'active' : ''}`} onClick={() => dispatch({type: SHOW_ACTIVE})}>ACTIVE</button>
            </div>
    );
};
const mapStateToProps = (state => {
    return {
        filter: state.filter,
    }
});

export default connect(mapStateToProps)(FilterButtons);