import React from "react";
import TitleWindow from "../ui/TitleWindow";
import DocumentationFinalReviewContainer from "./DocumentationFinalReviewContainer";


const DocumentationFinalReviewComponent = () => {
  return (
    <>
      <TitleWindow
        title="Revision de Documentacion Final"
        descriptionPage="En este apartado encontraras la documentacion final de los estudiantes que han sido enviadas. Tanto las que ya revisaste como las que aun no."
        mt="mt-0"
      />
      <DocumentationFinalReviewContainer />
    </>
  );
};

export default DocumentationFinalReviewComponent;
