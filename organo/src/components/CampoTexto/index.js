import './CampoTexto.css'
import {useState} from "react";

const Index = (props) => {

  const placeholderModificada = `${props.placeholder}...`

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>
        {props.label}
      </label>
      <input type="text"
             name={`input_${props.label}`}
             id={props.label}
             placeholder={placeholderModificada}
             required={props.required}
             value={props.valor}
             onChange={aoDigitado}/>
    </div>
  )
}

export default Index