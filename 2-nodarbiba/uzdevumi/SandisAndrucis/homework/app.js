const actionElement = document.getElementById("action-el");
const actionPosition = document.getElementById("action-pos");

const changeSize = () => {
    actionElement.style.lineHeight = "100px";
    actionElement.style.width = "100px";
    actionElement.style.height = "100px";
}

const changeSize2 = () => {
    actionElement.style.lineHeight = "150px";
    actionElement.style.width = "150px";
    actionElement.style.height = "150px";
}

const changeSize3 = () => {
    actionElement.style.lineHeight = "200px";
    actionElement.style.width = "200px";
    actionElement.style.height = "200px";
}

const changeColor = () => {
    actionElement.style.backgroundColor = "Blue";
}

const changeColor2 = () => {
    actionElement.style.backgroundColor = "Green";
}

const changeColor3 = () => {
    actionElement.style.backgroundColor = "Red";
}

const changePosTopLeft = () => {
    actionPosition.style.justifyContent = "left";
    actionPosition.style.alignItems = "start";
}

const changePosTopCenter = () => {
    actionPosition.style.justifyContent = "center";
    actionPosition.style.alignItems = "start";
}

const changePosTopRight = () => {
    actionPosition.style.justifyContent = "right";
    actionPosition.style.alignItems = "start";
}

const changePosMidLeft = () => {
    actionPosition.style.justifyContent = "left";
    actionPosition.style.alignItems = "center";
}

const changePosMidCenter = () => {
    actionPosition.style.justifyContent = "center";
    actionPosition.style.alignItems = "center";
}

const changePosMidRight = () => {
    actionPosition.style.justifyContent = "right";
    actionPosition.style.alignItems = "center";
}

const changePosBottomLeft = () => {
    actionPosition.style.justifyContent = "left";
    actionPosition.style.alignItems = "end";
}

const changePosBottomCenter = () => {
    actionPosition.style.justifyContent = "center";
    actionPosition.style.alignItems = "end";
}

const changePosBottomRight = () => {
    actionPosition.style.justifyContent = "right";
    actionPosition.style.alignItems = "end";
}