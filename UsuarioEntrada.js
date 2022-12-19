import {useState} from "react"
import React, {Component} from 'react'
import UsuarioSaida from "./UsuarioSaida"
export default UsuarioEntrada;
//export default function UsuarioEntrada(){

  const {Componet} = require("react")

  function UsuarioEntrada(props)
  {
   
    const [usuario, setUsuario] = useState('')
    function altera(texto){
      console.log(texto)
      setUsuario(texto)
    }

  return(
    <div>
      <input type="text" name="nome" onChange={texto=>{altera(texto.target.value)}}></input>
      <usuarioSaida usuario={setUsuario} />

    </div>
  )
}
