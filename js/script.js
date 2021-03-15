"use strict";

window.addEventListener("load", Initialize);

var username, email, telephone, address;

var user;

function Initialize() {
    username = document.querySelector("#name");
    email = document.querySelector("#email");
    telephone = document.querySelector("#telephone");
    address = document.querySelector("#address");

    //create your own user object here ...

    LoadCard();

}

function LoadCard() {
    //assign your user object's info to the HTML elements here ...
}