
import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import axios from '../../api/axios'
import "./cards.css"

 
function Card() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function getData() {
       const req = await axios.get("/binder/cards");

       setPeople(req.data)
      }
      getData()
    }, []);

    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = name => {
        console.log(name + " left the screen!")
    }

    
    return (
        <div className="cards">
        <div className="card__container">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person._id}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=> swiped(dir, person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)}
                >
               <div className="card" style={{backgroundImage: `url(${person.imgUrl})`}}>
                   <h3>{person.name}</h3>
               </div>
                </TinderCard>
            )
            )}
        </div>
            
        </div>
    )
}

export default Card
