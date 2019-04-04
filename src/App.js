import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
//import Weather from "./components/Weather";

const API_KEY = "";

class App extends React.Component {
  getInfo = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
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
