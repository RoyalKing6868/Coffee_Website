let navBar = document.querySelector('.nav-bar');
document.querySelector('#menuBtn').onclick = () => {
    navBar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
}

let cartItem =document.querySelector('.cart-item-container');
document.querySelector('#cartBtn').onclick=() =>{
    cartItem.classList.toggle('active');
    navBar.classList.remove('active');
    searchBox.classList.remove('active');
}

let searchBox = document.querySelector('.search-form');
document.querySelector('#searchBtn').onclick = () =>{
    searchBox.classList.toggle('active');
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll=()=>{
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
    
}