import React from "react";
import { useSelector } from "react-redux";
// import { inicialDocumentationRequestMock } from "../../resources/mocks/iDocRequestMocks";
import DocumentationInicialReviewItem from "./DocumentationInicialReviewItem";
import ModalValidate from "./ModalValidate";

const DocumentationInicialReviewContainer = () => {
  const { documents } = useSelector((data) => data.docs);

  const reviewDocuments = documents
    ? documents.filter(
        (doc) => doc.validated === false && doc.inicialOrFinal === true
      )
    : false;

  const allUsers = localStorage.getItem("allUsers")
    ? JSON.parse(localStorage.getItem("allUsers"))
    : false;

  let user;

  const inicialDocumentationRequestMock =
    reviewDocuments && allUsers
      ? reviewDocuments.map((doc) => {
          user = allUsers.find((data) => data.boleta === doc.boleta);
          return {
            ...doc,
            ...user,
          };
        })
      : {};

  console.log(inicialDocumentationRequestMock);

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
            return (
              <DocumentationInicialReviewItem key={item.boleta} item={item} />
            );
          })}
        </tbody>
      </table>
      <ModalValidate />
    </div>
  );
};

export default DocumentationInicialReviewContainer;
