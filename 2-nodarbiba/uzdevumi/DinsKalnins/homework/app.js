const actionElement = document.getElementById("action-el");
const superElement = document.getElementById("superpower");
const finalElement = document.getElementById("final");

    const changeStyle = () => {
        actionElement.style.backgroundColor = "black";
        actionElement.style.width = "200px";
        actionElement.style.height = "200px";
    }

    const spicyStyle = () => {
        superElement.style.backgroundColor = "blue";
        superElement.style.width = "300px";
        superElement.style.height = "200px";
        superElement.style.borderBottomRightRadius ="10px";
        superElement.style.animationDelay = "1s";
    }

    const finalStyle = () => {
        finalElement.style.borderRadius = "5px";
        finalElement.classList.add("rainbowBackground");
        finalElement.style.width = "300px"
};
    

    const activateAll = () => {
        changeStyle();
        spicyStyle();
        finalStyle();
    }

    document.addEventListener("DOMContentLoaded", function() {
        const actionElement = document.getElementById("action-el");
        const superElement = document.getElementById("superpower");
        const finalElement = document.getElementById("final");
        const activateAllButton = document.getElementById("activate-all");
    
    activateAllButton.addEventListener("click", activateAll);
});
