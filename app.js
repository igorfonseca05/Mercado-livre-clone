
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

    imgContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
    })


    const move = (e) => {
        if (startX !== null) {
            let right = e.touches[0].clientX
            let diff = startX - right

            let direction = diff >= 0 ? 1 : -1

            console.log(direction)

            imgContainer.scrollBy({left: `${sizeImgContainer * direction}`, behavior: 'smooth'});
    
        }
    }


    imgContainer.addEventListener('touchmove', debounce((e)=> {move(e)}, 1))

    imgContainer.addEventListener('touchend', (e) => {
        // imgContainer.scrollBy({left: `${0}px`, behavior: 'smooth'});
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