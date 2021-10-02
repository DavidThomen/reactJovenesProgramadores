import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap';
import Carrito from "./Carrito";
import './Navegacion.css';

class Navegacion extends React.Component {
    render() {
        return (
            /* Agregué la clase barra-nav con margen left y right 20px */
            <Navbar className='barra-nav d-flex justify-content-between' color='dark' dark expand='xl'>
                <NavbarBrand href='./'>
                    {this.props.titulo}
                </NavbarBrand>
                <Nav navbar>
                    <NavItem className='d-flex' >
                        <Carrito />
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}
export default Navegacion;