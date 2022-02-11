const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {

    console.log('loaded')
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 10000);


})


// with bttn option 
// const bttn = document.querySelector('.bttn')

// bttn.addEventListener('clicl', (e) => {

//     splash.classList.remove('splash');
//     splash.classList.add('box-transition');
//     splash.classList.add('box-hidden');


// })
