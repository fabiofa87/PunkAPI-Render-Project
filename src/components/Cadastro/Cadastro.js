import React from "react";
import { FormContainer, CadastroContainerGeral } from "./style";

const Cadastro = (props) => {
  return (
    <CadastroContainerGeral>
      <FormContainer>
        <label htmlFor="nome">Nome</label>
        <input
          onChange={props.changeName}
          value={props.nomeBebida}
          type="text"
        />
        <label htmlFor="img">Imagem</label>
        <input onChange={props.changeImage} value={props.image} type="text" />
        <label htmlFor="abv">ABV</label>
        <input
          onChange={props.changeAbv}
          value={props.abvBebida}
          min="0"
          type="number"
        />
        <label htmlFor="descrição">Descrição</label>
        <input
          onChange={props.changeDescription}
          value={props.descricaoBebida}
          type="text"
        />
        <button onClick={props.submitForm} type="submit">
          Salvar
        </button>
      </FormContainer>
    </CadastroContainerGeral>
  );
};

export default Cadastro;
