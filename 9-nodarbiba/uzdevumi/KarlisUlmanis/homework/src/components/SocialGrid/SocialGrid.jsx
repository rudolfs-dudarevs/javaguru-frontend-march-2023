import React, { useState, useEffect } from "react"
import PostCard from "../PostCard/PostCard.jsx"
import GridControls from "../GridControls/GridControls.jsx"
import UserCard from "../UserCard/UserCard.jsx"
import CommentCard from "../CommentCard/CommentCard.jsx"
import Counter from "../Counter/Counter.jsx"
import "./SocialGrid.css"

const SocialGrid = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    const [number, setCount] = useState(5)
    // # izveidot jaunu useState priekš count mainīgā vērtība iegūšanas un iestatīšanas ar sākotnējo vērtību 5
    
    useEffect(() => {
        // # URL paramtera _end=10 vērtību aizvietot ar count, kas būs vērtība no component state
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_start=0&_end=${number}`)
            .then(response => response.json())
            .then(json => setItems(json))
        // # Dependancy masīvu [resourceType] papildināt ar count mainīgo,
        // lai šis useEffect izpildītos arī uz count vērtības maiņu
    }, [resourceType, number])

    const renderCards = (item) => {
        {
            let component;

            switch(resourceType) {
                case "posts":
                    component = <PostCard key={item.id} title={item.title} text={item.body} />
                    break;
                case "users":
                    component = <UserCard key={item.id}
                    title={item.name}
                    nickname={item.username}
                    mailto={item.email}
                    post={item.website}
                    ring={item.phone}/>
                    break;
                case "comments":
                    component = <CommentCard key={item.id}
                    title={item.name}
                    mailto={item.email}
                    text={item.body}/>
                    break;
            }

            return component
        }
    }

    const handleCountChange = (operation) => {
        switch(operation) {
            case "increment":
                if (number < 10) {setCount(prevCount => prevCount + 1);}
                   
                console.log("increment")
                break;
            case "decrament":
                if (number > 1) {setCount(prevCount => prevCount - 1);}
                console.log("decrement") 
        } 
    }

    return (
        <div className="social-grid">
            <div className="social-grid__controls">
                <GridControls handleResourceChange={setResourceType}/>
                <Counter handleCountChange={handleCountChange} result={number}/>
                {/* # Ievietot Count komponenti un padot tai nepieciešamos props - handleCountChange un count */}
            </div>
            <div className="social-grid__content">
                {items.map((item) => renderCards(item))}
            </div>
        </div>
    )
}

export default SocialGrid