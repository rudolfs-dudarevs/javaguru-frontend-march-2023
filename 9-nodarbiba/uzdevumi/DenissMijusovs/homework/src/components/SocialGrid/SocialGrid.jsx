import React, { useState, useEffect } from "react"
import PostCard from "../PostCard/PostCard.jsx"
import GridControls from "../GridControls/GridControls.jsx"
// # importēt Counter komponenti
import Counter from "../Counter/Counter.jsx"
// # importēt UserCard komponenti
import UserCard from "../UserCard/UserCard.jsx"
// # importēt CommentCard komponenti
import CommentCard from "../CommentCard/CommentCard.jsx"
import "./SocialGrid.css"

const SocialGrid = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    // # izveidot jaunu useState priekš count mainīgā vērtība iegūšanas un iestatīšanas ar sākotnējo vērtību 5
    const [count, setCount] = useState(5)
    
    useEffect(() => {
        // # URL paramtera _end=10 vērtību aizvietot ar count, kas būs vērtība no component state
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_start=0&_end=${count}`)
            .then(response => response.json())
            .then(json => setItems(json))
        // # Dependancy masīvu [resourceType] papildināt ar count mainīgo,
        // lai šis useEffect izpildītos arī uz count vērtības maiņu
    }, [resourceType, count])

    const renderCards = (item) => {
        {
            let component;

            switch(resourceType) {
                case "posts":
                    component = <PostCard key={item.id} title={item.title} text={item.body} />
                    break;
                case "users":
                    // # Ievietot UserCard komponenti un padot tai nepieciešamos props
                    // component = 
                    component = <UserCard key={item.id} name={item.name} email={item.email} website={item.website} />
                    break;
                case "comments":
                    // # Ievietot CommentCard komponenti un padot tai nepieciešamos props
                    //  component =
                    component = <CommentCard key={item.id} name={item.name} text={item.body} email={item.email} />
                    break;
            }

            return component
        }
    }

    const handleCountChange = (operation) => {
        switch(operation) {
            case "increment": 
                // # Izveidot loģiku, lai palielinātu Count vērtību
                if (count < 10) {
                    setCount(prevCount => prevCount + 1);
                console.log("increment")
                }
                break;
            case "decrement":
                // # Izveidot loģiku, lai samazinātu Count vērtību
                if (count > 0) {
                    setCount(prevCount => prevCount - 1);
                console.log("decrement")
                }
                break;
            default:
                break;
        } 
    }

    return (
        <div className="social-grid">
            <div className="social-grid__controls">
                <GridControls handleResourceChange={setResourceType}/>
                {/* # Ievietot Count komponenti un padot tai nepieciešamos props - handleCountChange un count */}
                <Counter handleCountChange={handleCountChange} count={count}/>
            </div>
            <div className="social-grid__content">
                {items.map((item) => renderCards(item))}
            </div>
        </div>
    )
}

export default SocialGrid