const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const container = document.querySelector('.container')
const items = document.querySelectorAll('.list .item')
const indicator = document.querySelector('.indicators')
const dots = indicator.querySelectorAll('ul li')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1


function setSlider() {
  let itemOld = container.querySelector('.list .item.active')
  itemOld.classList.remove('active')

  let dotsOld = indicator.querySelector('ul li.active')
  dotsOld.classList.remove('active')
  dots[active].classList.add('active')

  indicator.querySelector('.numbers').innerHTML = '0' + (active + 1)
}

function nextClick () {
  active = active + 1 > lastPosition ? 0 : active + 1
  setSlider()
  items[active].classList.add('active')
}


function prevClick () {
  active = active - 1 < firstPosition ? lastPosition : active - 1
  setSlider()
  items[active].classList.add('active')
}

prevButton.addEventListener('click', prevClick)
nextButton.addEventListener('click', nextClick)

