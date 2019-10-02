import './lib/jquery.js';
import { Foundation } from 'foundation-sites';

const ready = () => console.log('Hello, BarkleyREI!');

window.addEventListener('DOMContentLoaded', ready, false);

console.log(Foundation);

$(document).foundation();
