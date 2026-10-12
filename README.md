# SHOT — Guia Técnico | V20

Site estático de duas páginas para apresentar e vender o **SHOT — Guia Técnico**, por Claudio Romeiro.

## Estrutura do projeto
- `index.html` — página principal do produto.
- `grupo.html` — página comercial com fluxo de compra pelo WhatsApp e amostras do PDF.
- `css/style.css` — estilos compartilhados, componentes e breakpoints responsivos.
- `js/script.js` — navegação, menu mobile, reveal, progresso de leitura, carrossel, modal de combinações e movimento secundário.
- `images/` — imagens editoriais, mockups, amostras e ativos de prova.
- `docs/` — especificação, PRD, briefing, workflows, SEO, sistema de prova e relatório técnico V20.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess` — arquivos auxiliares de rastreamento, metadados e servidor.

## Como testar localmente
1. Extraia o ZIP mantendo a estrutura de pastas.
2. Sirva a pasta por um servidor HTTP local (por exemplo, a extensão Live Server do VS Code).
3. Abra `/` e `/grupo.html`.
4. Teste o menu em viewport menor que 1024 px, os links, os botões de WhatsApp, o carrossel e o modal de combinações.
5. Verifique as duas páginas em larguras de 320, 375, 768, 1024 e 1440 px.

## Publicação
1. Envie todos os arquivos preservando os caminhos relativos.
2. Confirme que o domínio serve HTTPS e que o `.htaccess` é compatível com Apache; em hospedagem que não use Apache, replique as regras de HTTPS e cache no servidor correspondente.
3. Confirme se `https://chat.whatsapp.com/CFjFExe53pTGzJ1cKeg9Kj` é o convite vigente do grupo antes de divulgar.
4. Abra `https://shotguiatecnico.com.br/robots.txt` e `https://shotguiatecnico.com.br/sitemap.xml` após publicar.
5. Cadastre/verifique o domínio no Google Search Console e envie o sitemap.
6. Teste as URLs finais, metadados sociais, dados estruturados e Core Web Vitals depois que o site estiver no ar.

## Produto e fluxo de conversão
O guia reúne 12 capítulos, 46 movimentos de câmera e o método:

**CÂMERA + LENTE + ÂNGULO + ENQUADRAMENTO + ABERTURA + LUZ + MOVIMENTO = SHOT**

O fluxo é: página de compra → grupo do WhatsApp → informações de pagamento → confirmação → envio privado do PDF. O site não promete entrega automática.

## Notas de manutenção
- A seção “CONTEÚDO REAL. ABERTO AO OLHAR.” usa a nova imagem de capa fornecida, otimizada em WebP.
- As regras recentes dos mockups da Home e do Grupo foram consolidadas em um bloco CSS, evitando a pilha de overrides V14–V19.
- Antes de substituir imagens, confirme a licença, a legibilidade em mobile e os textos alternativos.
