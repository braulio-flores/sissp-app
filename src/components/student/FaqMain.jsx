import React from 'react'
import TitleWindow from '../ui/TitleWindow'
import FaqsContainer from './FaqsContainer'

const FaqMain = () => {
  return (
    <>
      <TitleWindow
        title="Preguntas Frecuentes"
        descriptionPage="En esta seccion encontraras las preguntas mas frecuentes que hemos detectado entre tus compañeros, asi mismo, si la pregunta que tienes no tiene respuesta aqui, la puedes dejar al final y la contestaremos."
        mt="mt-0"
      />
      <FaqsContainer />
    </>
  )
}

export default FaqMain