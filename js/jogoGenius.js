
let ordem = [];
let ordemCliques = [];
let pontos = 0;
const azul = window.document.querySelector(".azul");
const amarela = window.document.querySelector(".amarela");
const verde = window.document.querySelector(".verde");
const vermelha = window.document.querySelector(".vermelha");
let placar = window.document.querySelector("#placar");
placar.innerHTML = "pontos = " + pontos;

let somAmarelo = window.document.querySelector("#somAmarelo");
let somAzul = window.document.querySelector("#somAzul");
let somVerde = window.document.querySelector("#somVerde");
let somVermelho = window.document.querySelector("#somVermelho");
let somPerdeu = window.document.querySelector("#somPerdeu");

let ordemSorteio = () => {
    let ordemCores = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCores;
    ordemCliques = [];
    for(let i in ordem){
        let elementoCor = criarElementoCor(ordem[i]);
        luzDeCor(elementoCor, Number(i) + 1);
    }
}

let luzDeCor = (elemento, numero) => {
    numero *= 700;
    setTimeout(() => {
        elemento.classList.add("selecionada");
        
        if(elemento == azul){somAzul.play();}
        else if(elemento == amarela){somAmarelo.play();}
        else if(elemento == verde){somVerde.play();}
        else if(elemento == vermelha){somVermelho.play();}
        
        setTimeout(() => {
            elemento.classList.remove("selecionada");
        }, 250);
    }, numero);
}

 let criarElementoCor = (cor) =>{
        if(cor == 0){return azul;}
        else if(cor == 1){return amarela;}
        else if(cor == 2){return verde;}
        else if(cor == 3){return vermelha;}
    }

let checarOrdem = () => {
    for(let i in ordemCliques){
        if(ordemCliques[i] != ordem[i]){
            perdeu();
            break;
        }
    }
 
    if(ordemCliques.length == ordem.length){
        pontos++;
        window.alert(`Pontuação: ${pontos}\nVocê acertou!\nIniciando próximo nível.`);
        placar.innerHTML = "pontos = " + pontos;
        proximoNivel();
    }
}

let clique = (cor) => {
    ordemCliques[ordemCliques.length] = cor;
    criarElementoCor(cor).classList.add("selecionada");
    if(criarElementoCor(cor) == azul){somAzul.play();}
        else if(criarElementoCor(cor) == amarela){somAmarelo.play();}
        else if(criarElementoCor(cor) == verde){somVerde.play();}
        else if(criarElementoCor(cor) == vermelha){somVermelho.play();}
    
        setTimeout(() => {
        criarElementoCor(cor).classList.remove("selecionada");
        checarOrdem();
    });
}

    let proximoNivel = () =>{
        console.log("A largura da ordem é: " + ordem.length);
        ordemSorteio();
    }
    let perdeu = () => {
        somPerdeu.play();
        window.alert(`Você perdeu o jogo!\nSua pontuação foi: ${pontos}\nClique em ok para recomeçar o jogo`);
        ordem = [];
        comecarJogo();
    }

    let comecarJogo = () =>{
        const esconder = window.document.querySelector("#inicial");
        esconder.hidden = true;
        window.alert(`Bem vindo ao Gênesis!\nIniciando novo jogo`);
        pontos = 0;
        placar.innerHTML = "pontos = " + pontos;
        ordemSorteio();
    }

    azul.onclick = () => clique(0);
    amarela.onclick = () => clique(1);
    verde.onclick = () => clique(2);
    vermelha.onclick = () => clique(3);
