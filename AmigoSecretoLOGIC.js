
let listaAmigos = [];
//console.log("hola consola");

function agregarAmigo(){
    
    let nombre = document.getElementById("amigo").value;
    nombre = nombre.toUpperCase();

    if(nombre==""){
        alert("Coloca un nombre");
    }else{
    console.log(`este es el nombre: ${nombre}`);
    listaAmigos.push(nombre);
    console.log(listaAmigos);
    }
}

function sortearAmigo(){
    let randomNumber = Math.floor(Math.random()*listaAmigos.length+1)
    let amigoSecreto = listaAmigos[randomNumber];
    alert(`Tu amigo secreto es ${amigoSecreto}`);
}