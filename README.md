# 🎮 AluGames

> Projeto desenvolvido no curso **Lógica de Programação com JavaScript** da [Alura](https://www.alura.com.br/).

---

## 📘 Sobre o Projeto

O **AluGames** é um sistema simples de  **aluguel de jogos de tabuleiro (boardgames)** , criado para praticar os fundamentos de **lógica de programação** e **manipulação do DOM** com  **JavaScript** .

O site exibe uma lista de jogos com botões de **“Alugar”** e  **“Devolver”** , que mudam de estado visual e textual conforme o clique do usuário — simulando o processo de alugar e devolver jogos.

---

## 🧠 O que foi aprendido

Durante o desenvolvimento deste projeto, foram abordados conceitos fundamentais de **JavaScript** aplicados à  **interatividade com o HTML** :

### 🔹 Manipulação do DOM

* Recuperar elementos da página com

  `document.querySelector()` e `document.getElementById()`;
* Alterar o conteúdo de um elemento via `textContent`;
* Acessar e modificar classes CSS com `classList.add()` e `classList.remove()`;
* Verificar a existência de classes com `classList.contains()`.

### 🔹 Estrutura e Lógica

* Declarar variáveis no JavaScript para armazenar elementos do DOM;
* Utilizar condicionais `if/else` para controlar estados;
* Alterar dinamicamente o texto e o estilo de elementos HTML;
* Aplicar boas práticas de legibilidade e depuração com `console.log()` e `console.warn()`.

---

## 🧩 Estrutura do Projeto

```
📁 AluGames
│
├── 📂 css
│   └── main.css            → estilos principais da aplicação
│
├── 📂 img                  → imagens dos jogos e elementos visuais
│   ├── logo.svg
│   ├── monopoly.png
│   ├── ticket_to_ride.png
│   ├── takenoko.png
│   ├── fade_bar.svg
│   ├── hachuras.svg
│   └── ...
│
├── 📂 js
│   └── app.js              → contém a função alterarStatus()
│
├── 📄 index.html           → estrutura principal da página
└── 📘 README.md            → documentação do projeto
```

---

## ⚙️ Funcionamento do Código

### Função `alterarStatus(opcao)`

Controla a mudança de estado de cada jogo conforme o botão clicado.

```javascript
if (game.classList.contains('dashboard__item__button--return')) {
    // Estado: devolvido
    game.classList.remove('dashboard__item__button--return');
    game.classList.add('dashboard__item__button');
    game.textContent = 'Alugar';
    img.classList.remove('dashboard__item__img--rented');
} else {
    // Estado: alugado
    game.classList.add('dashboard__item__button--return');
    game.textContent = 'Devolver';
    img.classList.add('dashboard__item__img--rented');
}
```

📍 **Comportamento esperado:**

* Ao clicar em  **“Alugar”** , o botão muda para **“Devolver”** e o jogo fica visualmente marcado como alugado.
* Ao clicar novamente, o botão volta para **“Alugar”** e o jogo é liberado.

---

## 🧰 Tecnologias Utilizadas

| Tecnologia                  | Finalidade                                |
| --------------------------- | ----------------------------------------- |
| **HTML5**             | Estrutura da página                      |
| **CSS3**              | Estilização visual e classes dinâmicas |
| **JavaScript (ES6+)** | Lógica e manipulação do DOM            |

---

## 🖥️ Demonstração do HTML

```html
<li class="dashboard__items__item">
    <div id="game-1-img" class="dashboard__item__img">
        <img src="img/monopoly.png" alt="Capa jogo Monopoly">
    </div>
    <p class="dashboard__item__name">Monopoly</p>
    <a id="game-1" onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Alugar</a>
</li>
```

## 👨‍💻 Autor

**Weslley Chaves**

📎 [GitHub](https://github.com/Weslley-Chaves) | 💼 [LinkedIn](https://www.linkedin.com/in/weslley-s-chaves-789890228/)

🗓️ Última atualização: **20/10/2025**
