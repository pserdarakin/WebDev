import React, { useState } from "react";

function ToDoItem(props){

    

    function handleCLick(){

    }

    return (
    <div onClick={handleCLick}>
        <li>{props.text}</li>
    </div>
    );
}

export default ToDoItem;