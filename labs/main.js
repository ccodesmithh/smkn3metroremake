let slidlay = document.querySelector('.slider-container')
let sliders = document.querySelectorAll('.slider')
let h4 = document.querySelectorAll('.h')
let p4 = document.querySelectorAll('.p')
let dotsContainer = document.querySelector('.dots-container')
let nextBtn = document.querySelector('.nav.next')
let prevBtn = document.querySelector('.nav.prev')

let currentIndex = 0
let autoPlayInterval

function showSlider(index) {
    sliders.forEach((slider, i) =>{
        slider.classList.remove('active')
        if(dotsContainer.children[i]) {
            dotsContainer.children[i].classList.remove('active')
        }
    })

    sliders[index].classList.add('active')
    if (dotsContainer.children[index]) {
        dotsContainer.children[index].classList.add('active')
    }
    h4.forEach((h) =>{
        h.classList.add('naik')
    })
    h4[index].classList.remove('naik')
    p4.forEach((p) =>{
        p.classList.add('naik')
    })
    p4[index].classList.remove('naik')

}
slidlay.addEventListener('mouseover' , ()=>{
    if (window.innerWidth > 690){
    nextBtn.style.opacity = "1"
    prevBtn.style.opacity = "1"
    }
})
slidlay.addEventListener('mouseleave' , ()=>{
    if (window.innerWidth > 690){
    nextBtn.style.opacity = "0"
    prevBtn.style.opacity = "0"
    }
})
function nextSlider() {
    currentIndex = (currentIndex + 1) % sliders.length
    showSlider(currentIndex)
}
function prevSlider() {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length
    showSlider(currentIndex)
}

nextBtn.addEventListener('click', () => {
    nextSlider()
    resetAutoPlay()
})
prevBtn.addEventListener('click', () => {
    prevSlider()
    resetAutoPlay()
})

function startAutoPlay(){
    autoPlayInterval = setInterval(nextSlider , 5000)
}
function resetAutoPlay(){
    clearInterval(autoPlayInterval)
    startAutoPlay()
}

function createDots(){
    sliders.forEach((_, i) => {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        dot.addEventListener('click' , () => {
            currentIndex = i
            showSlider(currentIndex)
            resetAutoPlay()
        })
        dotsContainer.appendChild(dot)
    })
    showSlider(currentIndex)
}
createDots()
startAutoPlay()