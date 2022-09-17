import React, {useState} from "react";
import Card from "./Card";
// import Card from 'react-bootstrap/Card';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
    const [people, setPeople] = useState([
        {
            name: 'Richard Hendricks',
            url: './assets/richard.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: './assets/erlich.jpg'
        }
    ])

    return ( 
        <div>
            {people.map(person => (
                <Card name={person.name} img={person.url}></Card>
            ))}
        </div>
     );
}

export default Cards;