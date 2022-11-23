"use strict";

var content = document.getElementById("content"),
rotatum = document.getElementById("rotatum"),
bio = document.getElementById("Bio"),
contacts = document.getElementById("Contacts"),
experience = document.getElementById("Experience");

const displayerSetter = (el, display) => {
    return el.style.display = display;
}

const displayer = (el) => {
    return el.style.display;
}

document.getElementById("home").addEventListener("click", function(){
    displayerSetter(content, "none") ;
    displayerSetter(rotatum, "none");
    
    displayerSetter(bio, "none");
    displayerSetter(contacts, "none");
    displayerSetter(experience, "none");
}, false)

document.getElementById("bio").addEventListener("click", function(){
    if(displayer(bio) === "none"){
        displayerSetter(content, "grid");
        displayerSetter(rotatum, "block");
        displayerSetter(bio, "block");
    }
    else{
        displayerSetter(content, "none");
        displayerSetter(rotatum, "none");
        displayerSetter(bio, "none");
    }

    displayerSetter(contacts, "none");
    displayerSetter(experience, "none");
}, false)

document.getElementById("contacts").addEventListener("click", function(){
    if(displayer(contacts) === "none"){
        displayerSetter(content, "grid");
        displayerSetter(rotatum, "block");
        displayerSetter(contacts, "flex");
    }
    else{
        displayerSetter(content, "none");
        displayerSetter(rotatum, "none");
        displayerSetter(contacts, "none");
    }
    
    displayerSetter(bio, "none");
    displayerSetter(experience, "none");
}, false)

document.getElementById("experience").addEventListener("click", function(){
    if(displayer(experience) === "none"){
        displayerSetter(content, "grid");
        displayerSetter(rotatum, "block");
        displayerSetter(experience, "block");
    }
    else{
        displayerSetter(content, "none");
        displayerSetter(rotatum, "none");
        displayerSetter(experience, "none");
    }
    
    displayerSetter(contacts, "none");
    displayerSetter(bio, "none");
}, false)