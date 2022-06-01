import React from "react";
import "./ValidationRequestItem.css";
import "animate.css";
import { useDispatch } from "react-redux";
import { openModalAction, setActiveStudent, setTypeOfModal } from "../../actions/ui";

const ValidationRequestItem = ({item}) => {
  const { boleta, name, carrera, responsible, validated } = item;
  const dispatch = useDispatch();

  const handleClickOpenModal = () => {
    dispatch(openModalAction());
    dispatch(setActiveStudent(item))
    dispatch(setTypeOfModal(1))
  };

  return (
    <>
      <tr onClick={handleClickOpenModal} className={`itemToValidate ${validated && "table-success"}`}>
        <th scope="row">{boleta}</th>
        <td>{name}</td>
        <td>{carrera}</td>
        <td>{responsible}</td>
      </tr>
    </>
  );
};

export default ValidationRequestItem;
