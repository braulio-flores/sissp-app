import React from "react";
import { inicialDocumentationRequestMock } from "../../resources/mocks/iDocRequestMocks";
import DocumentationInicialReviewItem from "./DocumentationInicialReviewItem";
import ModalValidate from "./ModalValidate";

const DocumentationInicialReviewContainer = () => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Boleta</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Download PDF</th>
          </tr>
        </thead>
        <tbody>
          {inicialDocumentationRequestMock.map((item, i) => {
            return <DocumentationInicialReviewItem key={item.boleta} item={item} />;
          })}
        </tbody>
      </table>
      <ModalValidate />
    </div>
  );
};

export default DocumentationInicialReviewContainer;
