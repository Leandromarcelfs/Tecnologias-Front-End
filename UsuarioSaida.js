import UsuarioEntrada from "./UsuarioEntrada"
export default UsuarioSaida
function UsuarioSaida(){

const {Component} = require("react")
const UsuarioSaida=(props) => {
    return(
        <div>
            <h3>{props.usuario}.</h3>
            <h3> Usuário logado </h3>
        </div>
    )
}
}
