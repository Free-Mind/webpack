import React,{ Component } from 'react'
import Nav from '../nav/nav'
/*
const Salelistmgr = React.createClass({
	render(){
		return(
			<div>
				this is salelistmgr page!
			</div>
			)
	}
});
*/
class Salelistmgr extends Component{

	render(){
		return(
			<div>
				<div>
					this is salelistmgr page!
				</div>
				<Nav/>
			</div>
		);
	}
}

export default Salelistmgr