import { useState } from 'react';
import  TodoList  from './components/todoList'
import { InputField } from './components/inputField';
import { useDispatch } from 'react-redux';
import './App.css';
import { addTodo } from './store/sliceUser';

const App = () => {
    const [inputValue, setInputValue] = useState('');

    
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo(createTask(inputValue)))
        setInputValue('');
    }


    const toggleComplited = (id) => {
        //console.log(id);
        //setDataTasks(
        //    dataTasks.map(
        //        task => {
                    //if (task.idTask !== id) {
                    //    return task
                    //};
                    //return {
                    //    ...task,
                    //    isComplited: !task.isComplited
                    //};
        //        }
        //    )
        //)
    }
    

    return (
        <div>
            <InputField
                inputValue={inputValue}
                addTask = {addTask}
                setInputValue = {setInputValue}
            />
            <TodoList />
        </div>
    );
}

//helpers
function createTask(text) {
    return {
        idTask: Math.floor(Math.random() * 10000),
        task: text,
        isComplited: false,
    }
}
export default App;
