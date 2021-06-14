
import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import axios from '../../api/axios'
import Spinner from '../spinner/spinner.component'
import "./cards.css"

 
function Card() {
    const [people, setPeople] = useState([]);
     const [loading, setLoading]=useState(true)

    useEffect(() => {
      async function getData() {
          const req =  await axios.get("/binder/cards");
          setPeople(req.data)
          setLoading(false)
      }
      
      getData()
    }, []);

    console.log(people)
    console.log(loading)

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        
    }

    const outOfFrame = name => {
        console.log(name + " left the screen!")
    }

    
    
    return (
        <div className="cards">
        {loading ?  <Spinner/> : 
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
            <h1>Refresh!</h1>
        </div>
        }
        </div>
    )
}

export default Card
