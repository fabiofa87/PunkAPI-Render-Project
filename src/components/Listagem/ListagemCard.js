import { ListCard } from "./style";
const ListagemCard = (props) => {
  return (
    <ListCard>
      <button onClick={() => props.getId(props.id)}>X</button>
      <img src={props.image} alt="beers" />
      <h3>{props.name}</h3>
      <p>ABV: {props.abv}</p>
      <p>{props.description}</p>
    </ListCard>
  );
};

export default ListagemCard;
