import React from "react";
import TitleWindow from "../ui/TitleWindow";
import ValidationRequestContainer from "./ValidationRequestContainer";

const ValidationRequestsComponent = () => {
  return (
    <>
      <TitleWindow
        title="Validacion de Estudiantes"
        descriptionPage="En este apartado encontraras las solicitudes de validacion que se tienen pendientes, asi como el detalle de estas mismas."
        mt="mt-0"
      />
      <ValidationRequestContainer />
    </>
  );
};

export default ValidationRequestsComponent;
