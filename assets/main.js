// Video
let play = document.getElementById('btn-play')
let video =  document.getElementById('video-bg')
let sectionFirst = document.querySelector('section.first');
let btnCloseVideo = document.getElementById('close-video')

play.addEventListener('click', () => {


    sectionFirst.classList.add('video-active')
    btnCloseVideo.classList.add('active')
    
   setTimeout(() => {
    video.classList.add('active')
        video.play()
    },600)

})

btnCloseVideo.addEventListener('click', () => {
    video.currentTime = 0;
    video.pause()
    video.classList.remove('active')
   btnCloseVideo.classList.remove('active')
   setTimeout(() => {
   
    sectionFirst.classList.remove('video-active')
 

    },600)

})


// Fade on scroll
let feautures = document.querySelector('.third .feautures');
let secondLeftWrap = document.querySelector('.second .left-wrap')
let fourthRightWrap = document.querySelector('.fourth .wrap .right')

let browserImg = document.querySelector('.sixth .browser')

let elementsForScroll = [feautures, secondLeftWrap,fourthRightWrap,browserImg]


elementsForScroll.forEach((element) => {
    element.style.cssText = 
        'transform: translateY(50px); transition: 0.5s all; opacity: 0;'
})

window.addEventListener('scroll', () => {

    elementsForScroll.forEach((element) => {

        let elementTop = element.getBoundingClientRect().top

        if(elementTop < window.innerHeight / 1.5 ) {
            element.classList.add('fade-in')
        }
        
    })

    // To up
    let btnUp = document.getElementById('btn-up');

    if(document.documentElement.scrollTop > document.documentElement.scrollHeight / 3){
            btnUp.classList.add('active')

            btnUp.addEventListener('click', () => {
                document.documentElement.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                })
            })
    } else {
        btnUp.classList.remove('active')
    }

})

// Button try
let firstSection = document.querySelector('.first .wrap')
let secondSection = document.querySelector('.second .wrap')

firstSection.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('btn-try')){
        secondSection.scrollIntoView({
            block: "start", 
            behavior: "smooth"})
    }
})

// Feedback slider

let nextBtn = document.getElementById('nextFeedback');
let prevBtn = document.getElementById('prevFeedback');
let feedbacks = document.querySelectorAll('.fifth .feedback');
let parentFeedbacks = document.querySelectorAll('.fifth .feedbacks')[0];

nextBtn.addEventListener('click', () => {
    let del = parentFeedbacks.querySelectorAll('.feedback')[0]
    
    parentFeedbacks.removeChild(del)
    parentFeedbacks.insertAdjacentElement('beforeend', del)

    parentFeedbacks.querySelectorAll('.feedback')[0].style.cssText = 'transform: scale(1.1); opacity: 0'

    setTimeout(() => {
        parentFeedbacks.querySelectorAll('.feedback')[0].style.cssText = 'transform: scale(1); opacity: 1'
    },300)

    
})

prevBtn.addEventListener('click', () => {
    let del = parentFeedbacks.querySelectorAll('.feedback')[2]

    parentFeedbacks.removeChild(del)
    parentFeedbacks.insertAdjacentElement('afterbegin', del)

    parentFeedbacks.querySelectorAll('.feedback')[0].style.cssText = ' transform: scale(1.1);  opacity: 0;'

    setTimeout(() => {
        parentFeedbacks.querySelectorAll('.feedback')[0].style.cssText = ' transform: scale(1);  opacity: 1;'
    },300)

})

// Feedback form

let btnSubmit = document.getElementById('submit-form')
let modalThanks = document.querySelector('.modal-thanks')
let nameInput = document.getElementById('name-feedback')
let name = null

btnSubmit.addEventListener('click', (event) => {


    event.preventDefault()
    
    name = nameInput.value

    name === ''  ? name = 'YOUR NAME' : name = nameInput.value
    
    modalThanks.innerHTML = `Thanks <span id="span-name" style="color:#f5696a; text-transform:uppercase">${name}</span>, for feedback!`

    modalThanks.classList.add('active')

    setTimeout(() => {
        modalThanks.classList.remove('active')
    },1500)


})

