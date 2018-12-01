import Typed from 'typed.js';

const loadDynamicBannerText = function () {
  new Typed('#js-typed-text',{
    strings: ['ruby', 'react', 'elixir', 'python', 'swift'],
    typeSpeed: 100,
    loop: true
   });
  }

  export { loadDynamicBannerText };
