const tabuleiro = document.getElementById("tabuleiro");

// Criar o tabuleiro
for (let i = 0; i < 64; i++) {
    const casa = document.createElement("div");
    casa.classList.add("casa");
    if ((Math.floor(i / 8) + i) % 2 === 0) {
        casa.classList.add("branca");
    } else {
        casa.classList.add("preta");
    }
    tabuleiro.appendChild(casa);
}

// Colocar as peças no tabuleiro
const inicial = [
    // Peças brancas
    ["torre", "cavalo", "bispo", "rainha", "rei", "bispo", "cavalo", "torre"],
    Array(8).fill("peão"), // Peões brancos
    // Peças pretas
    Array(8).fill("peão"), // Peões pretos
    ["torre", "cavalo", "bispo", "rainha", "rei", "bispo", "cavalo", "torre"]
];

const pecas = [];

function adicionarPeca(tipo, cor, posicao) {
    const casa = tabuleiro.children[posicao];
    const peca = document.createElement("div");
    peca.classList.add("peça", cor, `${tipo}-${cor}`);
    casa.appendChild(peca);
    pecas.push({ tipo, cor, posicao, peca });
}

// Adicionando peças brancas
inicial[0].forEach((peca, i) => adicionarPeca(peca, "branca", i));
inicial[1].forEach((peca, i) => adicionarPeca(peca, "branca", 8 + i));

// Adicionando peças pretas
inicial[2].forEach((peca, i) => adicionarPeca(peca, "preta", 48 + i));
inicial[3].forEach((peca, i) => adicionarPeca(peca, "preta", 56 + i));

// Exemplo de Movimentos
function moverPeca(peca, novaPosicao) {
    const casaNova = tabuleiro.children[novaPosicao];
    casaNova.appendChild(peca);
}

