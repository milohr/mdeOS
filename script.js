function hovered() {
    document.getElementById("logo").setAttribute('src', 'img/logo2.svg');
}

function unhovered() {
    document.getElementById("logo").setAttribute('src', 'img/logo.svg');
}

document.getElementById("logo").addEventListener("mouseover", hovered);
document.getElementById("logo").addEventListener("mouseout", unhovered);
