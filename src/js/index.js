import 'normalize.css';
import '../scss/styles.scss';

import DancingCirclesComponent from './DancingCirclesComponent';

// get canvas
const canvasEl = document.getElementById('myCanvas');

// start action
new DancingCirclesComponent(canvasEl);
