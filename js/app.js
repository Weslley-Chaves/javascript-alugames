function alterarStatus(opcao) {
    // Pega botão e caixa da imagem pelo padrão de IDs do seu HTML
    const game = document.getElementById(`game-${opcao}`);
    const img = document.getElementById(`game-${opcao}-img`);

    if (!game || !img) {
        console.warn('[debug] Elemento não encontrado para a opção:', opcao);
        return false; // evita navegar no href="#"
    }

    const BTN_BASE = 'dashboard__item__button';
    const BTN_RETURN = 'dashboard__item__button--return';
    const IMG_RENTED = 'dashboard__item__img--rented';

    const isReturn = game.classList.contains(BTN_RETURN);

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

    return false; // evita o scroll do href="#"
}
