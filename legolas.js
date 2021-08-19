function legolasStory3() {
    alert("Parabéns, você está agora aos pés da Montanha da Perdição e o anel ainda está seguro com você");
    alert("Agora que você sabe que para destruir o Sauron e restaurar a paz na Terra Média é necessário queimar o anel na Montanha, escolha uma opção!");
    var invalidChoice = true;
    while (invalidChoice) { 
        var choice = prompt("Opção 1: Sobe até a montanha e joga o anel no fogo \nOpção 2: Guarda o anel consigo e foge pra longe do Gollum, opção 3: esconde o anel num lugar seguro e finge que perdeu");
        invalidChoice = false;
        if (choice === '1') {
            alert("Parabéns, vocês destruiu o anel e o Sauron e agora finalmente a paz está de volta Terra Média!")
            alert("Você venceu!")
        } else if (choice === '2') {
            alert("Você foi seduzido pelo anel")
            alert("Game over!")
            return location.href = './index.html';
        } else if (choice === '3') {
            alert("Gollum viu onde você escondeu o anel e o pega.")
            alert("Gollum foge e você morre ao tentar detê-lo.")
            alert("Game over!")
            return location.href = './index.html';
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}

function legolasStory2() {
    alert("Você e Sam estão caminhando quando de repente você dá de cara com o Gollum.");
    alert("Ele se oferece como guia até a Montanha da Perdição.");
    alert("Como você responde?")
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Aceita a ajuda, afinal ele deve conhecer o caminho \nOpção 2: Nega a ajuda e o espanta, urgh!");
        invalidChoice = false;
        if (choice === '1') {
            alert("Parabéns, vocês conseguiram chegar à Orodruir graças ao Gollum!")
            aragornStory3();
        } else if (choice === '2') {
            alert("Vocês se perdem e acabam sendo capturados pelos Orcs")
            alert("Game over!")
            return location.href = './index.html';
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}

function legolasStory1() {
    alert("Quando Aragorn decidiu passar pelas Sendas dos Mortos, Gimli voluntariamente se ofereceu para acompanhá-lo, juntamente com a Companhia Cinza.");
    alert("Aragorn te convida para se juntar a eles, o que você faz?");
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Não aceita o convite, afinal não conhece esse tal de Aragorn e você como elfo, não confia em homens. \nOpção 2: Aceita o convite, afinal, os Hobbits precisam de ajuda nessa jornada rumo à destruição do Anel. \nOpção 3: Fica em dúvida, mas aceita ir.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Na verdade você acaba descobrindo depois que Aragorn é o verdadeiro herdeiro e que este precisava de sua ajuda para guiar o exército. Se arrepende amargamente e tenta alcançá-los.")
            alert("No entanto, vc foi visto por uma cavalaria de espectros e acaba sendo atingido por uma espada na cabeça.")
            alert("Game over!")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("Você percebe que Aragorn e Gimli formavam um trio perfeito juntamente com você e com o apoio do exército, por isso, vocês conseguiram vencer a Batalha dos Campos de Pelennor!")
            alert("Parabéns!!")
            aragornStory2();
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}
