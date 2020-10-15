import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './style.css'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FetchData from "./service/FetchData";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";

class App extends Component {

    fetchData = new FetchData()

    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
    }

    componentDidMount() {
        this.updateRocket()
        this.updateCompany()
    }

    updateRocket() {
        this.fetchData.getRocket()
            .then(data => {
                this.setState({rockets: data.map(item => item.name)})
                return data
            })
            .then(data => data.find(item => item.name === this.state.rocket))
            .then(rocketFeatures => {
                this.setState({rocketFeatures})
            })
    }

    changeRocket = (rocket) => {
        this.setState({
            rocket
        }, this.updateRocket)
    }

    updateCompany = () => {
        this.fetchData.getCompany()
            .then(company => this.setState({company}))
    }

    render() {
        return (
            <BrowserRouter>
                <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
                <Route path='/' exact>
                {this.state.company &&<Home company={this.state.company}/>}
                </Route>

                <Route path='/rocket'>
                    <Main rocket={this.state.rocket}/>
                    {this.state.rocketFeatures && <Features {...this.state.rocketFeatures}/>}
                </Route>

                <Route path='/calendar'>

                    <Calendar/>
                </Route>

                <Route path='/details'>

                    <Details/>
                </Route>

                {this.state.company &&<Footer {...this.state.company}/>}

            </BrowserRouter>
        );
    }
}

export default App;
