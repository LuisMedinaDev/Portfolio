const navLink = document.querySelectorAll('.navBar-List_link');
const navList = document.querySelector('.navBar-List')
const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('.header');
const logo = document.querySelector('.navBar_logo');


window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;

    if (scrollHeight >= 60) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});


function menuMovile(){
    menuIcon.addEventListener('click', ()=> {
        menuIcon.classList.toggle('menu-icon-active');
        navList.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        
        if(!menuIcon.classList.contains('menu-icon-active')){
            navList.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
        }
    })
    
    navLink.forEach(link => {
        link.addEventListener('click', ()=> {
            if(window.innerWidth <= 768){
                navList.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
                menuIcon.classList.remove('menu-icon-active')
            }
        })
    })
    
    window.addEventListener('click', (event)=> {
        if(!navList.contains(event.target) && !menuIcon.contains(event.target) && window.innerWidth <= 768){
            navList.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
            menuIcon.classList.remove('menu-icon-active')
        }
    })
    
}


    menuMovile()
