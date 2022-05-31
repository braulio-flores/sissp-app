import React from "react";
import TitleWindow from "../ui/TitleWindow";
import ProffesorsListContainer from "./ProffesorsListContainer";

const ProffesorsList = () => {
  return (
    <>
      <TitleWindow
        title="Profesores UPIICSA"
        descriptionPage="En esta seccion encontraras la lista de profesores habilitados para realizar tu SS, su disponibilidad, medios de contacto."
        mt="mt-0"
      />
      <ProffesorsListContainer />
    </>
  );
};

export default ProffesorsList;
