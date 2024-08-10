function smoothScrolling(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf);
}


function randomImage(){
    const arr=[ "https://www.datocms-assets.com/106915/1717687178-betteroffstudio_work-loop_10.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
        "https://www.datocms-assets.com/106915/1717687414-betteroffstudio_work-loop_18-1.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
        "https://www.datocms-assets.com/106915/1717687460-betteroffstudio_work-loop_26.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
        "https://www.datocms-assets.com/106915/1717687440-betteroffstudio_work-loop_22.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
        "https://www.datocms-assets.com/106915/1717687454-betteroffstudio_work-loop_25.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
        "https://www.datocms-assets.com/106915/1717687450-betteroffstudio_work-loop_24.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
        "https://www.datocms-assets.com/106915/1717687471-betteroffstudio_work-loop_29.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    ];
    let randomNumber=Math.floor(Math.random() * arr.length);

    let image=document.querySelector(".text img");

    image.setAttribute("src",arr[randomNumber]);
}


function loaderAnimation(){
    let growth=document.querySelector(".growth");
    let percent=document.querySelector(".loadingTime h3");
    let grow=0;
    let loadingInterval=setInterval(() => {
        grow++;
        percent.innerHTML=grow + "%";
        growth.style.width=grow + "%"
    }, 40);
    setTimeout(() => {
        clearInterval(loadingInterval);

        gsap.to(".loader",{
            y:"-100%",
            duration:0.6,
            delay:0.4,
        });
    }, 4040);
}

function marqueScrolling(){
    gsap.to(".marque",{
        scale:1.3,
        marginTop:"10%",
        scrollTrigger:{
            trigger:".marque",
            scroller:"body",
            scrub:2,
            start:"top 40%",
           end:"top 20%"
        }
    })
}

function page2Scrolling(){

    gsap.from(".page2-content1 p",{
        y:100,
        opacity:0,
        stagger:0.2,
        rotate:2,
        scrollTrigger:{
            trigger:".page2-content1 p",
            scroller:"body",
            start:"top 80%"
        }
    })

gsap.from(".page2-content2 p",{
    y:100,
    opacity:0,
    stagger:0.2,
    rotate:3,
    scrollTrigger:{
        trigger:".page2-content2 p",
        scroller:"body",
        start:"top 80%"
    }
})
}
function page3Animation() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top -13%",
        end: "top -80%",
        scrub: 1,
        pin:true,
      },
    });
  
    tl.to(".page3-heading", {
      gap: "500px",
      duration: 0.6,
    });
    tl.to(".page3-video", {
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".page3-video", {
      scale: 3,
      top: "45%",
      left: "35%",
      duration: 1,
    });
  }

  function cursorAnimation(){
    let body=document.querySelector("body");
    let videoDiv=document.querySelector(".page3-video");
    let cursor=document.querySelector(".cursor");
  

    body.addEventListener("mousemove",(dets)=>{
        gsap.to(".cursor",{
            left:dets.x ,
            top:dets.y,
        })
    })

    videoDiv.addEventListener("mouseenter",(dets)=>{
        gsap.to(".cursor",{
            opacity:1
        });
    });

    videoDiv.addEventListener("mouseleave",(dets)=>{
        gsap.to(".cursor",{
            opacity:0,
        });
    });

  }

smoothScrolling();
page3Animation();  
cursorAnimation();
loaderAnimation();
randomImage();
marqueScrolling();
page2Scrolling();