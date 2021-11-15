import "./index.css";
import FED from './assets/images.png';

console.log("Hello World!");

const title = document.createElement('h1');
title.innerText = "I love JavaScript";
const imgHTML = document.createElement('img');
imgHTML.src = FED;

document.body.append(title, imgHTML); 