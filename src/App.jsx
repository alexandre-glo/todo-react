import React from 'react';

import AddTask from './components/add-task/add-task';
import TaskList from './components/task-list/task-list';

import './App.scss';

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            showedList: '',
            todoList: [
                { id: 1, text: 'todo 1', status: 'done' },
                { id: 2, text: 'todo 2', status: 'pending' },
                { id: 3, text: 'todo 3', status: 'pending' },
                { id: 4, text: 'todo 4', status: 'done' }
            ]
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        let valElem = e.target.task;
        this.setState(
            { todoList: [
                ...this.state.todoList, 
                { 
                    id: this.state.todoList.length+1, 
                    text: valElem.value, 
                    status: 'pending' 
                }
            ]},
            () => valElem.value = ''
        );
    }

    changeStatus = e => {
        e.preventDefault();
        let {todoList} = this.state;
        if(todoList[e.target.value-1].status === 'done'){
            todoList[e.target.value-1].status ='pending';
        }else{
            todoList[e.target.value-1].status ='done';
        }
        this.setState({todoList});
    }

    changeFilter = e => {
        e.preventDefault();
        this.setState({showedList: e.target.value});
    }
    
    render(){
        const { todoList, showedList } = this.state;
        const filteredTask = todoList.filter( todoList => todoList.status.includes( showedList ) )
        return (
            <div className="App">
                <h1>Todo List</h1>
                

                <select onChange={this.changeFilter}>
                    <option value="">All task</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>
                
                <div className="list">
                    <div className='headList'>
                        <div>Text</div>
                        <div>Status</div>
                        <div>Change status</div>
                    </div>
                    {
                        filteredTask.map(
                            elem => <TaskList key={elem.id} element={elem} changeStatus={this.changeStatus} />
                        )
                    }
                </div>

                <AddTask handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
