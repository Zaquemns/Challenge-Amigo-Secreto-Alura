let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
    atualizarBotaoAdicionar();
}

function atualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

    amigos.splice(indiceAleatorio, 1);
    amigosSorteados.push(amigoSorteado);

    atualizarListaAmigos();

    if (amigos.length === 0) {
        alert('Todos os amigos foram sorteados!');
    }
}

function atualizarBotaoAdicionar() {
    const input = document.getElementById('amigo');
    const botaoAdicionar = document.querySelector('.button-add');

    if (input.value.trim() !== '') {
        botaoAdicionar.classList.remove('disabled');
        botaoAdicionar.disabled = false;
    } else {
        botaoAdicionar.classList.add('disabled');
        botaoAdicionar.disabled = true;
    }
}

document.getElementById('amigo').addEventListener('input', atualizarBotaoAdicionar);
