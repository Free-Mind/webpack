import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos,onTodoClick}) => (
	<ul>
		{todos.map(todo =>
		<Todo
			key = {todo.id}
            {...todo}
			onClick = {() => onTodoClick(todo.id)}
		/>
    )}
	</ul>
)

TodoList.propTypes = {								//用来判断输入参数是否必须，并且类型是否正确
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList