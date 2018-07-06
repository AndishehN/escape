import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import SlideInOnScroll from './modules/SlideInOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".team"), "60%");
var stickyHeader = new StickyHeader();
new SlideInOnScroll ($(".testimonial"), "80%");
new SlideInOnScroll ($(".intro__image"), "80%");
