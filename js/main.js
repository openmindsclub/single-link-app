var color = window.location.href.split("#")[1];
var background;
var titleColor;
var tableColor;
var listItemColor;
switch (color) {
  case "r":
    // red
    background = "./images/red.png";
    titleColor = "#ed333bff";
    tableColor = "rgb(0, 0, 0, 0.4)";
    listItemColor = "#fff";
    break;
  case "g":
    // green
    background = "./images/green.png";
    titleColor = "#33d17aff";
    tableColor = "rgb(255, 255, 255, 0.4)";
    listItemColor = "#000";
    break;
  case "y":
    // yellow
    background = "./images/yellow.png";
    titleColor = "#f5c211ff";
    tableColor = "rgb(255, 255, 255, 0.4)";
    listItemColor = "#000";
    break;
  default:
    // blue
    background = "./images/blue.png";
    titleColor = "#3584e4ff";
    tableColor = "rgb(0, 0, 0, 0.4)";
    listItemColor = "#fff;";
    break;
}

// add background to style
const el = document.querySelector("body");
el.style.backgroundImage = `url(${background})`;

// change color of title
var title = document.getElementsByClassName("title");
title[0].style.color = titleColor;

// change background color of table
var table = document.getElementsByClassName("table");
table[0].style.backgroundColor = tableColor;
table[0].style.color = listItemColor;
