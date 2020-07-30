import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/channel/UCptqpt9mzVynonDd_EbSudw">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Com S2
        {' '}
        <a href="https://www.instagram.com/brnowel/?hl=pt-br">
          Bruno Fernandes
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
