import React from "react";
import Card from "../Components/Card";

const All = ({ data }) => {
  return (
    <>
      <div className="container">
        <h3>All Programs</h3>
        <Card data={data} />
      </div>
    </>
  );
};

export default All;
