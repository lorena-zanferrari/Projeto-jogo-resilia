function legolasStory3() {
    alert("Olá Legolas! Em Edoras, Gandalf convenceu o Rei Théoden a cavalgar contra Saruman. Os Orcs fugiram para a floresta e nunca mais foram vistos.")
    alert("Os Capitães do Oeste decidiram marchar até o Portão Negro e confrontar o Inimigo numa tentativa de distrair Sauron por tempo suficiente para que o Portador do Anel pudesse completar sua missão.")
    alert("O que você decide fazer?");
    var invalidChoice = true;
    while (invalidChoice) { 
        var choice = prompt("Opção 1: Decide ir com eles, tanto como representante dos Elfos da Floresta das Trevas, quanto por amor à Aragorn.  \nOpção 2: Fica profundamente amedontrado e fuge para a floresta.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Parabéns, o Exército do Oeste chegou ao Portão Negro em 25 de Março e combateu as forças de Sauron na Batalha do Morannon até o Um Anel ser destruído e o domínio de Sauron acabar.")
            alert("Você venceu! A Sociedade se reuniu nas celebrações no Campo de Cormallen e você vagou alegremente nas florestas de Ithilien.")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("O exército sucumbiu e todos foram mortos e derrotados pela força de Sauron.")
            alert("Game over!")
            return location.href = './index.html';
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}

function legolasStory2() {
    alert("Os exércitos de Sauron lançam ataques contra as últimas fortalezas da Terra-média que ainda impedem o triunfo do vilão.")
    alert("Aragorn tenta desesperadamente deter a maré da guerra e ganhar tempo para que Frodo e Sam finalmente destruam o Um Anel e aniquilem o poder do Senhor do Escuro de uma vez por todas.")
    alert("O que você faz?");
    var invalidChoice = true;
    while (invalidChoice) {  
        var choice = prompt("Opção 1: Vão até o local da pilha de corpos dos Orcs e tentam achar alguma evidencia dos pequeninos. \nOpção 2: Sugere ao Aragorn e a Gimli que eles encerrem essa missão, já que os pequenos já morreram e nao tem o porque de estar ali.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Gandalf reaparece a vocês e lhes informam que Merry e Pippin estavam a salvo e que os Três Caçadores agora deviam acompanhá-lo até os salões do Rei Théoden, de Rohan.")
            legolasStory3();
        } else if (choice === '2') {
            alert("Vocês se perdem no caminho de volta e acabam sendo avistado pelos espectros que são muito mais numerosos que vocês e acabam matando vocês.")
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
            legolasStory2();
        }else if (choice === '3') {
            alert("No meio do caminho, você decide voltar para o acampamento e deixa Gimli e Aragorna pra trás.")
            alert("Hum, você se acovardou diante de um pedido de ajuda e consequentemente o povo da Terra Média nao conseguiu derrotar o Senhor das Trevas.")
            alert("Game Over!!")
            return location.href = './index.html';
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}
