var color = window.location.href.split("#")[1];
var background;
var titleColor;
switch (color) {
  case "r":
    // red
    background = "./images/red.png";
    titleColor = "#e82b1f";
    break;
  case "g":
    // green
    background = "./images/green.png";
    titleColor = "#49ac36";
    break;
  case "y":
    // yellow
    background = "./images/yellow.png";
    titleColor = "#f8ae28";
    break;
  default:
    // blue
    background = "./images/blue.png";
    titleColor = "#1c64b4";
    break;
}

// add background to style
const el = document.querySelector("body");
el.style.backgroundImage = `url(${background})`;

// change color of title
var title = document.getElementsByClassName("title");
title[0].style.color = titleColor;
