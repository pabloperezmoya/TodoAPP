import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) =>{
    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <div className="buttonContainer">
            <button onClick={onClickButton}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}

export {CreateTodoButton};