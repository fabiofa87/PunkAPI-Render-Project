import { HeaderContainer } from "./style";
import React from "react";

const Header = (props) => {
  return (
    <HeaderContainer>
      <button onClick={() => props.changePage("listagem")}>Listagem</button>
      <button onClick={() => props.changePage("cadastro")}>Cadastro</button>
    </HeaderContainer>
  );
};

export default Header;
