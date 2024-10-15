import { useState } from 'react'

// Recibimos el objeto de las props
export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('One Punch');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }
  const onSubmit = event => {
    event.preventDefault();
    // Aquí no debo modificar el DOM, en lugar de eso 
    // modifico el estado
    if (inputValue.trim().length <= 1) return;

    // Se llama a setCategories, pasando una funcion que recibe
    // es estado anterior y devuelve un nuevo array con el 
    // valor de inputValue agregado
    // setCategories(prevCategories => [ ...prevCategories, inputValue ]);
    onNewCategory( inputValue.trim() );
    
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue }
          // onChange={ onInputEvent }
          // Es como si dijera el evento onChange asígnale lo siguiente
          // event => onInputChange(event)
          // event es el evento
          onChange={ onInputChange }
        />
    </form>
  )
}