import "./NotFound.css"

const NotFound = () => {
    const binocular = `https://media.istockphoto.com/id/1141529146/vector/binoculars-icon-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=bCqo2Xd46daH4QOzYRBTG64GjCgj6yIGQmWZwOPnbTA=`
   
    return (
        <div className="not-found">
            <img className="not-found__img" src={binocular} alt="binocular icon"></img> 
            <div className="not-found__txt">404. This page does not exist.</div>
        </div>
    )
}

export default NotFound