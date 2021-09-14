import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap';
import Carrito from "./Carrito";

class Navegacion extends React.Component {
    render() {
        return (
            <Navbar className='d-flex justify-content-between' color='dark' dark expand='xl'>
                <NavbarBrand href='./'>
                    {this.props.titulo}
                </NavbarBrand>
                <Nav navbar>
                    <NavItem className='d-flex' >
                        <Carrito/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}
export default Navegacion;