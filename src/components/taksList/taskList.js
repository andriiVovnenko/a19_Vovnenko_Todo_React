import React, {useState} from "react";
// todo remove to taskList/index.js
import './tasklist.css'
import ToDoInput from "./../input";
import ListGroup from "../listGroup";
import Weeks from "../weeks";
import sortDone from '../../helpers/sortDone';

const initTasks = {
    1: {task:'Drink', done: false, show: true, day: 1, id:1},
    2: {task:'Eat', done: false, show: true, day: 2, id:2},
    3: {task:'Coffee', done: true, show: true, day: 3, id:3},
    4: {task:'Coffee3', done: true, show: true, day: 4, id:4},
    5: {task:'Coffee2', done: true, show: true, day: 5, id:6} ,
    6:{task:'Coffee1', done: true, show: true, day: 6, id:7},
    7: {task:'CoffeeSun', done: true, show: true, day: 0, id:8},

}

const TaskList = () => {

    const [tasks, setTasks] = useState(initTasks);
    const [dayToShow, setDayToShow] = useState(new Date().getDay()-1);

    const changeDay = (day) => {
        setDayToShow(day);
    };

    const addTask = (task) => {
        const id = Object.keys(tasks).length + 1;
        const newTasks = { ...tasks, [id]: { task, done: false, show: true, day: dayToShow, id}};
        setTasks(newTasks);
    };

    const checkTask = (id) => {
        const newTasks = {
            ...tasks, [id]: { ...tasks[id], done: !tasks[id].done }
        };
        setTasks(newTasks);
    };

    const deleteTask = (e) => {
        console.log(e.target.value)
        const newTasks = { ...tasks };
        delete newTasks[e.target.value];
        setTasks(newTasks);
    };

    const filter = (filteredString) => {
        const newTasksList = Object.values(tasks).map(task => {
            const show = task.toLowerCase().startsWith(filteredString.toString().toLowerCase());
            return { ...task, show }
        });
        const newTasks = {};
        newTasksList.forEach(task => {
            newTasks[task.id] = { ...task };
        });
        setTasks(newTasks);
    };

    const deleteChecked = (day) => {
        const newTasks = { ...tasks };
        Object.values(newTasks).forEach(task => {
            if (task.day !== day || task.done !== true) return;
            delete newTasks[task.id];
        });
        setTasks(newTasks);
    };

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <ToDoInput addTask={addTask} filter={filter}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 weeks">
                    <Weeks changeDay={changeDay} dayToShow={dayToShow} />
                    <button type="button" className="btn btn-outline-danger deleteAllBtn" onClick={() => deleteChecked(dayToShow)}>delete all checked</button>
                </div>
                <div className="col-12 col-md-8">
                    <ListGroup tasks={Object.values(tasks).sort(sortDone)} checkTask={checkTask} deleteTask={deleteTask} dayToShow={dayToShow} deleteChecked={deleteChecked}/>
                </div>
            </div>
        </div>
    )
};

export default TaskList;
