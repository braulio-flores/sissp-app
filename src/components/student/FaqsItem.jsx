import React from "react";

const FaqsItem = ({ question, answer }) => {
  return (
    <div className="col">
      <div className="card border-secondary mb-3">
        <div className="card-body text-secondary">
          <h5 className="card-title text-success">{question}</h5>
          <p className="card-text">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqsItem;
