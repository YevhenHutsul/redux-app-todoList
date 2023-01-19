import { useDispatch } from "react-redux";
import { todoDelete, toggleStatus } from "../store/sliceUser";

export const TodoItem = ({ id, completed, title }) => {
    const dispatch = useDispatch();
    return (
        <li className='list-group-item'>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            />
            <span className='task-text'>{title}</span>
            <button
                className='task-button'
                onClick={() => dispatch(todoDelete(id))}
            >
                <span
                    className='button-text'>
                    &times;</span>
            </button>
        </li>
    )
}