import "./Buttons.css"

const Buttons = ({text, isSecondary, type}) => {
    return (
        <button className={isSecondary ? "btn-secondary" : "btn-primary"} type={type}>
            {text}
        </button>
    )
}

export default Buttons