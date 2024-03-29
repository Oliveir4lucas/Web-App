window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    var content = document.querySelector('.content');

    // Adiciona a classe 'loaded' após o carregamento completo da página
    preloader.classList.add('loaded');
    
    // Após um pequeno atraso, oculta o preloader e exibe o conteúdo da página
    setTimeout(function() {
        preloader.style.display = 'none'; // Oculta o preloader
        content.style.display = 'block'; // Exibe o conteúdo da página
    }, 1000); // Ajuste o tempo de atraso conforme necessário
});

// Adicionando a classe 'loaded' ao corpo da página após o carregamento completo do documento
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

