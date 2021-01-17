import React, {useState, useEffect} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import axios from './axios'
// import { SwipeableDrawer } from '@material-ui/core'
function TinderCards() {
    const [people, setPeople] = useState([
             
    ])
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/cards');
            setPeople(req.data);
        }
       fetchData();
    }, [])
    console.log(people)
    const swiped = (direction, nameToDelete)=>{
        console.log("removing: "+ nameToDelete)
    }
    const outOfFrame = (name)=>{
        console.log(name+"Left The Screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person)=>(
               
                <TinderCard
                // @ts-ignore
                className="swipe"
                key = {person.name} 
                preventSwipe={["up", "down"]}
                onSwipe = {(dir) => swiped(dir, person.name)}
                onCardLeftScreen= {()=>outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage:  `url(${person.imgUrl})`}}
                        className="card"
                        >
                        <h3>{person.name}</h3>
                        </div>
                </TinderCard>
        
            ))}
            </div>
            <div className="tinderCards_noMorePeople">No more people in your area</div>
        </div>
    )
}

export default TinderCards
