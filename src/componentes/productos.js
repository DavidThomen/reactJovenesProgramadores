import React from 'react';
import { CardSubtitle, CardTitle, CardText, CardBody, CardImg, Col, Card } from 'reactstrap';
import './producto.css';
import FichaProducto from './FichaProducto'

class Producto extends React.Component {
    render() {
        return (
            /* Agregué la clase card group para que el alto de la fila sea parejo */
            <Col className='card-group' sm="4">
                <Card className='Card' body outline color='primary'>
                    <CardImg src={this.props.imagen} />
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle>$ {Intl.NumberFormat("de-De").format(this.props.precio)}</CardSubtitle>
                        <CardText> {this.props.descripcion}
                        </CardText>
                        <FichaProducto props= {this.props}/>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
export default Producto;