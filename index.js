class heroi {
  constructor(nome, idade, tipo, ataque = null) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque; 
  }

  atacar() {
    const tipoNorm = (this.tipo || '').toLowerCase();
    let ataqueDescricao;
    switch (tipoNorm) {
      case 'mago':
        ataqueDescricao = 'magia';
        break;
      case 'guerreiro':
        ataqueDescricao = 'espada';
        break;
      case 'monge':
        ataqueDescricao = 'artes marciais';
        break;
      case 'ninja':
        ataqueDescricao = 'shuriken';
        break;
      default:
        ataqueDescricao = 'um ataque';
    }
    const usado = this.ataque ? this.ataque : ataqueDescricao;
    const mensagem = `o ${this.tipo} atacou usando ${usado}`;
    console.log(mensagem);
    return mensagem;
  }
}
let resultado = new heroi(
  "carlos",
  25,
  "mago",
  "Com fonte do meu poder eu ordeno a ti, decifre as leis da natureza e libere uma bola de fogo, Esfera Ígnea."
);
resultado.atacar();
let guerreiro = new heroi("Átila", 30, "guerreiro");
guerreiro.atacar(); 

let monge = new heroi("Li", 40, "monge");
monge.atacar(); 

let ninja = new heroi("Sombra", 22, "ninja");
ninja.atacar(); 

// 3) Tipo desconhecido — fallback
let desconhecido = new heroi("X", 99, "arqueiro");
desconhecido.atacar(); 
