// vendor libs
import DancingCirclesComponent from './DancingCirclesComponent';

// styles
import 'normalize.css';
import '../scss/styles.scss';

// get canvas
const canvasEl = document.getElementById('myCanvas');

// start action
new DancingCirclesComponent(canvasEl);
