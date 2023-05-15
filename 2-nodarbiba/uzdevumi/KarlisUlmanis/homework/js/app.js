const actionElement = document.getElementById("action-el");

const changeStyle = () => {
actionElement.style.backgroundColor = "black";
actionElement.style.width = "200px";
actionElement.style.height = "200px";

}

const actionSomeTime = document.getElementById("action-el-sometimes");

const changeStyleSomeTime = () => {
    actionSomeTime.style.backgroundColor = Math.random() < 0.5 ? "#0000FF" : "#FF0000";;
}

const actionPosition = document.getElementById("action-el-position");
let colorArray = ["#754EF8", "#FBB0F3", "#0ABAF5", "#F7C734"];
// var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
// console.log (randomColor)

const changeStylePosition = () => {
    actionPosition.style.position = "absolute";
    actionPosition.style.top = Math.random() <0.5 ? "0" : "146";
    actionPosition.style.left = Math.random() <0.5 ? "0" : "146";
    actionPosition.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)];
}
