
let startX;

const moveImagens = (imgContainer, items) => {

    const sizeImgContainer = Math.ceil(imgContainer.clientWidth)


    function debounce(func, delay) {
        let timeoutId;

        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeoutId);

            timeoutId = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        };
    }


    let startX;
    let right;

    imgContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
    })

    let scrollX;
    let direction


    imgContainer.addEventListener('touchmove', (e) => {

        if (startX !== null) {
            right = e.touches[0].clientX
            let diff = startX - right

            direction = diff >= 0 ? -1 : 1

            console.log(sizeImgContainer)
            items.forEach(img => {
                img.style.transform = `translateX(${(sizeImgContainer) * direction}px)`
            })

        }
    })

    imgContainer.addEventListener('touchend', (e) => {
        startX = null;
    })

}

const templeteToBeRender = (imagens, imgContainer, textos) => {
    if(imagens[0].p) {
        imagens.forEach(img => {
            imgContainer.innerHTML += 
            `<div class='imgAndTextContainer'>
            <div class='circImg ${img.id} '>
            <img src=${img.url}>
            </div>
            <p>${textos[img.id]}</p>
            </div>`
        })
        return
    }

    imagens.forEach(img => {
        imgContainer.innerHTML += 
        `<div class='item'>
        <img src=${img.url}>
        </div>`
    })

}

const createSlides = (imagesSlide, containerSlide, textos = '') => {
    const imgContainer = document.querySelector(`[data-js="${containerSlide}"]`)

    templeteToBeRender(imagesSlide, imgContainer, textos)

    let items = document.querySelectorAll('.item')

    return [imgContainer, items]
}

const slideOne = ()=>{
    const slideImgOne = [
        { id: 1, url: "img/1.jpeg" },
        { id: 2, url: "img/2.jpeg" },
        { id: 3, url: "img/3.jpeg" },
        { id: 4, url: "img/4.jpeg" },
        { id: 5, url: "img/5.jpeg" },
    ]

    const [imgContainer, items] = createSlides(slideImgOne, 'imagensContainer')

    moveImagens(imgContainer, items)
}



const slideTwo = () =>{

    const textos = ['Mercado Pago', 'Ofertas', 'Mercado Play', 'Mercado', 
        'Moda', 'Celulares', 'Veículos', 'Lar', 'Computação', 'Ver mais'  ]

    const slideImgOTwo = [
        { id: 0, url: "img/icon1.webp", p: true },
        { id: 1, url: "img/icon2.webp", p: true },
        { id: 2, url: "img/icon3.webp", p: true },
        { id: 3, url: "img/icon4.webp", p: true },
        { id: 4, url: "img/icon5.webp", p: true },
        { id: 5, url: "img/icon6.webp", p: true },
        { id: 6, url: "img/icon7.webp", p: true },
        { id: 7, url: "img/icon8.webp", p: true },
        { id: 8, url: "img/icon9.webp", p: true },
        { id: 9, url: "img/icon10.webp", p: true },
    ]
    
    createSlides(slideImgOTwo, 'SecondimagensContainer', textos)
}



// slideOne()
slideTwo()