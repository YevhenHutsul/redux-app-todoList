import { useState, useEffect } from 'react';
import  TodoList  from './components/todoList'
import { InputField } from './components/inputField';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addNewTodo, fetchTodos } from './store/sliceUser';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const {status, error} = useSelector(state => state.todo);

    
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addNewTodo(inputValue))
        setInputValue('');
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])
    

    return (
        <div>
            <InputField
                inputValue={inputValue}
                addTask = {addTask}
                setInputValue = {setInputValue}
            />
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <TodoList />
        </div>
    );
}

//helpers
function createTask(text) {
    return {
        id: Math.floor(Math.random() * 10000),
        title: text,
        completed: false,
    }
}
export default App;
