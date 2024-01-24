
let startX;

const moveImagens = (imgContainer, items) => {

    const sizeImgContainer = Math.ceil(imgContainer.clientWidth)


    let startX;
    let right;

    imgContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
    })

    let scrollX;
    let direction

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

    imgContainer.addEventListener('touchmove', (e) => {
        // if(sizeImgContainer - (sizeImgContainer.scrollWidth - sizeImgContainer) > 0) return
        // e.preventDefault()

        if (startX !== null) {
            right = e.touches[0].clientX
            let diff = startX - right

            direction = diff >= 0 ? 1 : -1

            // console.log((sizeImgContainer) * direction)
            items.forEach(item => {
                item.style.transform = `translateX(${sizeImgContainer * direction})px`
            })
        

        }
    } )

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

    const textos = ['Mercado Pago', 'Ofertas', 'Mercado Play', 'Cupons', 'Celulares']

    const slideImgOTwo = [
        { id: 1, url: "img/oi.png", p: true },
        { id: 2, url: "img/oi.png", p: true },
        { id: 3, url: "img/oi.png", p: true },
        { id: 4, url: "img/oi.png", p: true },
        { id: 3, url: "img/oi.png", p: true },
        { id: 1, url: "img/oi.png", p: true },
        { id: 2, url: "img/oi.png", p: true },
        { id: 3, url: "img/oi.png", p: true },
        { id: 3, url: "img/oi.png", p: true },
        { id: 3, url: "img/oi.png", p: true },
    ]
    
    createSlides(slideImgOTwo, 'SecondimagensContainer', textos)
}

const slide4 = () => {
    const slides = document.querySelector('[data-js="slide4Container"]')
    
}

// slide4()
slideOne()
slideTwo()