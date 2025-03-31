const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    
    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--yp', yp);
 };
 
 document.body.addEventListener('pointermove', syncPointer);
 
 
 /*=============== SHOW MENU ===============*/
 const navMenu = document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')
 
 /* Menu show */
 navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
 })
 
 /* Menu hidden */
 navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
 })
 
 /*=============== SEARCH ===============*/
 const search = document.getElementById('search'),
       searchBtn = document.getElementById('search-btn'),
       searchClose = document.getElementById('search-close')
 
 /* Search show */
 searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
 })
 
 /* Search hidden */
 searchClose.addEventListener('click', () =>{
    search.classList.remove('show-search')
 })
    
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('searchButton').addEventListener('click', function () {
            const searchInput = document.getElementById('searchInput');
            searchInput.classList.toggle('open');
            searchInput.focus();

        });
    })

