import React from 'react'
import { useSelector } from 'react-redux'

const HomeMain = () => {

  const {user} = useSelector(data=>data.ui.session);


  return (
    <div className='container'>
        <h1>SASS</h1>
        <h3>Sistema de Apoyo</h3>
        <h2>Bienvenido {user.name}</h2>
    </div>
  )
}

export default HomeMain