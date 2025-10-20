function alterarStatus(opcao) {
    // Pega botão e imagem correspondentes
    const game = document.getElementById(`game-${opcao}`);
    const img = document.getElementById(`game-${opcao}-img`);

    const BTN_BASE = 'dashboard__item__button';
    const BTN_RETURN = 'dashboard__item__button--return';
    const IMG_RENTED = 'dashboard__item__img--rented';

    // Verifica estado atual
    const isReturn = game.classList.contains(BTN_RETURN);
    const frase = isReturn ? 'devolver' : 'alugar';

    // Confirmação do usuário
    const confirmar = confirm(`Você realmente deseja ${frase} este jogo?`);
    if (!confirmar) {
        console.log('[debug] Ação cancelada pelo usuário.');
        return false;
    }

    // Altera visual conforme a ação
    if (isReturn) {
        // Volta para "Alugar"
        game.classList.remove(BTN_RETURN);
        game.classList.add(BTN_BASE);
        game.textContent = 'Alugar';

        img.classList.remove(IMG_RENTED);
        console.log(`[debug] ${game.id} mudou para estado NORMAL`);
    } else {
        // Vai para "Devolver"
        game.classList.add(BTN_RETURN);
        game.textContent = 'Devolver';

        img.classList.add(IMG_RENTED);
        console.log(`[debug] ${game.id} mudou para estado RETORNAR`);
    }

    qtdJogosAlugados()
    return false; // evita o scroll causado pelo href="#"
}

function qtdJogosAlugados() {
    const alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`[debug] O número de jogos alugados é: ${alugados}`);
    const el = document.getElementById('contador-alugados');
    if (el) el.textContent = `Quantidade de jogos alugados: ${alugados}`;
    return alugados;
}
