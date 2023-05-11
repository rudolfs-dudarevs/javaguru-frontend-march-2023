const actionElement = document.getElementById("action-el");
const actionElement1 = document.getElementById("action-el1");
const container1 = document.getElementById("container1");
const actionElement2 = document.getElementById("action-el2");

const changeStyle = () => {
  return (
    (actionElement.style.width = "100%"),
    (actionElement.style.height = "100%"),
    (actionElement.style.backgroundColor = "cyan")
  );
};

const changeStyle1 = () => {
  return (
    (actionElement1.style.borderRadius = "50%"),
    (actionElement1.style.position = "absolute"),
    (actionElement1.style.top = "100px"),
    (actionElement1.style.right = "100px"),
    (actionElement1.style.backgroundColor = "pink")
  );
};

const changeStyle2 = () => {
  const rotation = 45;
  return (
    (actionElement2.style.border = "5px solid black"),
    (actionElement2.style.backgroundColor = "green"),
    (actionElement2.style.position = "absolute"),
    (actionElement2.style.bottom = "0px"),
    (actionElement2.style.transform = `rotate(${rotation}deg)`)
  );
};
