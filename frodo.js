function frodoStory3() {
    alert("Depois de muito sacrificio você e Sam chegam a montanha da perdição quando finalmente você pode jogar o um anel na montanha.");
    alert("Mas você sente um desejo profundo de sair dali com ele, e deixar tudo para trás pois o anel se torna uma decisão dificil, logo você percebe que Sam está um pouco distante e pode ser enganado se você jogar o resto de Lembas do seu bolso logo você decide");
    var invalidChoice = true;
    while (invalidChoice) {
        var choice = prompt("Opção 1: Jogar as lembas e permanecer com o anel. \nOpção 2: Usar o anel pra fugir dali. \nOpção 3: Acabar com o sofrimento causado e finalmente jogar o anel da montanha.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Você vê Smeagol se jogando para buscar o que achava ser o anel e caindo na lava fervente e se ve livre dele.")
            alert("Sam lhe parabeniza enquanto o anel esta em no seu bolso. Você pode ate enganar o Sam, mas não Sauron, que consegue te alcançar do lado de fora da montanha e você está morto.")
            alert("Game Over!")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("Você pode ficar invisivel a todos menos ao dono do anel que te captura mais facilmente e você e morto e a terra média é perdida.")
            alert("Game Over!")
            return location.href = './index.html';
        } else if (choice === '3') {
            alert("Você hesita e ate diz que não vai quando se ve tomado pelo anel e não joga e confronta Sam, logo você fica invisivel mas Smeagol chega a tempo de tomar o anel.")
            alert("Arrancando de seu dedo enquanto está invisivel e caindo dentro da lava. Destruindo-o  assim como Sauron.")
            alert("A terra média está salva!!")
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}

function frodoStory2() {
    alert("Após uma fuga desesperada de Khaza-Dûn e o sacrificio de Gandalf para derrotar o Balrog você percebe que esta sozinho na floresta de Lórien, ainda sendo perseguido pelos Orcs e Urukheim.");
    alert("Quando você se encontra com um rosto familiar, Boromir é o primeiro a te alcançar, então após perguntar se você esta bem logo ele faz uma sugestão de você entregar o um anel, que assim poderia defender o povo de Tirith.");
    alert("Então desesperadamente ele avança para tomar de você quando: Como você responde?")
    var invalidChoice = true;
    while (invalidChoice) {
        var choice = prompt("Opção 1: Você desiste e entrega o um anel. \nOpção 2: Corre dele em busca de ajuda. \nOpção 3: Grita por socorro para que os outros possam ajudar. \nOpção 4: Usa o um anel.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Boromir tomado pelo anel lhe mata, foge do local e a terra média está perdida.")
            alert("Game Over!")
            return location.href = './index.html'
        } else if (choice === '2') {
            alert("Hobbits não tem pernas grandes logo e alcançado e morto por boromir.")
            alert("Game Over!")
            return location.href = './index.html'
        } else if (choice === '3') {
            alert("Você atrai atenção mas não de quem esperava logo nota que você está cercado por Urukheims e Boromir e morto e você capturado.")
            return location.href = './index.html'
        } else if (choice === '4') {
            alert("Você fica invisivel foge dali e se ve no rio sozinho ate que Sam te encontra e vocês decidem partir sozinhos para não terem o risco de nenhum dos outros serem corrompidos.")
            frodoStory3()
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
        }
    }
}
function frodoStory1() {
    alert("Saindo do condado junto de Sam você se encontra com Merry e Pippin fugindo do velho 'Nome do Velho Fazendeiro' após roubarem uma horta, depois que Gandalf mandou seguir para estalagem do Ponêi Saltitante. ");

    alert("Lá Frodo, você e Sam estão andando numa estrada e ouvem um barulho de cavalo. Quando de repente você ouve barulho de cavalos vindo da estrada pela qual vocês seguiam.");

    alert("Logo vocês notaram que não eram os ponêis com qual estava acostumado a ver passar por ali, tampouco era apenas um, mas varios cavalos em disparada na sua direção. Então você decide:")

    var invalidChoice = true;
    while (invalidChoice) {
        var choice = prompt("Opção 1: Se despedir de Merry e Pippin e seguir pela estrada. \nOpção 2: Correr e deixar todos para trás. \nOpção 3: Se esconde no meio das raizes ao lado da estrada e pede para os outros fazerem o mesmo.");
        invalidChoice = false;
        if (choice === '1') {
            alert("Você se depara com os Nazgul de Sauron, que sem nem aviso lhe cortam a cabeça e mata todos ali próximo.")
            alert("Game over!")
            return location.href = './index.html';
        } else if (choice === '2') {
            alert("Se tratando de um hobbit, correr não e seu forte, logo e alcançado por cavaleiros e antes mesmo de perceber eles matam você.!")
            alert("Game over!")
            return location.href = './index.html';
        } else if ( choice === '3') {
            alert("Enquanto fica em silêncio escuta os cavalos chegando ate você e parando ao seu lado quando então, você nota as figuras fantasmagoricas do espectros montado neles, a morte seria certa se qualquer movimento fosse feito, mas finalmente eles se vão e você esta livre para sua jornada.")
            frodoStory2();
        } else {
            alert("Escolha uma opção válida!")
            invalidChoice = true;
            frodoStory1();
        }
    }
}
