import './application.css';
import 'bootstrap';
import {loadDynamicBannerText} from '../components/banner';
import {initUpdateNavbarOnScroll} from '../components/navbar';
import {autoCompleteJs} from '../components/autocomplete';
import {toggleIconsdeveloper} from '../components/bookmarking';

initUpdateNavbarOnScroll();

const homePage = document.querySelector('.pages.home');
if (homePage) {
  autoCompleteJs();
  loadDynamicBannerText();
  toggleIconsdeveloper();
}


