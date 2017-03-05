import React,{ Component } from 'react'
import Salemgrcontainers from './salemgrcontainers'
import { Link } from 'react-router'
class Salemgrpage extends Component{

	render(){
		return (
			<div>
				<Salemgrcontainers />
				<Link to="/addproduct">添加商品</Link>
			</div>
			);
	}
}
export default Salemgrpage