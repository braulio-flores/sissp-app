import React from 'react'
import TitleWindow from '../ui/TitleWindow'
import ManageProfessorsContainer from './ManageProfessorsContainer'
import ManaggeProffesorButton from './ManaggeProffesorButton'
import ModalValidate from './ModalValidate'

const ManageProffesorsComponent = () => {
  return (
    <>
        <TitleWindow
        title="Gestion de Profesores"
        descriptionPage="En esta seccion, el administrador, podra gestionar a los profesores habilitados dentro de la UPIICSA para que los estudiantes puedan realizar su servicio social."
        mt="mt-0"
      />
      <ManaggeProffesorButton />
      <ManageProfessorsContainer />
      <ModalValidate />
    </>
  )
}

export default ManageProffesorsComponent