import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Home from './modules/Home/Home';
import Salemgr from './modules/salemgr/salemgr';
import Salelistmgr from './modules/salelistmgr/salelistmgr';
import App from './modules/app/app'

export  default (
    <Route path="/" component = {App}>
        <IndexRoute component={Home}/>
        <Route path="salemgr" component={Salemgr}/>
        <Route path="salelistmgr" component={Salelistmgr}/>
    </Route>
)
