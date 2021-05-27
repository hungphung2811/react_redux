import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo } from '../../../actions/todo';

function HomePage() {
    const todoList = useSelector(state => state.todo.list);
    console.log(todoList);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addNewTodo('alo'))
    }
    return (
        <div className='text-blue-500'>
            hello world
            <button onClick={handleClick}>alo</button>
        </div>
    );
}

export default HomePage;
