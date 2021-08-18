function escolha() {
    var choice = prompt("Escolha seu personagem: \n1- Frodo \n2- Aragorn \n3- Legolas")
    var invalidChoice = true;
    while (invalidChoice) {
        if (choice === '1') {
            return location.href = './frodo.html';
        } else if (choice === '2') {
            alert("Bem vindo Aragorn!!")
            return location.href = './aragorn.html';
        } else if (choice === '3') {
            alert("Bem vindo Legolas!!")
            return location.href = './legolas.html';
        } else {
            alert("Escolha seu personagem!!")
            invalidChoice = true;
            return escolha();
        }
    }
}