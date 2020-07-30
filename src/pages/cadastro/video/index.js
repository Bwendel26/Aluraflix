import React from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/pageDefault"

function CadastroVideo(){
   return(
      <PageDefault>
         <h1>Cadastro de video</h1>
         <Link to="/cadastro/categoria">
            Cadastrar categoria
         </Link>
      </PageDefault>
   )
}

export default CadastroVideo