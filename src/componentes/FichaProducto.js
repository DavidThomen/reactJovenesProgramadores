import React from 'react';
import { CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Button, Container } from 'reactstrap';
import './FichaProducto.css'
import { listaCarrito } from '../listaCarrito.json';
import { listaProductos } from '../listaProductos.json'

class FichaProducto extends React.Component {
        constructor(props) {
            super();
            this.state = {
                modal: false,
                listaProductos,
                stock: props.props.stock
            }
            this.toggle = this.toggle.bind(this);
            this.agregarCarrito = this.agregarCarrito.bind(this);
        }

        toggle() {
            this.setState(prevState => ({
                modal: !prevState.modal
            }))
        }
        agregarCarrito() {
            listaCarrito.push({
                "titulo": this.props.props.titulo,
                "precio": this.props.props.precio
            });
            this.setState(prevState => ({
                modal: !prevState.modal
            }));
            if(this.state.stock !== 0){
                this.setState(prevState => ({
                    stock: prevState.stock - 1
                }));
            }else{
                alert("Stock agotado");
            }
            const badge = document.getElementById("badgeCarrito");
            badge.innerText= listaCarrito.length;
        };
        render() {
            return (
                <Container>
                    <Button onClick={this.toggle}>Ver Ficha</Button>
                    <Modal isOpen={this.state.modal}>
                        <ModalHeader>
                            {this.props.props.titulo}
                        </ModalHeader>
                        <ModalBody>
                            <CardImg src={this.props.props.imagen}></CardImg>
                            <p>Caracteristicas del producto</p>
                            {this.props.props.descripcion}
                            <p>El precio del producto es ${Intl.NumberFormat("de-De").format(this.props.props.precio)} pesos arg</p>
                            <p>Hay {this.state.stock} unidades disponibles</p>
                        </ModalBody>
                        <ModalFooter className='modalFooter'>
                            <Button color='primary' onClick={this.agregarCarrito}>Agregar al carrito</Button>
                            <Button color='secondary' onClick={this.toggle}>Volver</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            )
        }
    }

export default FichaProducto;