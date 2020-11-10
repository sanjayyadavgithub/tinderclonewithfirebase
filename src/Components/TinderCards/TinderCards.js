import React,{useState,useEffect} from 'react'
import './TinderCards.css';
import TinderCard from "react-tinder-card";
import database from '../../firebase';
function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        database.collection("people").onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()));
        });
    },[]);
    
    return (
        <div className="tinderCards">
            
            <div className="tinderCards__cardContainer">
                
                {people.map((person) => {
                    return (<TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div className="card" style={{backgroundImage:`url(${person.url})`}}>
                            <h2>{person.name}</h2>
                            <img src={person.url} alt="img"/>
                        </div>
                    </TinderCard>)
                 })} 
            </div> 
        </div>
    )
}

export default TinderCards
