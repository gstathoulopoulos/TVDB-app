import React from "react";

const ResultPage = props => (
  <div>
    <h3>Show Info</h3>
    <strong>name: </strong>
    <p>{props.name}</p>
    <strong>error:</strong>
    <p>{props.error}</p>
  </div>
);

export default ResultPage;
