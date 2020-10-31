import React from 'react';
import './App.css';
import Widget from "./Component/Widget";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Form from "./Component/Form";

export function App() {
    return (<Router>
        <Switch>
            <Route path={'/'} exact={true} component={Form}/>
            <Route path={'/widget'} component={Widget}/>
        </Switch>
    </Router>)
}
