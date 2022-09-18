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
            bio: 'I always knew I was missing something, and then when someone explained the concept of ‘game’ I remember very distinctly thinking ‘That’s what I don’t have.',
            url: './assets/richard.jpg'
        },
        {
            name: 'Erlich Bachman',
            bio: "Until then, we need to do what any animal in nature does when it's cornered—act erratically and blindly lash out at everything around us.",
            url: './assets/erlich.jpg'
        },
        {
            name: 'Jared Dunn',
            bio: 'I have a lot of elderly friends.',
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