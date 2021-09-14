import React from "react";
import { Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';
import listaCarrito from '../listaCarrito.json'

class Carrito extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }
    
    render() {
        const arregloCarrito = this.state.listaCarrito.map((listaCarrito, i)=>{
                return(
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                );
            }
        )
        return (
            <div>
                <Button id='Popover1'>
                    <span className="material-icons">add_shopping_cart</span>
                    <Badge color='secondary'>{arregloCarrito.length}</Badge>
                </Button>
                <Popover target='Popover1' placement='bottom' isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}
export default Carrito;