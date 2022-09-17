import React, {useState} from "react";
import Card from "./Card";
// import Card from 'react-bootstrap/Card';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards() {
    const [people, setPeople] = useState([
        {
            name: 'Richard Hendricks',
            url: './assets/richard.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: './assets/erlich.jpg'
        },
        {
            name: 'Jared Dunn',
            url: './assets/jared.jpg'
        }
    ])

    return ( 
        <div>
            {people.map(person => (
                <Row className='d-flex justify-content-center p-3'>
                    <Card name={person.name} img={person.url}></Card>
                </Row>
            ))}
        </div>
     );
}

export default Cards;