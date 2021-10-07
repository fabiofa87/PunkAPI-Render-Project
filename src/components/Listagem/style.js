import styled from "styled-components";

export const ListCard = styled.div`
  font-family: "Roboto", sans-serif;
  width: 70%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #978ace;
  background-color: #faebd7;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;
  img {
    width: 30%;
    height: 30%;
  }
  button {
    margin-left: 90%;
  }
`;

export const ContainerAllList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 30px;
  margin-left: 10%;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
