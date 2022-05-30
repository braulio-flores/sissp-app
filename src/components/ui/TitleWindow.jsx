import React from "react";

const TitleWindow = ({title, descriptionPage, mt}) => {
  return (
    <>
      <div className={`container mb-0 ${mt}`}>
        <h3 className="text-center p-5 m-0">
          <small className="text-muted ">{ title }</small>
        </h3>
      </div>
      <div className="container font-weight-bold text-center mt-0 mb-5">
        <mark>
          { descriptionPage }
        </mark>
      </div>
    </>
  );
};

export default TitleWindow;
