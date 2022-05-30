import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../ui/ProgressBar";
import FormInicialRequest from "./FormInicialRequest";
import InicialDocumentationComponent from "./InicialDocumentationComponent";
import Instrucctions from "./Instrucctions";
import ValidacionComponent from "./ValidacionComponent";

const StudentMain = () => {
  const { steep } = useSelector((data) => data.ui);

  const renderSteep = () => {
    switch (steep) {
      case 1:
        return <Instrucctions />;
      case 2:
        return <FormInicialRequest />;
      case 3:
        return <ValidacionComponent />;
      case 4:
        return <InicialDocumentationComponent />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container m-4 text-center">
        SISTEMA DE APOYO AL SERVICIO SOCIAL
      </div>
      <ProgressBar />

      {renderSteep()}
    </>
  );
};

export default StudentMain;
