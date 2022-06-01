import React from "react";
import "./ValidationRequestItem.css";
import "animate.css";
import { useDispatch } from "react-redux";
import { openModalAction, setActiveStudent, setTypeOfModal } from "../../actions/ui";

const DocumentationInicialReviewItem = ({item}) => {
  const { boleta, name, carrera, doc, docValidated } = item;

  const dispatch = useDispatch();

  const handleClickOpenModal = () => {
    dispatch(openModalAction());
    dispatch(setActiveStudent(item))
    dispatch(setTypeOfModal(2))
  };

  return (
    <>
      <tr onClick={handleClickOpenModal} className={`itemToValidate ${docValidated && "table-success"}`}>
        <th scope="row">{boleta}</th>
        <td>{name}</td>
        <td>{carrera}</td>
        <td>{doc}</td>
      </tr>
    </>
  );
};

export default DocumentationInicialReviewItem;
