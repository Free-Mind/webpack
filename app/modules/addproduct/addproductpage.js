import React,{ Component } from 'react'
import Addproductcontainers from './addproductcontainers'
import {Link} from 'react-router'
class Addproductpage extends Component{

    render(){
        return(
            <div>
                <Addproductcontainers/>
                <Link to="/salemgr">商品列表</Link>
            </div>
        );
    }
}

export default Addproductpage