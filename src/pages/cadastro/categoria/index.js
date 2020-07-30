import React from "react"
import { Link } from "react-router-dom"
import PageDefault from "./../../../components/pageDefault"

export default () => { 
   return(
      <PageDefault>
         <h1>Cadastro de Categoria</h1>

         <Link to="/">
            Voltar para home
         </Link>
      </PageDefault>
   )
}