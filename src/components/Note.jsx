import React from 'react'

export default function Note(props) {
    function handleClick(){
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1 className="noteTitle">{props.title}</h1>
            <p className="noteP">{props.content}</p>
            <button className="font-poppins" onClick={handleClick}></button>
        </div>
    )
}
