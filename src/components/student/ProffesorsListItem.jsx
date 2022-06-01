import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  Swal  from "sweetalert2";
import { useLocation } from "react-router-dom";
import {
  openModalAction,
  setActiveProfessor,
  setAdminMode,
  setTypeOfModal,
} from "../../actions/ui";

const ProffesorsListItem = ({ item }) => {
  const { name, academy, vacants, contact, disponibility } = item;
  const { admionMode } = useSelector((data) => data.ui);

  const dispatch = useDispatch();

  const handleClickRequest = () => {
    // AQUI VOY A PONER UN ALERT AUNQUE ESTE ALERT DEBERIA DE IR EN EL ACTION
    Swal.fire({
      icon: 'success',
      title: 'Solicitud Enviada',
      text: 'Espera a que el profesor revise y se ponga en contacto contigo.',
    })

    console.log("aqui se debe de mandar un aviso de que se solicito");
  };

  const handleClickEdit = () => {
    dispatch(openModalAction());
    dispatch(setActiveProfessor(item));
    dispatch(setTypeOfModal(3));
  };

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname === '/index/admin/manageprof') {
      dispatch(setAdminMode(true));
    }else{
      dispatch(setAdminMode(false));
    }
  
  }, [])
  

  return (
    <div
      className="card"
      style={{ width: "17rem", marginRight: "0.5rem", marginLeft: "0.5rem" }}
    >
      <div className="card-body">
        <h5 className={`card-title ${disponibility ? "" : "text-secondary"}`}>
          {name}
        </h5>
        <p className={`card-text ${disponibility ? "" : "text-secondary"}`}>
          <strong>Academia: </strong> {academy} <br />
          <strong>Vacantes: </strong> {vacants} <br />
          <strong>Contacto: </strong> <br />
          {"\u00A0"} Mail: {contact.mail} <br />
          {"\u00A0"} Numero: {contact.number} <br />
        </p>
      </div>
      <div className="card-footer bg-transparent border-transparent">
        {admionMode ? (
          <button
            onClick={handleClickEdit}
            className="btn btn-success"
            style={{ bottom: "2px" }}
          >
            Editar Registro
          </button>
        ) : (
          <button
            onClick={handleClickRequest}
            disabled={!disponibility}
            className={`btn ${
              disponibility ? "btn-success" : "btn-outline-secondary"
            }`}
            style={{ bottom: "2px" }}
          >
            Solicitar Disponibilidad
          </button>
        )}
      </div>
    </div>
  );
};

export default ProffesorsListItem;
