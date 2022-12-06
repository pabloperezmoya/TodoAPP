import React from "react";
import './TodoItem.css';


const TodoItem = (props) =>{
    return (
        <li>
            <span onClick={props.onComplete} className={`${props.completed && 'taskFinished'}`}>
                <i className="fa-solid fa-check completed"></i>
            </span>
            <p className={`${props.completed && 'taskFinished'}`}>{props.text}</p>
            <span onClick={props.onDelete} className={`${props.completed && 'taskDeleted'}`}>
                <i className="fa-solid fa-minus delete" aria-hidden="true"></i>
            </span>
        </li>
    )
}

export {TodoItem};