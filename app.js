const imgContainer = document.querySelector('[data-js="containerImages"]')


const scrollSlide = (container, nextButton, previousButton) => {

    nextButton.addEventListener('click', () => {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" })
    })

    previousButton.addEventListener('click', () => {
        container.scrollBy({ left: -container.clientWidth, behavior: "smooth" })
    })

    container.addEventListener('scroll', (e) => {
        if (container.clientWidth + container.scrollLeft >= container.scrollWidth) {
            nextButton.classList.add('hideButton')
            previousButton.classList.remove('hideButton')
            return
        }
            nextButton.classList.remove('hideButton')
            previousButton.classList.add('hideButton')
    })

}

const activeFistSlide = () => {
    const container = document.querySelector('#container-slides2-fullScreen')
    const nextButton = document.querySelector('.nextButton')
    const previousButton = document.querySelector('.previousButton')

    scrollSlide(container, nextButton, previousButton)
}

activeFistSlide()

const activeSecondSlide = () => {
    const containerSecondSlide = document.querySelector('.slide-produtos-content')
    const nextButtonSecondSlide = document.querySelector('.nextButton-SecondSlide')
    const beforeButtonSecondSlide = document.querySelector('.previousButton-SecondSlide')

    scrollSlide(containerSecondSlide, nextButtonSecondSlide, beforeButtonSecondSlide)
}

activeSecondSlide()

const activeThirdSlide = () => {
    const containerSecondSlide = document.querySelector('.slide-produtos-Bluetooth')
    const nextButtonSecondSlide = document.querySelector('.nextButton-ThirdSlide')
    const beforeButtonSecondSlide = document.querySelector('.previousButton-ThirdSlide')

    scrollSlide(containerSecondSlide, nextButtonSecondSlide, beforeButtonSecondSlide)
}

activeThirdSlide()

const activeFourthSlide = () => {
    const containerSecondSlide = document.querySelector('.fourth-slide')
    const nextButtonSecondSlide = document.querySelector('.nextButton-FourthSlide')
    const beforeButtonSecondSlide = document.querySelector('.previousButton-FourthSlide')

    scrollSlide(containerSecondSlide, nextButtonSecondSlide, beforeButtonSecondSlide)
}

activeFourthSlide()

const activeFifthSlide = () => {
    const containerSecondSlide = document.querySelector('.fifth-slide')
    const nextButtonSecondSlide = document.querySelector('.nextButton-FifthSlide')
    const beforeButtonSecondSlide = document.querySelector('.previousButton-FifthSlide')

    scrollSlide(containerSecondSlide, nextButtonSecondSlide, beforeButtonSecondSlide)
}

activeFifthSlide()

const activeSixthSlide = () => {
    const containerSecondSlide = document.querySelector('.sixth-slide')
    const nextButtonSecondSlide = document.querySelector('.nextButton-SixthSlide')
    const beforeButtonSecondSlide = document.querySelector('.previousButton-SixthSlide')

    scrollSlide(containerSecondSlide, nextButtonSecondSlide, beforeButtonSecondSlide)
}

activeSixthSlide()


const templeteToBeRender = (imagens, imgContainer, textos, className) => {
    if (imagens[0].p) {
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
            `<div class= ${className}>
            <img src=${img.url}>
        </div>`
    })

}

const createSlides = (imagesSlide, containerSlide, textos = '', className) => {
    const imgContainer = document.querySelector(`[data-js="${containerSlide}"]`)

    templeteToBeRender(imagesSlide, imgContainer, textos, className)

    return [imgContainer]
}

let index = 0;

const imgMarker = (indexValue, markers) => {

    markers.forEach(item => {

        if (item.id == indexValue) {
            item.classList.add('activeMarker')
            return
        }
        item.classList.remove('activeMarker')
    })
}

const previousSlide = (imgContainer, items, balls) => {
    const lastItem = items[items.length - 1]
    imgContainer.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.itemFullScreean')

    const indexValue = index <= 0 ? index = (balls.length - 1) : --index

    imgMarker(indexValue, balls)
}

