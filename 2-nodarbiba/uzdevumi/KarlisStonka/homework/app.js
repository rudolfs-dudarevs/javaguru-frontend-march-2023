const actionElement = document.getElementById("action-el");

const changeStyle = () => {
actionElement.style.backgroundColor = "black";
actionElement.style.width = "200px";
actionElement.style.height = "200px";

}
let btnprimary = document.querySelector('.primary');
let btnsecondary = document.querySelector('.secondary');
let btnthird = document.querySelector('.third');

btnprimary.addEventListener('click',() => btnprimary.style.backgroundColor = '#337ab7')
btnsecondary.addEventListener('click',() => btnsecondary.style.backgroundColor = '#c9302c')
btnthird.addEventListener('click',() => btnthird.style.backgroundColor = '#4cae4c')

let circle = document.querySelector('.circle');
let moveBy = 10;
window.addEventListener('load', () => {
    circle.style.position = 'relative';
    circle.style.left = 0;
    circle.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
    }
});