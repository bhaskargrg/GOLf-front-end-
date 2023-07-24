var crsr= document.querySelector(".cursor")
var blur=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left =dets.x +"px"
crsr.style.top =dets.y +"px"
blur.style.left=dets.x -200 +"px"
blur.style.top=dets.y -200+"px"
})
gsap.to(".nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -8%",
        end:"top -100%",
        scrub:1,
    }
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
trigger:".main",
scroller:"body",
markers:true,
start:"top -50%",
end:"top -100%",
scrub:2,
    }
})