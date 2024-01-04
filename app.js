
let startX;

const moveImagens = (imgContainer, items) => {

    const sizeImgContainer = Math.ceil(imgContainer.clientWidth)

    imgContainer.addEventListener('click', () => {
        imgContainer.scrollBy({left: sizeImgContainer, behavior: 'smooth'})
    })
}

const createslide = () => {
    const imgContainer = document.querySelector('[data-js="imagensContainer"]')
    const slidec= document.querySelector('.slidec')

    const imagens = [
        { id: 1, url: "img/1.JPEG" },
        { id: 2, url: "img/2.JPEG" },
        { id: 3, url: "img/3.JPEG" },
        { id: 4, url: "img/4.JPEG" },
        { id: 5, url: "img/5.jpeg" },
    ]

    imagens.forEach(img => {
        imgContainer.innerHTML +=
            `<div class='item'>
         <img src=${img.url}>
        </div>`
    })

    let items = document.querySelectorAll('.item')

    moveImagens(imgContainer, items)
}


createslide()