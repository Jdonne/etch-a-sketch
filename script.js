const container = document.querySelector('.container');

function gridmaker() {
for (let r = 0; r<256; r++) {
    const div = document.createElement('div');
    div.style.width = `${50/16}em`;
    div.style.height = `${50/16}em`;
    div.className = 'grid-block';
    container.appendChild(div);
}
}
gridmaker();