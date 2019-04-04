import React from "react";

const Form = props => (
  <form onSubmit={props.geInfo}>
    <input type="text" name="Title" placeholder="TV Series Title..." />
    <button>Get Info</button>
  </form>
);

export default Form;
