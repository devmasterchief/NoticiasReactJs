import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  //Definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'http://newsapi.org/v2/top-headlines?' +
      'country=mx&' +
      `category=${categoria}&` + 
      'apiKey=5d991d1754d24b699d5f03a9f31d459c';
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
          setCategoria={setCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
