import React from "react";
import ProgressBar from "../ui/ProgressBar";
import FormInicialRequest from "./FormInicialRequest";

const StudentMain = () => {
  return (
    <>
      <div className="container m-4 text-center">
          SISTEMA DE APOYO AL SERVICIO SOCIAL
      </div>
      <ProgressBar />
      
      <FormInicialRequest />
    </>
  );
};

export default StudentMain;
