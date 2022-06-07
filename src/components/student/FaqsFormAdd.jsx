import React from "react";

const FaqsFormAdd = () => {
  
  // HACE FALTA SECCION DE CONTESTAR PREGUNTAS


  return (
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          No encontraste la respuesta a tu pregunta? Escribenos y en breve la
          responderemos.
        </label>
        <textarea
          name="question"
          placeholder="Escribe aqui tu pregunta"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-outline-success mt-1 btn-lg btn-block"
      >
        Realizar Pregunta
      </button>
    </form>
  );
};

export default FaqsFormAdd;
