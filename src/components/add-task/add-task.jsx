import React from 'react';

const AddTask = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <h3>Add todo</h3>
        <input 
            className='task'
            type='text' 
            name='task'
            placeholder='Add task'
        />
        <input type="submit"/>
    </form>
)

export default AddTask;