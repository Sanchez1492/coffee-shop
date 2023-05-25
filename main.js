let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn')
let searchForm = document.querySelector('.search-form')

let cartContainer = document.querySelector('.cart-items-container')
let cartBtn = document.querySelector('#cart-btn')
let searchBtn = document.querySelector('#search-btn')

menuBtn.addEventListener('click', toggleMenu)
cartBtn.addEventListener('click', toggleCart)
searchBtn.addEventListener('click', toggleSearchForm)

function toggleMenu () {
    navbar.classList.toggle('active')
    cartContainer.classList.remove('active')
    searchForm.classList.remove('search-active')
}

function toggleCart () {
    cartContainer.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('search-active')
}

function toggleSearchForm () {
    searchForm.classList.toggle('search-active')
    navbar.classList.remove('active')
    cartContainer.classList.remove('active')
}

window.onscroll = () => {
    searchForm.classList.remove('search-active')
    navbar.classList.remove('active')
    cartContainer.classList.remove('active')
}