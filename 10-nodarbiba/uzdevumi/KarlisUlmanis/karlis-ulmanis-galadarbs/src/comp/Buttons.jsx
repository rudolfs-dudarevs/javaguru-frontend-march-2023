import "./Buttons.css"

const Buttons = ({text, isSecondary}) => {
    return (
        <button className={isSecondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}

export default Buttons