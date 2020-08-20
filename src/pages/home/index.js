import React, { useEffect, useState } from 'react';
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/pageDefault"
import categoriasRepository from './../../repositories/categorias'

function Home() {

  const [ dadosIniciais, setDadosIniciais ] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {

    });
  }, [])

  return (
    <PageDefault paddingAll={0}>
      <Menu />

        {dadosIniciais.length === 0 && (<div>Loading...</div>)}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return(
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription="O que é Front-end? Trabalhando na área, os termos HTML, CSS e JavaScript."
                />  
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

            return(
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            )
        })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina dos desenvolvedores..."}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      /> */}
      </PageDefault>
  );
}

export default Home;