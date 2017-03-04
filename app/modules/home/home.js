import React,{Component} from 'react'
import Nav from '../nav/nav'

/*
const Home = React.createClass({
	render(){
		return(
			<div>HOME</div>
			)
		}
	}
});
*/
/*
* const Home = () => (
* 	<div>
* 	    Home
* 	</div>
* )
* */
class Home extends Component{

	render(){
		return (
			<div>
				<div>
					this is Home page
				</div>
				<Nav/>
			</div>

		);
	}
}

export default Home