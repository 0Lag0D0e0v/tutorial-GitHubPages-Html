// mensagem de boas vindas do Heading

const title = document.querySelector("h1");
title.textContent = "Welcome to my page";

// troca de imagens
let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "image/html5.jpg"){
        myImage.setAttribute("src", "image/html52.jpeg");
    }else{
        myImage.setAttribute("src", "image/html5.jpg")
    };
};

// mensagem de boas vindas personalizada
let Button = document.querySelector("button");
let Heading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Por favor, digite seu nome: ");
    localStorage.setItem("name", myName);
    Heading.textContent ='Seja muito bem vindo(a), ${myName}';
}
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    Heading.textContent = 'Seja muito bem vindo(a), ${storedName}';
}
Button.onclick = () =>{
    setUserName();
}