const text = document.querySelector('h3');

function changeColor(event){
    const color = event.target.value
    text.style.color = color
}
