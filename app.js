
let startX;

const moveImagens = (imgContainer, items) => {

    const sizeImgContainer = Math.ceil(imgContainer.clientWidth)

    // imgContainer.addEventListener('click', () => {
    //     imgContainer.scrollBy({left: sizeImgContainer, behavior: 'smooth'})  

    //     const lastItem = items[items.length - 1];
    //     imgContainer.insertBefore(items[0], null);
    //     items = document.querySelectorAll(".item");
    // })
    let startX;

    imgContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
    })

    imgContainer.addEventListener('touchmove', (e) => {
        if(startX !==  null) {
            let right =  e.touches[0].clientX
            let diff = startX - right

            const direction = diff > 0? 1 : -1
            imgContainer.scrollBy({left: `${sizeImgContainer * direction}`, behavior: 'smooth'});
        }  
    })
    imgContainer.addEventListener('touchend', (e) => {
        startX = null
    })

}

const createslide = () => {
    const imgContainer = document.querySelector('[data-js="imagensContainer"]')

    const imagens = [
        { id: 1, url: "img/1.jpeg" },
        { id: 2, url: "img/2.jpeg" },
        { id: 3, url: "img/3.jpeg" },
        { id: 4, url: "img/4.jpeg" },
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