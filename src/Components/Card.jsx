import React from "react";

const Card = ({data}) => {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.map((element, index) => {
        return (
          <div key={index}>
            <div className="col">
              <div className="card h-100">
                <img
                  src={element.image}
                  className="card-img-top"
                  alt={element.head}
                />
                <div className="card-body">
                  <h4 className="card-title">{element.head}</h4>
                  <p className="card-text">{element.content}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    {element.Date}
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Card;
