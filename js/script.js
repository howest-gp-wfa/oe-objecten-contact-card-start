"use strict";

window.addEventListener("load", initialize);

let hdgUsername, ancEmail, anchTelephone, parAddress;

let user;

function initialize() {
    hdgUsername = document.querySelector("#name");
    ancEmail = document.querySelector("#email");
    anchTelephone = document.querySelector("#telephone");
    parAddress = document.querySelector("#address");

    //create your own user object here ...

    loadCard();

}

function loadCard() {
    //assign your user object's info to the HTML elements here ...
}