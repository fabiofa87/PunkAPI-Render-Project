import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100vh;
  box-sizing: border-box;
  input {
    margin: 10px;
    width: 60%;
    height: 30px;
  }
  label {
    margin-right: 45%;
  }
  button {
    display: flex;
    margin-left: 100px;
    width: 200px;
    align-items: center;
    justify-content: center;
  }
`;

export const CadastroContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
`;
