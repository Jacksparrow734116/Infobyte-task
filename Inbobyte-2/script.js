
    const crossing = document.getElementById('crossing');
    const cancel = document.getElementById('cancel');
    const menu = document.getElementById('menu');

    function toggleMenu() {
        menu.classList.toggle('show');
        if(crossing.style.display==='block'){
              
                crossing.style.display='none';
                cancel.style.display='block';
               
              
            }else{
               
                crossing.style.display='block';
                cancel.style.display='none';
                
            }
    }

    crossing.addEventListener('click', toggleMenu);
    cancel.addEventListener('click', toggleMenu);


    document.addEventListener("DOMContentLoaded", function() {
        const aboutUsSection = document.getElementById("about");
        const homeSection = document.querySelector(".home-section");
        const roomSection=document.getElementById("rooms");
        const gallerySection=document.getElementById("gallery");
        const gall = document.querySelector(".gall");
        const servicesSection=document.getElementById("services");
        const serv = document.querySelectorAll(".ser-i1");
        const aboutUsImage = document.querySelector(".about-image");
        const titleAbout = document.querySelector(".title-about");
        const aboutHead = document.querySelector(".about-head");
        const ranAbout = document.querySelector(".ran-about");
        const adds = document.querySelectorAll(".booku"); 
        const smallText = document.querySelector(".small-text");
        const guest = document.querySelector(".guest");
        const r1 = document.querySelector(".r1");
        const r2 = document.querySelector(".r2");
    
        function handleScroll() {
            const homeRect = homeSection.getBoundingClientRect();
            const homeWindowHeight = window.innerHeight || document.documentElement.clientHeight;
    
        
            if (homeRect.top <= homeWindowHeight && homeRect.bottom >= 0) {
                smallText.classList.add("visible");
                guest.classList.add("visible");
            }
    
            const aboutRect = aboutUsSection.getBoundingClientRect();
            const aboutWindowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    
            if (aboutRect.top <= aboutWindowHeight && aboutRect.bottom >= 0) {
                aboutUsSection.classList.add("visible");
                aboutUsImage.classList.add("visible");
                titleAbout.classList.add("visible");
                aboutHead.classList.add("visible");
                ranAbout.classList.add("visible");
                adds.forEach(add => add.classList.add("visible")); 
            }

const roomRect=roomSection.getBoundingClientRect();
const roomWindow=window.innerHeight || document.doctype.clientHeight;
if(roomRect.top<=roomWindow && roomRect.bottom>=0){
r1.classList.add("visible");
r2.classList.add("visible");
}

const servRect=servicesSection.getBoundingClientRect();
const servWindow=window.innerHeight || document.doctype.clientHeight;
if(servRect.top<=servWindow && servRect.bottom>=0){
serv.forEach((ser,index) => {
    ser.classList.add("visible");
    ser.style.transitionDelay = `${index * 0.4}s`;
});
}

const gallRect=gallerySection.getBoundingClientRect();
const gallWindow=window.innerHeight || document.doctype.clientHeight;
if(gallRect.top<=gallWindow && gallRect.bottom>=0){
gall.classList.add("visible");
}

        }
    
        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
    });
    