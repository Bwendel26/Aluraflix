import { useState } from 'react';

function useForm(valoresIniciais) {
  
    const [valores, setValores] = useState(valoresIniciais);
  
    function setValue(chave, valor) {
      setValores({
        ...valores,
        [chave]: valor, // nome: "valor"
      });
    }
  
    function handleChange(infosEvento) {
      // const { getAttribute, value } = infosEvento.target;
      setValue(
        infosEvento.target.getAttribute('name'),
        infosEvento.target.value,
      );
    }
  
    function clearForm() {
      setValores(valoresIniciais)
    }
  
    return {
      valores,
      handleChange,
      clearForm,
    };
  }

  export default useForm;