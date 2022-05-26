import React from 'react'
import { store } from './store/store';
import { Provider } from 'react-redux'
import RoutesComponent from './routes/RoutesComponent';


const SisspInicialComponent = () => {
  return (
    <Provider store={ store } >
      <RoutesComponent />
    </Provider>
  )
}

export default SisspInicialComponent
