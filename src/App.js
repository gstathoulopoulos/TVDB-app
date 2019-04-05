import React from "react";
//import { render } from "react-dom";

import Titles from "./components/Titles";
import Form from "./components/Form";
//import Weather from "./components/Weather";

const ROOT_URL  = "http://api.tvmaze.com";

class App extends React.Component {
  getInfo = async e => {
    e.preventDefault();
    console.log(`***Before`);
    console.log(`** componentWillMount`);
    const Title = e.target.elements.Title.value;
    const api_call = await fetch(
      `${ROOT_URL}/search/shows?q==${Title}`
    );
    const data = await api_call.json();
    const response = await api_call.response();
    console.log(`***After`);
    //console.log(response);
    //console.log(data);
  };
  render() {
    console.log(`**** render`);
    return (
      <div>
        <Titles />
        <Form getInfo={this.getInfo} />
      </div>
    );
  }
}

export default App;
