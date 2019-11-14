const container = document.querySelector('.container');
const button = document.querySelector('button');

let n = 32
function gridmaker() {
    for (let r = 0; r < (Math.pow(n, 2)); r++) {
        const div = document.createElement('div');
        div.style.width = `${50 / n}em`;
        div.style.height = `${50 / n}em`;
        div.className = 'grid-block';
        container.appendChild(div);
    }
}
gridmaker();

function fillIn(e) {
    let griddiv = e.target
    griddiv.classList.add('filled');
}
function reset() {
    const filledBlock = document.querySelectorAll('.filled');
    //removes all blocks
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //removes colored blocks
    filledBlock.forEach(b => b.classList.remove('filled'));
    //
    n = window.prompt("width and height of grid?");
    gridmaker();
}
container.addEventListener('mouseover', fillIn)
button.addEventListener('click', reset)