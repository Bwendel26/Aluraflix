import React, { useState } from "react"
import { Link } from "react-router-dom"
import PageDefault from "./../../../components/pageDefault"
import FormField from "./../../../components/FormField"

export default () => {
   
   const valoresIniciais = {
      nome: "Nome da Categoria",
      descricao: "Descrição",
      cor: ""
   }
   const [categorias, setCategorias] = useState([])
   const [valores, setValores] = useState(valoresIniciais)

   function setValue(chave, valor) {
      setValores({
         ...valores,
         [chave]: valor //nome: "valor"
      })
   }

   function handleChange(infosEvento) {
      //const { getAttribute, value } = infosEvento.target;
      setValue(
         infosEvento.target.getAttribute("name"),
         infosEvento.target.value
      )
   }

   return(
      <PageDefault>
         <h1>Cadastro de Categoria: {valores.nome}</h1>
         <form onSubmit={ function handleSubmit(infoEvento) {
            infoEvento.preventDefault()
            setCategorias([
               ...categorias,
               valores
            ])

            setValores(valoresIniciais)
         }}>
            {/* State */}
            <FormField
               label="Nome da Categoria:"
               type="text"
               name="nome"
               value={valores.nome}
               onChange={handleChange}
            />

            <FormField 
               label="Descrição:"
               type=""
               name="descricao"
               value={valores.descricao}
               onChange={handleChange}
            />
            {/*<div>
               <label>
                  Descrição:
                  <textarea
                     type="text"
                     value={valores.descricao}
                     name="descricao"
                     onChange={handleChange}
                  />
               </label>
            </div> */}

           <FormField 
            label="Cor:"
            type="color"
            name="Cor"
            value={valores.cor}
            onChange={handleChange}
           />

            <button>Cadastrar</button>
         </form>

         <ul>
            {categorias.map((categoria, indice) => {
               return(
                  <li key={`${categorias}${indice}`}>
                     {categoria.nome}
                  </li>
               )
            })}
         </ul>

         <Link to="/">
            Voltar para home
         </Link>
      </PageDefault>
   )
}