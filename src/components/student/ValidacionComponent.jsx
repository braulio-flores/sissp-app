import React from "react";
import { useSelector } from "react-redux";
import ValidationRequest from "./ValidationRequest";
import ValidationWaiting from "./ValidationWaiting";


const ValidacionComponent = () => {
  
  const { statusRequested } = useSelector(data=>data.ui.validationPage);
  console.log(statusRequested);

  return (
    <>
      {
        !statusRequested ? 
        <ValidationRequest /> :
        <ValidationWaiting />
      }
    </>
  );
};

export default ValidacionComponent;
