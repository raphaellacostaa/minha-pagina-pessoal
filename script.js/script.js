window.onload = function() {
    console.log("Página carregada!");
    if (!document.getElementById('mensagemBtn')) {
        console.error("Botão não encontrado! Verifique o ID.");
    }
};
document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagens = [
           "Olá! Tenha um ótimo dia! ✨",
            "Bom dia! Que seu dia seja cheio de conquistas! ☀️",
            "Boa tarde! Aproveite para recarregar as energias! 🌤️",
            "Boa noite! Descanse para um novo dia incrível! 🌙",
            "Hoje é seu dia para brilhar! 💫",
            "A cada linha de código, você evolui! 💻"
        ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').innerHTML = `<p>${mensagemAleatoria}</p>`;
});