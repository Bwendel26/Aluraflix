import React from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/pageDefault";
import useForm from './../../../hooks/useForm';
import FormField from './../../../components/FormField';
import Button from './../../../components/Button';
import videosRepository from './../../../repositories/videos';

function CadastroVideo(){
   const history = useHistory();
   const { handleChange, valores } = useForm({

   });

   return(
      <PageDefault>
         <h1>Cadastro de video</h1>

         <form onSubmit={(event) => {
            event.preventDefault();

            videosRepository.create({
               titulo: valores.titulo,
               url: valores.url,
               categoriaId: 1,
            }) .then(() => {
               history.push('/');
            });

         }}
         >
            <FormField
               label="Título do Vídeo"
               name="titulo"
               value={valores.titulo}
               onChange={handleChange}
            />

            <FormField
               label="URL"
               name="url"
               value={valores.url}
               onChange={handleChange}
            />

            <FormField
               label="categoria"
               name="titulo"
               value={valores.titulo}
               onChange={handleChange}
            />

            <Button type="submit">
               Cadastrar    
            </Button>
         </form>


         <Link to="/cadastro/categoria">
            Cadastrar categoria
         </Link>
      </PageDefault>
   )
}

export default CadastroVideo

//53.30