const nextSlide = (imgContainer, items, balls) => {
    imgContainer.insertBefore(items[0], null)
    items = document.querySelectorAll('.itemFullScreean')

    const indexValue = index < (balls.length - 1) ? ++index : index = 0

    imgMarker(indexValue, balls)
}


const clickButton = () => {
    const nextButton = document.querySelector('.next-Button')
    const previousButton = document.querySelector('.previous-Button')

    let timer = setInterval(() => { nextButton.click() }, 5000)

    const stopSlide = () => {

        nextButton.style.display = 'block'
        previousButton.style.display = 'block'

        // console.log('entrei')
        clearInterval(timer)

    }

    imgContainer.addEventListener('mouseenter', () => {
        stopSlide()
    })

    imgContainer.addEventListener('mouseleave', () => {

        nextButton.style.display = 'none'
        previousButton.style.display = 'none'

        timer = setInterval(() => {
            // console.log('sai')
            nextButton.click()
        }, 5000
        )
    })

}

clickButton()

const changeSlide = (e, balls) => {
    const isPreviousButton = e.target.classList.contains('previous-Button')
    const isNextButton = e.target.classList.contains('next-Button')


    let items = document.querySelectorAll('.itemFullScreean')


    if (isNextButton) {
        nextSlide(imgContainer, items, balls)
    }

    if (isPreviousButton) previousSlide(imgContainer, items, balls)
}


const addEffects = () => {
    const slideContainer = document.querySelector('[data-js="slide-full-screean"]')
    const balls = document.querySelectorAll('.ball')

    balls[0].classList.add('activeMarker')

    slideContainer.addEventListener('click', (e) => { changeSlide(e, balls) })
}


const createPointsImgMarker = (imgs) => {
    const pointsImgMarker = document.querySelector('.markImg-point')
    imgs.forEach(img => {
        pointsImgMarker.innerHTML += `<li><span id=${img.id} class='ball'></span></li>`
    })
}

const slidethree = () => {

    const imagens = [
        { id: 0, url: "img/bg-desktop1.webp" },
        { id: 1, url: "img/bg-desktop2.webp" },
        { id: 2, url: "img/bg-desktop3.webp" },
        { id: 3, url: "img/bg-desktop4.webp" },
        { id: 4, url: "img/bg-desktop5.webp" },
        { id: 5, url: "img/bg-desktop6.webp" },
        { id: 6, url: "img/bg-desktop7.webp" },
    ]

    createSlides(imagens, 'containerImages', '', 'itemFullScreean')

    createPointsImgMarker(imagens)

    addEffects()

}

const slideOne = () => {
    const slideImgOne = [
        { id: 0, url: "img/1.jpeg" },
        { id: 1, url: "img/2.jpeg" },
        { id: 2, url: "img/3.jpeg" },
        { id: 3, url: "img/4.jpeg" },
        { id: 4, url: "img/5.jpeg" },
    ]

    const [imgContainer, items] = createSlides(slideImgOne, 'imagensContainer', '', 'item')
}

const slideTwo = () => {

    const textos = ['Mercado Pago', 'Ofertas', 'Mercado Play', 'Mercado',
        'Moda', 'Celulares', 'Veículos', 'Lar', 'Computação', 'Ver mais']

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


const activeButtonCollapse = () => {
    const button = document.querySelector('[data-js="button-Collapse"]')
    const footerBody = document.querySelector('[data-js="collapse-Footer"]')
    const arrowCollapse = document.querySelector('.arrow-collapse')

    button.addEventListener('click', () => {
        button.classList.toggle('collapse-Footer-actived')
        footerBody.classList.toggle('collapse-Footer-actived')
        arrowCollapse.classList.toggle('turnButton')
    })
}


const testingElement = (el) => {
    const input = document.querySelector('[data-js="input"]')

    if(el.classList.contains('searchInput')) {
        input.style.border = "1px solid #1d87da" 
    } else {
        input.style.border = "none"   
    }
}

const activeSearchInput = () => {

    document.addEventListener('click', (e) => {
        testingElement(e.target)
    })
    
}

slideOne()
slideTwo()
slidethree()

activeButtonCollapse()
activeSearchInput()