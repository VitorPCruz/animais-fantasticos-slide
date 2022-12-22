import { Slide, SlideNav } from './slide.js';

const SLIDE = new SlideNav('.slide', '.slide-wrapper');
SLIDE.init();
SLIDE.addArrow('.prev', '.next');
SLIDE.addControl('.custom-controls');