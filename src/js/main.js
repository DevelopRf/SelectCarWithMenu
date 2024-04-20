let result = ''
let menu = document.querySelector('.menu')


const cars = ['bmw', 'cadillac', 'mercedes', 'mustang', 'ford', 'jeep', 'volkswagen', 'tesla', 'nissan', 'ferrari', 'lexus', 'kia', 'bentley']

let ul = document.createElement('ul')
menu.appendChild(ul)

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];

    let li = document.createElement('li')
    let link = document.createElement('a')
    ul.appendChild(li)
    li.appendChild(link)
    link.innerText += element.charAt(0).toUpperCase() + element.slice(1);
    link.setAttribute('href', '#')
    li.setAttribute('data-image', 'https://source.unsplash.com/random?' + element)
}


const selectLi = document.querySelectorAll('li')
let title = document.getElementById('title')
const loading = document.querySelector('.loader')
for (const item of selectLi) {
    item.addEventListener('click', () => {
        let image = document.querySelector('.image img')
        loading.style.visibility = 'visible'
        image.src = ""
        image.src = item.getAttribute('data-image')
        title.style.visibility = 'hidden';

        image.addEventListener('load', () => {
            loading.style.visibility = 'hidden'
        })
    })
}

