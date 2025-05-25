window.onload = function() {
    console.log("Página carregada com sucesso!");
    
    const botao = document.getElementById('mensagemBtn');
    const areaMensagem = document.getElementById('mensagem');
    
    if (!botao || !areaMensagem) {
        console.error("ERRO: Elementos não encontrados. Verifique se os IDs estão corretos no HTML:");
        console.log("- Botão deve ter id='mensagemBtn'");
        console.log("- Div da mensagem deve ter id='mensagem'");
        return;
    }

    botao.addEventListener('click', function() {
        const mensagens = [
            "Olá! Tenha um ótimo dia! ✨",
            "Bom dia! Que seu dia seja cheio de conquistas! ☀️",
            "Boa tarde! Aproveite para recarregar as energias! 🌤️",
            "Boa noite! Descanse para um novo dia incrível! 🌙",
            "Hoje é seu dia para brilhar! 💫",
            "A cada linha de código, você evolui! 💻"
        ];
        
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        areaMensagem.innerHTML = `
            <div class="mensagem-estilizada">
                <p>${mensagemAleatoria}</p>
            </div>
        `;
        
        // Efeito visual adicional
        areaMensagem.style.animation = 'fadeIn 0.5s ease-out';
    });
};