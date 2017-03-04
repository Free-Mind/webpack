import React,{Component} from 'react'
import {Link,IndexLink} from 'react-router'

class Nav extends Component{

    render(){
        return(
            <ul role="nav">
                <li><IndexLink activeStyle={{color:'red'}} to="/">home</IndexLink></li>
                <li><Link activeStyle={{color:'green'}} to="/salemgr">salemgr</Link></li>
                <li><Link activeStyle={{color:'yellow'}} to="/salelistmgr">salelistmgr</Link></li>
            </ul>
        );
    }
}
export default Nav