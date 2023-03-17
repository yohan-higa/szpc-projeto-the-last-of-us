const botoescarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');
        
        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');

    })
})