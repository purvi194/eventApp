import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsPage from "../components/DetailsPage";
import FavoritesPage from "../components/FavoritesPage";
import Home from '../components/Home';

class DefaultContainer extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/details' component={DetailsPage} />
                    <Route exact path='/favorites' component={FavoritesPage} />
                </Switch>
            </Router>
        )
    }
}

export default DefaultContainer;