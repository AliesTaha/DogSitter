import React, {useState} from "react";
import Card from "./Card";
// import Card from 'react-bootstrap/Card';
import './Card.css'
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards() {
    const [people, setPeople] = useState([
        {
            name: 'Richard Hendricks',
            bio: 'I always knew I was missing.',
            url: './assets/richard.jpg'
        },
        {
            name: 'Erlich Bachman',
            bio: "Until then, we need to do what",
            url: './assets/erlich.jpg'
        },
        {
            name: 'Jared Dunn',
            bio: 'I have a lot of elderly friends.',
            url: './assets/jared.jpg'
        }
    ])

    return ( 
        <Row className='p-0 card-group'>
            {people.map(person => (
                // <Row className='d-flex justify-content-center p-3'>
                    <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center'>
                        <Card name={person.name} bio={person.bio} img={person.url}></Card>
                    </Col>
            ))}
        </Row>
     );
}

export default Cards;