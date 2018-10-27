var container = document.getElementById("container");

//Header
var header = document.createElement("p");
header.setAttribute("class", "header");
header.innerText = "Deze site is gemaakt zonder HTML te gebruiken!";
container.appendChild(header);

//Header Container
var h_container = document.createElement("div");
h_container.setAttribute("class", "h_container");
container.appendChild(h_container);
h_container.appendChild(header);

//Menu
var menu = document.createElement("div");
menu.setAttribute("class", "menu");
container.appendChild(menu);

//MenuOptions
var menuOptions = document.createElement("div");
menuOptions.setAttribute("class", "menuOptions");
menu.appendChild(menuOptions);


//Dit moet efficienter kunnen
var option_1 = document.createElement("div");
option_1.setAttribute("class", "options")
menuOptions.appendChild(option_1);


var option_2 = document.createElement("div");
option_2.setAttribute("class", "options")
menuOptions.appendChild(option_2);

var option_3 = document.createElement("div");
option_3.setAttribute("class", "options")
menuOptions.appendChild(option_3);

var option_4 = document.createElement("div");
option_4.setAttribute("class", "options")
menuOptions.appendChild(option_4);

var option_5 = document.createElement("div");
option_5.setAttribute("class", "options")
menuOptions.appendChild(option_5);

var option_6 = document.createElement("div");
option_6.setAttribute("class", "options")
menuOptions.appendChild(option_6);

var option_7 = document.createElement("div");
option_7.setAttribute("class", "options")
menuOptions.appendChild(option_7);

var option_8 = document.createElement("div");
option_8.setAttribute("class", "options")
menuOptions.appendChild(option_8);

var option_9 = document.createElement("div");
option_9.setAttribute("class", "options")
menuOptions.appendChild(option_9);

var option_10 = document.createElement("div");
option_10.setAttribute("class", "options")
menuOptions.appendChild(option_10);

var option_11 = document.createElement("div");
option_11.setAttribute("class", "options")
menuOptions.appendChild(option_11);

var option_12 = document.createElement("div");
option_12.setAttribute("class", "options")
menuOptions.appendChild(option_12);

//InnerText
var text1 = document.createElement("p");
text1.setAttribute("class", "text");
option_1.appendChild(text1);
text1.innerHTML = "Random";

//Images
linkRandom = document.createElement("a");
