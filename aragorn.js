function aragornStory3() {
    alert("Você, Legolas e Gimli voltaram para o Abismo de Helm, e foram alcançados por uma companhia dos Dúnedain liderados por Halbarad e acompanhados pelos filhos de Elrond, Elladan e Elrohir.");
    alert("O emissário de Sauron trouxe a camisa de mithril de Frodo e outros objetos, e exigiu que os exércitos se retirassem imediatamente ou Frodo iria ser torturado.Gandalf recusou os termos, e a Batalha do Morannon começou.");
    alert("O que você faz?")
    var invalidChoice = true;
    while (invalidChoice) { 
        var choice = prompt("Opção 1: Foge da Boca de Sauron ao se deparar com o exército gigantesco de Orcs é muito maior que o seu exército. \nOpção 2: Decide comandar suas forças em duas colinas como estratégia para cercar os Orcs. \nOpção 3: Decide designar Legolas como o comandante do exército, pois acredita que Legolas com suas habilidades afloradas, possui capacidade de liderar um exército.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Ao sair da Boca de Sauro, você e seu exército são cercado pelos Orcs, que ao encurralá-los, vocês foram todos dizimados")
            alert("Game Over")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("O Exército do Oeste combateu as forças de Mordor até que o Anel foi destruído e o domínio de Sauron caiu.")
            alert("Quando Frodo e Sam foram resgatados da destruição de Mordor, você cuidou dos ferimentos deles. Nas celebrações no Campo de Cormallen, você ajoelhou-se ante os Hobbits e então os trouxe para sentar em um trono e conclamou o povo reunido em honras e aclamações.")
            alert("Parabéns, você venceu!! A Terra Média finalmente encontrou a paz!")
            return location.href = './index.html';
        } else if (choice === '3') {
            alert("Infelizmente Legolas não conseguiu liderar o exército sem sua ajuda e todos acabam sendo mortos e o anel acabou caindo nas mãos de Sauron. A Terra Média foi dominada pelo mal.")
            alert("Game over!")
            return location.href = './index.html';
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}


function aragornStory2() {
    alert("Você encontrou Boromir morrendo ferido por muitas flechas. Antes de morrer, Boromir disse à você que ele tentara tomar o Anel de Frodo e que um bando de Orcs havia capturado os pequenos.") 
    alert("Você usou suas perícias como Guardião para determinar que Merry e Pippin haviam sido levados pelos Orcs em direção ao oeste.");
    alert("Neste caso, o que você faz?")
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Decide que não poderia abandonar Merry e Pippin ao tormento e a morte e junto de Legolas e Gimli, sai em perseguição aos rastros do exército de orcs. \nOpção 2: Você não acredita em Boromir, pois este nunca foi uma pessoa muito confiável e segue seu caminho. \nOpção 3: Acredita, no entanto, sabe que os Hobbits não são bobos e sabem muito bem se virarem na sua jornada e volta ao acampamento.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Ao seguir os rastros dos Orcs, Gandalf reaparece a você e lhe informa que Merry e Pippin estavam a salvo e que os Três Caçadores agora deviam acompanhá-lo até os salões do Rei Théoden, de Rohan.")
            aragornStory3();
        } else if (choice === '2') {
            alert("Vocês ouvem um barulho de uma cavalaria de espectros, no entanto, nao tiveram tempo de fugir e são alcançados e mortos.")
            alert("Game over!")
            return location = './index.html';
        } else if (choice === '3') {
            alert("Ao chegar no acampamento, se deparam com o Exercito de Orcs, e são praticamente massacrados.")
            alert("Game Over!")
            return location = './index.html';
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}

function aragornStory1() {
    alert("Você acabou de descobrir que é o herdeiro de Isildur e pretendente legítimo aos tronos de Arnor e Gondor.");
    alert("Agora com a queda de Gandalf, você tem a missão de liderar a sociedade do Anel. O que você deseja fazer?");
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Se recusa, afinal, acabou de descobrir seu passado e ainda nao se sente pronto pra encarar essa responsabilidade.  \n Opção 2: Aceita a missão em busca de destruir as forças de Sauron.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Sem sua liderança, a Terra Média nao poderia enfrentar as forças de Sauron e infelizmente, tudo foi dominado pelas forças trevosas do criador dos Aneis .")
            alert("Game over!")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("Parabéns, finalmente agora a sociedade do anel tem uma liderança para guiá-los para a batalha de Gondor.")
            aragornStory2();
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}