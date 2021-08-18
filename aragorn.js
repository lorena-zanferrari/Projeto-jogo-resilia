function aragornStory1() {
    alert("Você está andando numa estrada e ouve um barulho de cavalo");
    alert("Mas você sabe que no Condado nao existem cavalos, o que você faz?");
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Continua caminhando pela estrada \nOpção 2: se esconde");
        invalidChoice = false;
        if (choice === '1') {
            alert("Na verdade os cavalos eram dos espectros e eles te encontraram")
            alert("Game over!")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("Eram espectros e você conseguiu escapar deles!")
            alert("Parabéns, você saiu do Condado com sucesso!")
            aragornStory2();
        } else {
            alert("Escolha sua opção!!")
            invalidChoice = true;
        }
    }
}

function aragornStory2() {
    alert("Você e Sam estão caminhando quando de repente você dá de cara com o Gollum.");
    alert("Ele se oferece como guia até a Montanha da Perdição.");
    alert("Como você responde?")
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Aceita a ajuda, afinal ele deve conhecer o caminho \nOpção 2: você nega a ajuda e o espanta, urgh!");
        invalidChoice = false;
        if (choice === '1') {
            alert("Parabéns, vocês conseguiram chegar à Orodruir graças ao Gollum!")
            aragornStory3();
        } else if (choice === '2') {
            alert("Vocês se perdem e acabam sendo capturados pelos Orcs")
            alert("Game over!")
            return location = './index.html';
        } else {
            alert("Escolha sua opção!!")
            invalidChoice = true;
        }
    }
}

function aragornStory3() {
    alert("Parabéns, você está agora aos pés da Montanha da Perdição e o anel ainda está seguro com você");
    alert("Agora que você sabe que para destruir o Sauron e restaurar a paz na Terra Média é necessário queimar o anel na Montanha, escolha uma opção!");
    var invalidChoice = true;
    while (invalidChoice) { 
        var choice = prompt("Opção 1: Sobe até a montanha e joga o anel no fogo \nOpção 2: guarda o anel consigo e foge pra longe do Gollum, opção 3: esconde o anel num lugar seguro e finge que perdeu");
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
            alert("Escolha sua opção!!")
            invalidChoice = true;
        }
    }
}
