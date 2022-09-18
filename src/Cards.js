import React, {useState} from "react";
import Card from "./Card";
// import Card from 'react-bootstrap/Card';
import './Card.css'
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards() {

    let pets = JSON.parse(window.localStorage.getItem('pets'))
    return (<>
        {pets === null ?
        <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center'>
            <Card name="Please login" bio="" img=""></Card>
        </Col>
     : <Row className='p-0 m-0 card-group'>
            {pets.map(pet => (
                // <Row className='d-flex justify-content-center p-3'>
                    <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center'>
                        <Card name={pet.name} bio={pet.breed} img={pet.image} id={pet.user_id}></Card>
                    </Col>
            ))}
        </Row> }
    </>
     );
}

export default Cards;
