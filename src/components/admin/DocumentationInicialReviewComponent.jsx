import React from "react";
import TitleWindow from "../ui/TitleWindow";
import DocumentationInicialReviewContainer from "./DocumentationInicialReviewContainer";

const DocumentationInicialReviewComponent = () => {
  return (
    <>
      <TitleWindow
        title="Revision de Documentacion Inicial"
        descriptionPage="En este apartado encontraras la documentacion inicial de los estudiantes que han sido enviadas. Tanto las que ya revisaste como las que aun no."
        mt="mt-0"
      />
      <DocumentationInicialReviewContainer />
    </>
  );
};

export default DocumentationInicialReviewComponent;
