import { useState } from 'react'

export const useForm = (initialState = {}) => {//Recibimos la estructura del objeto

    
    // Creamos el useState que recibe el objeto 
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    } 

    //Funcion que actualiza el state
    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    // Retornamos el fomulario y la funcion que actualiza los inputs
  return [values, handleInputChange, reset]
}
