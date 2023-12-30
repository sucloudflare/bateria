// Adiciona um ouvinte de evento para a tecla sendo liberada no corpo do documento
document.body.addEventListener('keyup', (event) => {
    // Chama a função playSound com o código da tecla pressionada em letras minúsculas
    playSound(event.code.toLowerCase());
});

// Adiciona um ouvinte de evento para o clique no botão dentro do elemento com a classe 'composer'
document.querySelector('.composer button').addEventListener('click', () => {
    // Obtém o valor do campo de entrada com o id 'input'
    let song = document.querySelector('#input').value;

    // Verifica se há uma entrada de música
    if (song !== '') {
        // Divide a entrada da música em um array de caracteres
        let songArray = song.split('');
        
        // Chama a função playComposition com o array de caracteres da música
        playComposition(songArray);
    }
});

// Função que reproduz o som associado a uma tecla
function playSound(sound) {
    // Procura o elemento de áudio correspondente
    let audioElement = document.querySelector(`#s_${sound}`);
    
    // Procura o elemento de tecla correspondente
    let keyElement = document.querySelector(`div[data-key='${sound}']`);

    // Se o elemento de áudio existir
    if (audioElement) {
        // Reinicia a reprodução do áudio a partir do início
        audioElement.currentTime = 0;
        
        // Reproduz o áudio
        audioElement.play();
    }

    // Se o elemento de tecla existir
    if (keyElement) {
        // Adiciona a classe 'active' à tecla
        keyElement.classList.add('active');

        // Define um temporizador para remover a classe 'active' após 300 milissegundos
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Função que reproduz uma composição musical com base em um array de caracteres
function playComposition(songArray) {
    // Inicializa a variável de espera
    let wait = 0;

    // Itera sobre cada item no array de caracteres
    for (let songItem of songArray) {
        // Define um temporizador para chamar a função playSound com o item atual após o tempo de espera
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        // Incrementa o tempo de espera para o próximo item na composição
        wait += 300;
    }
}
