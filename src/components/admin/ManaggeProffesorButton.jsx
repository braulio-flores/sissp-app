import React from "react";
import { useDispatch } from "react-redux";
import { openModalAction, setTypeOfModal } from "../../actions/ui";

const ManaggeProffesorButton = () => {
  const dispatch = useDispatch();

  const handleClickAddNewProf = () => {
    dispatch(openModalAction());
    dispatch(setTypeOfModal(3));
  };

  return (
    <div className="container text-center">
      <button
        type="submit"
        className="btn btn-outline-success"
        onClick={handleClickAddNewProf}
      >
        Agregar Nuevo Profesor
      </button>
    </div>
  );
};

export default ManaggeProffesorButton;
