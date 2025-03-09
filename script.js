
function scrollTrigger(){
gsap.from(".navbar",{
    opacity:1,
    y:-30,
    duration:1,
    delay:0.1,
})

gsap.from(".main-content-center",{
    opacity:0,
    y:55,
    duration:1,
    delay:0.3,
})

gsap.from(".main-content-pic",{
    opacity:0,
    x:55,
    duration:1,
    delay:0.8,
})

gsap.from(".perfect-website h5",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".perfect-website h5",
        scroller:"body",
        start:"top 90%",
    }
})

gsap.from(".perfect-website h1",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".perfect-website h1",
        scroller:"body",
        start:"top 80%",
    }
})

gsap.from(".perfect-website p",{
    opacity:0,
    y:30,
    duration:0.8,
    scrollTrigger:{
        trigger:".perfect-website p",
        scroller:"body",
        start:"top 75%",
    }
})

gsap.from(".Website-Design-Development-part-1",{
    opacity:0,
    y:20,
    duration:0.8,
    stagger:0.,
    scrollTrigger:{
        trigger:".Website-Design-Development-part-1",
        scroller:"body",
        start:"top 70%",
    }
})

gsap.from(".Website-Design-Development-part-2",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Website-Design-Development-part-2",
        scroller:"body",
        start:"top 45%",
    }
})

gsap.from(".Website-Design-Development-part-3",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Website-Design-Development-part-3",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from(".Website-Design-Development-part-4",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Website-Design-Development-part-4",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".Why-BrandCurb-part-1",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Why-BrandCurb-part-1",
        scroller:"body",
        start:"top 40%",
    }
})

gsap.from(".Why-BrandCurb-part-2",{
    opacity:0,
    x:-25,
    duration:0.8,
    scrollTrigger:{
        trigger:".Why-BrandCurb-part-2",
        scroller:"body",
        start:"top 62%",
    }
})

gsap.from(".Our-Website-and-Development-Projects h5",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Our-Website-and-Development-Projects h5",
        scroller:"body",
        start:"top 85%",
    }
})

gsap.from(".Our-Website-and-Development-Projects h1",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Our-Website-and-Development-Projects h1",
        scroller:"body",
        start:"top 70%",
    }
})

gsap.from(".Our-Website-and-Development-Projects p",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".Our-Website-and-Development-Projects p",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from(".SMES-Web-Design-content",{
    opacity:0,
    y:20,
    duration:0.8,
    scrollTrigger:{
        trigger:".SMES-Web-Design-content",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from(".SMES-Web-Design-Sider",{
    opacity:0,
    x:35,
    duration:0.8,
    scrollTrigger:{
        trigger:".SMES-Web-Design-Sider",
        scroller:"body",
        start:"top 40%",
    }
})

gsap.from(".Help-Your-Business",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".Help-Your-Business",
        scroller:"body",
        start:"top 65%",
    }
})

gsap.from(".footer-header",{
    opacity:0,
    x:-15,
    duration:0.5,
    scrollTrigger:{
        trigger:".footer-header",
        scroller:"body",
        start:"top 80%",
    }
})

}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}

function sideBar(){
    let openMenubar = document.querySelector(".ri-menu-line")
    let crossMenubar = document.querySelector(".ri-close-large-line")
      
    let tl = gsap.timeline()
      
    tl.to(".navbar-center",{
          left:0,
          duration:0.5,
    })
    
    tl.pause()
    
    openMenubar.addEventListener("click",function(){
      tl.play()
    })
    crossMenubar.addEventListener("click",function(){
      tl.reverse()
    })
}

function sticky_navbar(){

    let navbar = document.querySelector(".navbar");
    let scrollTop = document.querySelector("scrollTop");
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        
        let currentScroll = window.pageYOffset || scrollTop
         
          if (currentScroll < lastScrollTop) {
              navbar.style.top = "30px";
          } else {
              navbar.style.top = "-110px";
          }
          lastScrollTop = currentScroll;
    });

}

scrollTrigger();
swiper();
sideBar();
sticky_navbar();
