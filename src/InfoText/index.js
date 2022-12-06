import React from 'react';
import {TodoContext} from '../TodoContext';
import './InfoText.css';

function InfoText(){
  const {error} = React.useContext(TodoContext);

  return (
    <>
    {error && <p className='infoText error'>Desespérate, hubo un error...</p>}
    </>
  )
}

export {InfoText};