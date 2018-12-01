import { tns } from 'tiny-slider/src/tiny-slider';

const tinyslider = function () {
  var slider = tns({
    container: '#js-projects',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });
}

export { tinyslider };
