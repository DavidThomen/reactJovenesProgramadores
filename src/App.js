import React from 'react';
import './App.css';
import Producto from './componentes/productos';
import { Container, Row } from 'reactstrap';
import Navegacion from './componentes/Navegacion';
import { listaProductos } from './listaProductos.json';


console.log(listaProductos);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listaProductos
    };
  }
  render() {
    const arregloComponente = this.state.listaProductos.map(
      (listaProductos, i) => {
        return (
          <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
          />
        )
      }
    )
    return (
      <Container>
        <Navegacion titulo='Tienda' />
        <Row>
          {arregloComponente}
        </Row>
      </Container >
    );
  }
}

export default App;
