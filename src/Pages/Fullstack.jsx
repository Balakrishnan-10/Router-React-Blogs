import React from "react";
import Card from "../Components/Card";

const Fullstack = ({ data }) => {
  let fsdData = data.filter(
    (element) => element.head === "Full Stack Development");
  return (
    <div className="container">
      <h3>Full Stack Development</h3>
      <Card data={fsdData} />
    </div>
  );
};

export default Fullstack;
