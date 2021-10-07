import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Listagem from "./components/Listagem/Listagem";
import Cadastro from "./components/Cadastro/Cadastro";
import { AppBackground } from "./components/Header/style";

function App() {
  const [page, setPage] = useState("home");
  const [listaAPI, setListaAPI] = useState([]);
  const [listaUser, setListaUser] = useState([]);
  const [nomeBebida, setNomeBebida] = useState("");
  const [image, setImage] = useState("");
  const [abvBebida, setAbvBebida] = useState(0);
  const [descricaoBebida, setDescricaoBebida] = useState("");

  useEffect(() => {
    getBeers();
  }, [listaAPI.id]);

  const getBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers/")
      .then((response) => {
        window.localStorage.setItem("listaAPI", JSON.stringify(response.data));
        setListaAPI(JSON.parse(localStorage.getItem("listaAPI")));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNomeChange = (e) => {
    setNomeBebida(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleABVChange = (e) => {
    setAbvBebida(e.target.value);
  };

  const handleDescricaoChange = (e) => {
    setDescricaoBebida(e.target.value);
  };

  const deleteBeerFromLocalStorage = (id) => {
    const listaAPI = JSON.parse(localStorage.getItem("listaAPI"));
    const listaUser = JSON.parse(localStorage.getItem("listaUser"));
    const newListaAPI = listaAPI.filter((item) => item.id !== id);
    const newListaUser = listaUser.filter((item) => item.id !== id);
    localStorage.setItem("listaAPI", JSON.stringify(newListaAPI));
    localStorage.setItem("listaUser", JSON.stringify(newListaUser));
    setListaAPI(newListaAPI);
    setListaUser(newListaUser);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setListaUser([
      {
        id: Date.now(),
        image_url: image,
        name: nomeBebida,
        abv: abvBebida,
        description: descricaoBebida,
      },
    ]);
    window.localStorage.setItem("listaUser", JSON.stringify(listaUser));
    console.log(listaUser);
    setNomeBebida("");
    setImage("");
    setAbvBebida(0);
    setDescricaoBebida("");
  };

  const renderPage = () => {
    switch (page) {
      case "listagem":
        return (
          <Listagem
            getId={deleteBeerFromLocalStorage}
            lista={listaAPI}
            listUser={listaUser}
          />
        );
      case "cadastro":
        return (
          <Cadastro
            changeName={handleNomeChange}
            changeImage={handleImageChange}
            changeAbv={handleABVChange}
            changeDescription={handleDescricaoChange}
            submitForm={handleSubmitForm}
          />
        );

      default:
        return (
          <Listagem
            getId={deleteBeerFromLocalStorage}
            lista={listaAPI}
            listUser={listaUser}
          />
        );
    }
  };

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <AppBackground>
      <Header changePage={handleChangePage} />
      {renderPage()}
    </AppBackground>
  );
}

export default App;
