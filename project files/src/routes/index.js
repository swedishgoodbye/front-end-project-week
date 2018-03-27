import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, HashRouter } from 'react-router-dom';
import Front from '../pages/front-page'
import Nav from '../navigation/'

export default () => {
    return(
    <Router history={HashRouter}>
    
        <Route path='/' component={ Nav } />
           <IndexRoute component={Front}></IndexRoute>
           

       
    </Router>);
}