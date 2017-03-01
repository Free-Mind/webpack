import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisiableTodoList from '../containers/VisiableTodoList'

const App = () => (					//显示组件，只需要展示，不需要处理业务逻辑，省略connect
	<div>							
		<AddTodo />
		<VisiableTodoList />
		<Footer />
	</div>
)

export default App