import React from "react";
import TitleWindow from "../ui/TitleWindow";

const ValidationWaiting = () => {
  return (
    <>
      <TitleWindow
        title="Socilitud de validacion en el SISS"
        descriptionPage="Ya has solicitado tu validacion, en breve se revisara y se te notificara automaticamente cuando hayas sido validado para que puedas proceder con tu tramite. No tardamos, gracias."
      />

      <div className="container"></div>
    </>
  );
};

export default ValidationWaiting;
