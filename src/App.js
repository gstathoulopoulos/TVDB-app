import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
//import Weather from "./components/Weather";

const API_KEY = "IY3JFFL7JRCNNA7V";
const USER_KEY = "0VLSLJEEW1KO94E8";
const USERNAME = "bigbearanesq1z";

class App extends React.Component {
  getInfo = async e => {
    e.preventDefault();
    const Title = e.target.elements.Title.value;
    const api_call = await fetch(
      `https://api.thetvdb.com/search/series?name=${Title}`
    );
    //const data = await api_call.json();
    const response = await api_call.response();
    console.log("jdklsasjdla");
    //console.log(response);
    //console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getInfo={this.getInfo} />
      </div>
    );
  }
}

export default App;
