let menu=document.querySelector(".menu-icon")
let navbar=document.querySelector(".navbar")
menu.onclick=()=>{
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu")
};


window.onscroll=()=>{
    menu.classList.remove("move")
    navbar.classList.remove("open-menu")
};

//Review Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
//Email js
function validate(){
    let name=document.querySelector('.name')
    let email=document.querySelector('.email')
    let msg=document.querySelector('.message')
    let sendBtn=document.querySelector('.send-btn')

    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(name.value==""||email.value==""||msg.value==""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    });

}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_vqe0g08","template_q47u0g8",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh Noo!!",
        text: "Fields cannot be empty !!",
        icon: "error",
        
      });
}

function success(){
    swal({
        title: "Email Sent successfully",
        text: "I will be in touch in 24 hrs",
        icon: "success",
        
      });
}

//header background change on scroll
let header=document.querySelector('header')

window.addEventListener('scroll',()=>{
    header.classList.toggle('header-active',window.scrollY>0)    
})

//scroll top
let scrollTop=document.querySelector('.scroll-top')

window.addEventListener('scroll',()=>{
    scrollTop.classList.toggle('scroll-active',window.scrollY>=400)    
})