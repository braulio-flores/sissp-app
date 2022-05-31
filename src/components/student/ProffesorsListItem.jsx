import React from "react";

const ProffesorsListItem = ({
  name,
  academy,
  vacants,
  contact,
  disponibility,
}) => {
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
      <div class="card-footer bg-transparent border-transparent">
        <button
          disabled={!disponibility}
          className={`btn ${
            disponibility ? "btn-success" : "btn-outline-secondary"
          }`}
          style={{ bottom: "2px" }}
        >
          Solicitar Disponibilidad
        </button>
      </div>
    </div>
  );
};

export default ProffesorsListItem;
