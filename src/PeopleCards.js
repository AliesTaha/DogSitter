import React, {useState} from "react";
import Card from "./Card";
// import Card from 'react-bootstrap/Card';
import './Card.css'
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards() {

    let people = JSON.parse(window.localStorage.getItem('users'))
    return (<>
        {people === null ?
        <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center'>
            <Card name="Please login" bio="" img=""></Card>
        </Col>
     : <Row className='p-0 m-0 card-group'>
            {people.users.map(people => (
                // <Row className='d-flex justify-content-center p-3'>
                    <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center'>
                        <Card name={people.firstname} bio={people.bio} img={people.image} id={people.id}></Card>
                    </Col>
            ))}
        </Row> }
    </>
     );
}

export default Cards;
