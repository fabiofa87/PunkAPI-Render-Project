import { useState } from "react";
import ListagemCard from "./ListagemCard";
import { ContainerAllList, InputStyle } from "./style";

const Listagem = (props) => {
  const [buscaNome, setBuscaNome] = useState("");
  const [buscaDescription, setBuscaDescription] = useState("");
  const [buscaABV, setBuscaABV] = useState(0);

  const handleChangeBusca = (e) => {
    setBuscaNome(e.target.value);
  };
  const handleChangeBuscaDescription = (e) => {
    setBuscaDescription(e.target.value);
  };

  const handleChangeBuscaABV = (e) => {
    setBuscaABV(e.target.value);
  };

  const listaBebida = [...props.lista, ...props.listUser]
    .filter((item) => {
      return item.description
        .toLowerCase()
        .includes(buscaDescription.toLowerCase());
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(buscaNome.toLowerCase());
    })
    .filter((item) => {
      return item.name !== "";
    })
    .filter((item) => {
      return item.abv >= buscaABV;
    })
    .map((item) => {
      return (
        <div key={item.id}>
          <ListagemCard
            id={item.id}
            getId={props.getId}
            name={item.name}
            image={item.image_url}
            abv={item.abv}
            description={item.description}
          />
        </div>
      );
    });

  return (
    <div>
      <InputStyle>
        <input onChange={handleChangeBusca} type="text" placeholder="Nome" />
        <input
          onChange={handleChangeBuscaABV}
          type="number"
          placeholder="ABV Mínimo"
        />
        <input
          onChange={handleChangeBuscaDescription}
          type="text"
          placeholder="Descriçāo"
        />
      </InputStyle>
      <ContainerAllList>{listaBebida}</ContainerAllList>
    </div>
  );
};

export default Listagem;
