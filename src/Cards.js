import React, {useState} from "react";
import Card from "./Card";
import erlich from './assets/erlich.jpg'

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