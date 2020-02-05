import React, {useState} from "react";
import './tasklist.css'
import ToDoInput from "./../input";
import ListGroup from "../listGroup";
import Weeks from "../weeks";

const TaskList = () => {

    const [tasks, setTasks] = useState([{task:'Drink', done: false, show: true, day: 1, id:1}, {task:'Eat', done: false, show: true, day: 2, id:2}, {task:'Coffee', done: true, show: true, day: 3, id:3}, {task:'Coffee3', done: true, show: true, day: 4, id:4}, {task:'Coffee2', done: true, show: true, day: 5, id:6} , {task:'Coffee1', done: true, show: true, day: 6, id:7},{task:'CoffeeSun', done: true, show: true, day: 0, id:8}]);
    const [dayToShow, setDayToShow] = useState(new Date().getDay()-1);
    const [id, setId] = useState(100);

    const changeDay = (day) => {
        setDayToShow(day);
    };

    const addTask = (task) => {
        const newList = [...tasks.map(({task, done, day,id}) =>
            ({task, done, day, show:true, id})),
            {task, done: false, show: true, day: dayToShow, id}];
        setId(id+1);
        setTasks(newList.sortDone());
    };

    Array.prototype.sortDone = function () {
        return this.sort((prevEl, curEl) => prevEl.done - curEl.done);
    };

    const checkTask = (id) => {
        let newList = [];
        for (let i = 0; i < tasks.length; i++){
            if(tasks[i].id === id){
                tasks[i].done = !tasks[i].done;
            }
            newList.push(tasks[i]);
        }
        setTasks(newList.sortDone());
    };

    const deleteTask = (e) => {
        const newList = tasks.filter(el => el.id!==parseInt(e.target.value));
        e.stopPropagation();
        setTasks(newList);
    };

    const filter = (filteredString) => {
        const newList = tasks.map(task => {
            if(task.task.toLowerCase().startsWith(filteredString.toString().toLowerCase())){
                return ({...task, show:true});
            } else {
                return ({...task, show:false});
            }
        });
        setTasks(newList);
    };

    const deleteChecked = (day) => {
        const newList = tasks.filter(el => {
            return !(el.day === day && el.done === true);
        });
        setTasks(newList);
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
                    <ListGroup tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} dayToShow={dayToShow} deleteChecked={deleteChecked}/>
                </div>
            </div>
        </div>
    )
};

export default TaskList;