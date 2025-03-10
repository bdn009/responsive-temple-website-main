/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('navMenu');
const navToggle=document.getElementById('navToggle');
const navClose=document.getElementById('navClose');
// menu show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu');
    })
}
// menu hide
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('showMenu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.navLink');
const linkaction=()=>{
    const navMenu=document.getElementById('navMenu');
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n=>n.addEventListener('click', linkaction))
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blurHeader') 
                       : header.classList.remove('blurHeader')
}
window.addEventListener('scroll', blurHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.homeImage1', 5,{opacity:0, x:400})

gsap.from('.homeImage6', 1.5, {opacity: 0, y: 200, delay: .1, ease: 'back.out(1.5)'});
gsap.from('.homeImage3', 1.5, {opacity: 0, y: 400, delay: .3, ease: 'back.out(1.5)'});
gsap.from('.homeImage5', 1.5, {opacity: 0, y: 400, delay: .5, ease: 'back.out(1.5)'});
gsap.from('.homeImage2', 1.5, {opacity: 0, y: 400, delay: .8, ease: 'back.out(1.5)'});
gsap.from('.homeImage4', 1.5, {opacity: 0, y: 200, delay: 1.8, ease: 'back.out(1.5)'});

gsap.from('.homeData', 1.5, {opacity: 0, y: -100, delay: 2.5, ease: 'back.out(1.5)'});

gsap.from('.homeLantern1', 1.5, {opacity: 0, x: 70, delay: 3, ease: 'back.out(1.5)'});
gsap.from('.homeLantern2', 1.5, {opacity: 0, x: -70, delay: 3.5, ease: 'back.out(1.5)'});


/*=============== SAKURA ANIMATION ===============*/
const sakura=new Sakura('.sakuraPetals')

// bg music
const homeButton=document.getElementById('homeButton').addEventListener('click',() =>{
    const bgMusic=new Audio('audio.mp3');
    bgMusic.play();
    bgMusic.volume=0.2
})