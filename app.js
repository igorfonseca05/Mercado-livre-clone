
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

    const move =  (e) => {
        scrollX = imgContainer.scrollLeft

        if (startX !== null && scrollX > 10) {
            right = e.touches[0].clientX
            let diff = startX - right

            direction = diff >= 0 ? -1 : 1

            // console.log(imgContainer.scrollWidth - scrollX)
            // console.log(imgContainer.clientWidth - scrollX)


            items.forEach(img => {
                img.style.transform = `translateX(${(sizeImgContainer- scrollX) * direction}px)`
            })
            // console.log(imgContainer.clientWidth, scrollX)

        }
    }

    imgContainer.addEventListener('touchmove', debounce((e)=> {move(e)}, 15))

    imgContainer.addEventListener('touchend', (e) => {
        startX = null;
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


const createslide2 = () => {
    const imgContainer = document.querySelector('[data-js="SecondimagensContainer"]')

    const imagens = [
        { id: 1, url: "img/oi.png" },
        { id: 2, url: "img/oi.png" },
        { id: 3, url: "img/oi.png" },
        { id: 4, url: "img/oi.png" },
        { id: 5, url: "img/oi.png" },
        { id: 1, url: "img/oi.png" },
        { id: 2, url: "img/oi.png" },
        { id: 3, url: "img/oi.png" },
        { id: 4, url: "img/oi.png" },
        { id: 5, url: "img/oi.png" },
    ]

    const textos = ['Mercado Pago', 'Ofertas', 'Mercado Play', 'Cupons', 'Celulares']

    imagens.forEach(img => {
        imgContainer.innerHTML +=
        `<div class='imgAndTextContainer'>
        <div class='circImg'>
         <img src=${img.url}>
         </div>
         <p>${textos[img.id]}</p>
        
        </div>`
    })

    let items = document.querySelectorAll('.item')
}


createslide2()
createslide()