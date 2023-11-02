import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'
import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    progress : 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div className="App">
        <Router>
        <LoadingBar
        color='#FF9130'
        height = {13}
        progress={this.state.progress}
      />
          <Navbar />
            <Routes >
            <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" />}></Route>
            </Routes>  
        </Router>
        <Footer />
      </div>
    );
  }
}
