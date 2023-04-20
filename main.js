new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 5,

});

// import {request, renderMovies} from './movie.js'

// const inputEl = document.querySelector('input')
// const ulEl = document.querySelector('.movies')

// let inputText = ''
// inputEl.addEventListener('input', function () {
//   inputText = inputEl.value
// })
// inputEl.addEventListener('keydown', async function (event) {
//   if (event.key === 'Enter') {
//     const movies = await request(inputText)
//     renderMovies(ulEl, movies)
//   }
// })

