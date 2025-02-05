
let listaAmigos = [];
let listaNumerosSorteados = [];
let amigoSecreto = "";

inicializar();


function agregarAmigo(){//funcion para agregar nombre a la lista al dar clic en boton 'Añadir'
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
            AgregarElementoLista(nombre);
            //console.log(listaAmigos);
        }
    }
}


function sortearAmigo(){//Funcion entrega el nombre de amigo secreto de forma aleatoria cada que dan clic en boton 'sortear amigo'
    let randomNumber = Math.floor(Math.random()*listaAmigos.length)//genera numero secreto para index de arreglo de nombres
    
    if(listaNumerosSorteados.length == listaAmigos.length){//si el arreglo de nombres entregados y el de nombres enlistados es igual en tamaño
        inicializar();
        alert("Se terminaron los nombres");
    } else {
        if(listaNumerosSorteados.includes(randomNumber)){//si el numero generado esta incluido ya esta en la lista de los sorteados
            return sortearAmigo();//reinicia la funcion para generar un nuevo index aleatorio
        }else{//si no esta en la lista de index sorteados, lo agrega y presenta el nombre en el index en el H2
            listaNumerosSorteados.push(randomNumber);
            amigoSecreto = listaAmigos[randomNumber];
            textoElemento("miH2",`Tu amigo secreto es ${amigoSecreto}`);
            return randomNumber;
        }
    }
}


function textoElemento(id, texto){//funcion para asignar texto a un elemento direccionado con ID
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return elementoHTML;
}


function inicializar(){//inicializa arreglos y parametros para volver a iniciar nueva lista de amigos
    textoElemento("miH2",`Digita el nombre de tus amigos`);
    listaAmigos = [];
    listaNumerosSorteados = [];
    amigoSecreto = "";
    LimpiarLista('lista');
}


function AgregarElementoLista(name) {//
    let list = document.getElementById('lista');
    let newItem = document.createElement('li');
    newItem.textContent = name;
    list.appendChild(newItem);
}


function LimpiarLista(list){
    document.getElementById(list).innerHTML = '';
}