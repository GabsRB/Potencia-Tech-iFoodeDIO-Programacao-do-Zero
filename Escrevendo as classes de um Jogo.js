class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const nomeHeroi = prompt("Digite o nome do Herói:");
const idadeHeroi = prompt("Digite a idade do Herói:");
const tipoHeroi = prompt("Digite o tipo do Herói (mago, guerreiro, monge, ninja):");

const heroDoUsuario = new Hero(nomeHeroi, idadeHeroi, tipoHeroi);

heroDoUsuario.atacar();
