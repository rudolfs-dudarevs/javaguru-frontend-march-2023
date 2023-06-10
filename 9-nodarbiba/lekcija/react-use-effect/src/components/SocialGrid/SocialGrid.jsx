import React, { useState, useEffect } from "react"
import PostCard from "../PostCard/PostCard.jsx"
import GridControls from "../GridControls/GridControls.jsx"
import "./SocialGrid.css"

const SocialGrid = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    
    useEffect(() => {
        console.log(`resource type changed to ${resourceType}`)
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_start=0&_end=10`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    const renderCards = (item) => {
        {
            let component;

            switch(resourceType) {
                case "posts":
                    component = <PostCard key={item.id} title={item.title} text={item.body} />
                    break;
                case "users":
                    // component = 
                    break;
                case "comments":
                    //  component =
                    break;
            }

            return component
        }
    }

    return (
        <div className="social-grid">
            <GridControls handleResourceChange={setResourceType}/>
            <div className="social-grid__content">
                {items.map((item) => renderCards(item))}
            </div>
        </div>
    )
}

export default SocialGrid