import { types } from "../types/types"

export const openModal = () =>{
    return {
        type: types.uiOpenModal
    }
}

export const closeModal = () =>{
    return {
        type: types.uiCloseModal
    }
}

export const openFavorites = () =>{
    return {
        type: types.uiOpenFavsMenu
    }
}

export const closeFavorites = () =>{
    return {
        type: types.uiCloseFavsMenu
    }
}

export const changeStep = (step) =>{
    console.log('changing');
    return {
        type: types.uiChangeStep,
        payload: step
    }
}