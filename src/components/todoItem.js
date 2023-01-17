import { useDispatch } from "react-redux";
import { removeTask,taskToggleComplited } from "../store/sliceUser";

export const TodoItem = ({ idTask, isComplited, task }) => {
    const dispatch = useDispatch();
    return (
        <li className='list-group-item'>
            <input
                type='checkbox'
                checked={isComplited}
                onChange={() => dispatch(taskToggleComplited({idTask}))} 
                />
            <span className='task-text'>{task}</span>
            <button
                className='task-button'
                onClick={() => dispatch(removeTask({idTask}))}
                >
                <span
                    className='button-text'>
                    &times;</span>
            </button>
        </li>
    )
}