
let listaAmigos = [];
let listaNumerosSorteados = [];
let amigoSecreto = "";

function agregarAmigo(){
    
    let nombre = document.getElementById("amigo").value;
    nombre = nombre.toUpperCase();

    if(nombre==""){
        alert("Coloca un nombre");
    }else{
        if(listaAmigos.includes(nombre)){
            return agregarAmigo();
        }else{
            listaAmigos.push(nombre);
            document.getElementById("amigo").value = "";
            /*let newParagraph = document.createElement('p');
            newParagraph.textContent = `${nombre}`;*/
            addItemToList(nombre);
            console.log(listaAmigos);
        }
    }
}

function sortearAmigo(){
    let randomNumber = Math.floor(Math.random()*listaAmigos.length)
    //console.log(`listaAmigos = ${listaAmigos.length} elementos`);
    
    if(listaNumerosSorteados.length == listaAmigos.length){
        //asignarTextoElemento('p','¡Ya se terminaron los NOMBRES!')
        inicializar();
        alert("Se terminaron los nombres");
    } else {
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(randomNumber)){
            return sortearAmigo();
        }else{//si no esta en la lista, agregarlo
            listaNumerosSorteados.push(randomNumber);
            amigoSecreto = listaAmigos[randomNumber];
            textoElemento("miH2",`Tu amigo secreto es ${amigoSecreto}`);
            return randomNumber;
        }
    }
}

function textoElemento(id, texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return elementoHTML;
}

function inicializar(){
    textoElemento("miH2",`Digite el nombre de sus amigos`);
    listaAmigos = [];
    listaNumerosSorteados = [];
    amigoSecreto = "";
    removeItem();
}

function addItemToList(name) {
    let list = document.getElementById('listaAmigos');
    let newItem = document.createElement('li');
    newItem.textContent = name;
    list.appendChild(newItem);
}

function removeItem(){
    document.getElementById('listaAmigos').innerHTML = '';
}