import Slide from './slide.js';

const SLIDE = new Slide('.slide', '.slide-wrapper');
SLIDE.init();

SLIDE.changeSlide(0); 
SLIDE.activeNextSlide();