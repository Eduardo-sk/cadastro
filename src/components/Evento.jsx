import { useState } from 'react';
import Button from './eventos/Button';
import Form from './Form';

function Evento() {
  
  function meuEvento(){
    console.log(`Evento ativado!`)
  }

  return (
    <>
      
      <p>Clique para disparar Evento:</p>
      <Button event = {meuEvento} text='Primeiro disparo do Evento'/>

    </>
  );
}

export default Evento;
