const splash = document.querySelector('.splash')
const bttn = document.querySelector('.bttn')



bttn.addEventListener('click', (e)=>{
    console.log('clicked')
    // splash.remove()
    // splash.classList.add('display-none')
    // splash.classList.add('.visuallyhidden')
    splash.classList.remove('splash');
    splash.classList.add('box-transition');
	splash.classList.add('box-hidden');
} )





