import React from "react";

function Todo(props) {
    let listItems = props.toDo.map( (val) => <h1>{val}</h1>)
    return (
    <div>
        {listItems}
    </div>
    )
}



export default Todo;