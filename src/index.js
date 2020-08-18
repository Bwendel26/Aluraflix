import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroCategoria from "./pages/cadastro/categoria";

import { BrowserRouter, Switch, Route } from "react-router-dom"
// Make some notes about switch and route
import CadastroVideo from "./pages/cadastro/video/index"

//Desafio basic game 404 page.
const Pagina404 = () => <div>Página 404</div>

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

//1h e 10 min