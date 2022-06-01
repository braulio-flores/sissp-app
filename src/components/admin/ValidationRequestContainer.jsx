import React from "react";
import { validationRequestMock } from "../../resources/mocks/validationRequestMocks";
import ModalValidate from "./ModalValidate";
import ValidationRequestItem from "./ValidationRequestItem";

const ValidationRequestContainer = () => {


  const variableNoValidated = validationRequestMock.filter(item1=>item1.validated === false);


  return (
    <div className="container">
      <table className="table table-striped">
        <thead >
          <tr>
            <th scope="col">Boleta</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Responsable Directo</th>
          </tr>
        </thead>
        <tbody>
          {
              variableNoValidated.map((item, i)=>{

                  return <ValidationRequestItem key={item.boleta} item={item}/>

                
              })
          }
        </tbody>
      </table>
      <ModalValidate />
    </div>
  );
};

export default ValidationRequestContainer;
