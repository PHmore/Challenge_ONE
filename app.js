//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaamigos = [];
let nomeAmigo = "";

function limparCampo(campoID) {
    
    let campo = document.getElementById(campoID);
    campo.value = '';
    campo.innerHTML = '';
}

function inserirCampo(campoID,campoTexto) {
    campo = document.getElementById(campoID);
    campo.innerHTML = campoTexto;
}

function adicionarAmigo() {
    
    let amigo = document.getElementById('amigo').value;
    console.log(`Amigo pego ${amigo}`);
    listaamigos.push(amigo);
    console.log(`Amigos: ${listaamigos} tamanho: ${listaamigos.length}`);
    
    nomeAmigo = nomeAmigo + `<li>${amigo}</li>`;
    
    // for (let index = 0; index < listaamigos.length; index++) {
    //     nomeAmigo = nomeAmigo + `<li>${listaamigos[index]}</li>`;    
    // }

    // listahtml = document.getElementById('listaAmigos');
    // listahtml.innerHTML = nomeAmigo;

    inserirCampo('listaAmigos',nomeAmigo);
    limparCampo('amigo');
    limparCampo('resultado');
    
}

function gerarNumeroAleat(numeroLimite = listaamigos.length) {
    let numeroAleat = parseInt(Math.random() * numeroLimite);
    console.log(`Número sorteado: ${numeroAleat}`);
    
    return numeroAleat

}

function sortearAmigo() {
    numeroAleat = gerarNumeroAleat();
    amigoSorteado = listaamigos[numeroAleat];
    console.log(`amigo sorteado: ${amigoSorteado}`);
    
    listaamigos = [];
    nomeAmigo = "";
    limparCampo('listaAmigos');

    if(amigoSorteado == undefined){
        console.log('Não há amigos na lista');
        textoResultado = "Não há amigos na lista";
    } else {
        textoResultado = `Amigo sorteado: ${amigoSorteado}`;
    }

    inserirCampo('resultado',textoResultado);
}

