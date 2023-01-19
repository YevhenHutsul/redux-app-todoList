import { TodoItem } from "./todoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
    const todos = useSelector(state => state.todo.tasks);
    return (
        <ul className='list-group'>
            {todos.map(todo => < TodoItem {...todo} key={todo.id}/>)}
        </ul>
    )
}
export default TodoList