// ================= ROTEADOR DE SEO INTERNACIONAL =================
// Se você está lendo isso no DevTools: sim, eu aposentei o i18n dinâmico por um motivo nobre.
// Para uma Landing Page de alta performance, decidi migrar para uma estrutura de arquivos físicos 
// e pastas (/pt/, /en/, etc.). Assim, o Google indexa o conteúdo nativo de cada país perfeitamente 
// e eu não sacrifico nenhum milissegundo de carregamento rodando scripts pesados. 
// Menos request, menos parse time = lead convertendo mais rápido.

function changeLanguage(lang) {
    // Salvo a escolha manual na sessão atual para blindar o navegador contra loops de redirecionamento
    sessionStorage.setItem('lang_redirected', 'true');
    
    const targetPath = `/${lang}/`;
    const currentPath = window.location.pathname;
    const normalizedPath = currentPath.endsWith('index.html') ? currentPath.replace('index.html', '') : currentPath;

    if (normalizedPath !== targetPath) {
        window.location.href = targetPath;
    }
}

// ================= INICIALIZAÇÃO AUTOMÁTICA =================
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    // Pega exatamente a primeira pasta do caminho (ex: "pt", "en") para evitar falsos positivos
    const pathSegment = currentPath.split('/')[1];
    const supportedLangs = ['pt', 'en', 'es', 'pl'];

    // Se o usuário está em uma pasta válida de idioma, blindamos a sessão
    if (supportedLangs.includes(pathSegment)) {
        sessionStorage.setItem('lang_redirected', 'true');
    }

    // Sincroniza o <select> sem risco de bugar se a URL for "/en/projeto-pt-br"
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        if (supportedLangs.includes(pathSegment)) {
            langSelect.value = pathSegment;
        } else {
            langSelect.value = 'en'; // Fallback absoluto
        }
    }
});
