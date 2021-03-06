import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    const URL_BACK = window.location.hostname.includes('localhost')
    ? 'http://localhost:5000/categorias'
    : 'https://alura-flix-bruno-fernandes.herokuapp.com/categorias';
    fetch(URL_BACK)
      .then(async (resp) => {
        const response = await resp.json();
        setCategorias([
          ...response
        ]);
      });
    
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>
      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        clearForm(valoresIniciais);
      }}
      >
        {/* State */}
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />
        {/* <div>
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
          label="Cor"
          type="color"
          name="Cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Loading... */}
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categorias.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  );
};
