let time = 6000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length
min = 0;

function firstImage() {
    images = document.querySelectorAll("#slider img")
    images[0].classList.add("selected")
}

function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if (currentImageIndex >= max)
        currentImageIndex = 0
    images[currentImageIndex].classList.add("selected")
}

function previousImage() {
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex--
    if (currentImageIndex < min)
        currentImageIndex = max - 1
    images[currentImageIndex].classList.add("selected")
}

function start() {
    firstImage()
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

// Função de movimentação de produtos

function scrollWin(x) {

    lista = document.getElementById("evidence--row")

    var intervalo = setInterval(function(){
        lista.scrollBy(x,0)
    },0)

    window.setTimeout(function() {
        clearInterval(intervalo);
    }, 500)

}

