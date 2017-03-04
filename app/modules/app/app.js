import React,{Component} from 'react'

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
class App extends Component{

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App