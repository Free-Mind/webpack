/**
	容器组件，处理前台业务逻辑，响应用户操作
*/
import AddTodoForm from '../components/AddTodoForm'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

//将store的dispatch函数传进去，当用户在网页上进行操作的时候，处理用户的业务逻辑
const mapDispatchToProps = (dispatch)=>{
	return {
		onSubmit: (text) => {
			dispatch(addTodo(text));				//创建一个action，并将这个action发射出去
		}
	}
}

let AddTodo = connect(null,mapDispatchToProps)(AddTodoForm);

export default AddTodo;