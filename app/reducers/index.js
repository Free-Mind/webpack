/**
reducer:用来改变state的值，从而触发component的重新渲染
*/
import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({				//利用combineReducers将多个字reducer组合在一起
	todos,
	visibilityFilter
})

export default todoApp