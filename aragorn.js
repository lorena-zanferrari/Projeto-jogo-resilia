function aragornStory1() {
    alert("Você acabou de descobrir que é o herdeiro de Isildur e pretendente legítimo aos tronos de Arnor e Gondor.");
    alert("Agora com a queda de Gandalf, você tem a missão de liderar a sociedade do Anel. O que você deseja fazer?");
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Se recusa, afinal, acabou de descobrir seu passado e ainda nao se sente pronto pra encarar essa responsabilidade.  \n Opção 2: Aceita a missão e embarca junto aos outros seres em busca de destruição do anel.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Sem sua ajuda, a Terra Média nao poderia enfrentar as forças de Sauron e infelizmente, tudo foi dominado pelas forças trevosas do criador dos aneis.")
            alert("Game over!")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("Parabéns, finalmente agora a sociedade do anel tem uma liderança para guiá-los")
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
