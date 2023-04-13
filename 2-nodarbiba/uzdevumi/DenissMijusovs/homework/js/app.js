const actionElement = document.getElementById("action-el");
const actionElement1 = document.getElementById("action-el1");
const container1 = document.getElementById("container1");
const actionElement2 = document.getElementById("action-el2");

const changeStyle = () => {
  actionElement.style.backgroundColor = "blueviolet";
  actionElement.style.width = "100%";
  actionElement.style.height = "100%";
};
const changeStyle1 = () => {
  container1.style.backgroundColor = "A4343A";
  container1.style.width = "500px";
  actionElement1.style.backgroundColor = "FFFFFF";
  actionElement1.style.height = "60px";
  actionElement1.style.width = "100%";
  actionElement1.style.position = "absolute";
  actionElement1.style.bottom = "120px";
  actionElement1.style.left = "0";
};
const changeStyle2 = () => {
  actionElement2.style.backgroundColor = "cyan";
  actionElement2.style.color = "black";
  actionElement2.style.border = "1px solid black";
  actionElement2.style.borderRadius = "50%";
  actionElement2.style.position = "absolute";
  actionElement2.style.bottom = "100px";
  actionElement2.style.right = "100px";
};
