import React from "react";
import "./ValidationRequestItem.css";
import "animate.css";
import { useDispatch } from "react-redux";
import { openModalAction, setActiveStudent, setTypeOfModal } from "../../actions/ui";

const DocumentationFinalReviewItem = ({item}) => {
  const { boleta, name, carrera, doc, validated } = item;


  const dispatch = useDispatch();

  const handleClickOpenModal = () => {
    dispatch(openModalAction(item));
    dispatch(setActiveStudent(item))
    dispatch(setTypeOfModal(2))
  };

  return (
    <>
      <tr onClick={handleClickOpenModal} className={`itemToValidate ${validated && "table-success"}`}>
        <th scope="row">{validated ? <i className="bi bi-check-circle"></i> : <i className="bi bi bi-exclamation-circle"></i>} {boleta}</th>
        <td>{name}</td>
        <td>{carrera}</td>
        <td>{doc}</td>
      </tr>
    </>
  );
};

export default DocumentationFinalReviewItem;
