//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaamigos = [];
nomeAmigo = "";

function limparCampo() {
    
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}

function adicionarAmigo() {
    
    let amigo = document.getElementById('amigo').value;
    console.log(`Amigo pego ${amigo}`);
    listaamigos.push(amigo);
    console.log(`Amigos: ${listaamigos} tamanho: ${listaamigos.length}`);
    listahtml = document.getElementById('listaAmigos');
    nomeAmigo = nomeAmigo + `<li>${amigo}</li>`;
    
    // for (let index = 0; index < listaamigos.length; index++) {
    //     nomeAmigo = nomeAmigo + `<li>${listaamigos[index]}</li>`;    
    // }
    listahtml.innerHTML = nomeAmigo;
    limparCampo();

    
}

function gerarNumeroAleat(numeroLimite = listaamigos.length) {
    let numeroAleat = parseInt(Math.random() * numeroLimite);
    console.log(`Número sorteado: ${numeroAleat}`);
    
    return numeroAleat

}

function sortearAmigo() {
    // TODO aqui será sorteado o amigo secreto dentre as listas de amigos disponíveis
    numeroAleat = gerarNumeroAleat();
    amigoSorteado = listaamigos[numeroAleat];
    
}

