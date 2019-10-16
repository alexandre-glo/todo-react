import React from 'react';

import './task-list.scss';

const TaskList = ({element, changeStatus}) => {
    const {text, status, id} = element;
    return (
        <div className="list-element">
            <div className="list-text">
                {text}
            </div>
            <div className="list-status">
                {status}
            </div>
            <div className="list-change">
                {
                    status === 'done' 
                    ? <button style={{backgroundColor:'green'}} onClick={changeStatus} value={id}>Done</button>
                    : <button style={{backgroundColor:'aquamarine'}} onClick={changeStatus} value={id}>Pending</button>
                }
            </div>
        </div>
    )
}

export default TaskList;