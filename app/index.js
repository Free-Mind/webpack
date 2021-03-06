import React from 'react'				//导入react框架
import {render} from 'react-dom' 
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import products from './modules/salemgr/salemgrreducer'
import {Router, browserHistory} from 'react-router'
import routes from './routes'

let store = createStore(products,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());		//创建新的store

render(
	<Provider store = {store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('app')
	);//store通过provider传递给子组件