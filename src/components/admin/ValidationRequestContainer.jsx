import React from "react";
// import { validationRequestMock } from "../../resources/mocks/validationRequestMocks";
import ModalValidate from "./ModalValidate";
import ValidationRequestItem from "./ValidationRequestItem";

const ValidationRequestContainer =  () => {

  //  getValidations();

  const validationRequestMock = JSON.parse(localStorage.getItem('validations'));

  const variableNoValidated = validationRequestMock.filter(item1=>item1.validated === false);


  const users = JSON.parse(localStorage.getItem('allUsers'));


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
                  const complement = users.find(element=>element.boleta === item.boleta);
                  const item2 = {
                    ...item,
                    ...complement
                  }
                  return <ValidationRequestItem key={item.boleta} item={item2}/>

                
              })
          }
        </tbody>
      </table>
      <ModalValidate />
    </div>
  );
};

export default ValidationRequestContainer;
