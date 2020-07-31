import React from "react"
import { Link } from "react-router-dom"
import PageDefault from "./../../../components/pageDefault"

export default () => { 
   return(
      <PageDefault>
         <h1>Cadastro de Categoria</h1>
         <form>
            <label>
               Nome da Categoria:
               <input
                  type="text"
               />
            </label>
            <button>Cadastrar</button>
         </form>

         <Link to="/">
            Voltar para home
         </Link>
      </PageDefault>
   )
}