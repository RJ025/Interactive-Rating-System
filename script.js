const maincontainer =  document.querySelector('.main-container')
const thankscontainer = document.querySelector('.thank-you')
const submitbutton = document.getElementById('submit')
const rateagain = document.getElementById('rate-again')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn')

submitbutton.addEventListener('click' , ()=>{
    thankscontainer.classList.remove('hidden')
    maincontainer.style.display = 'none'
})

rateagain.addEventListener('click' , ()=>{
    thankscontainer.classList.add('hidden')
    maincontainer.style.display = 'block'
})

rates.forEach((rate)=>{
    rate.addEventListener('click' , ()=>{
        // console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML
    })
})