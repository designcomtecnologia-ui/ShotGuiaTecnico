# SPEC — SHOT V20

## Arquitetura
Projeto estático sem build step: `index.html` e `grupo.html` compartilham `css/style.css` e `js/script.js`. Caminhos de assets são relativos para permitir publicação em hospedagem estática.

## Páginas
- **Home (`index.html`)**: posicionamento do produto, método SHOT, capítulos, movimento, combinações, exemplos, prova visual/social e chamada final.
- **Grupo (`grupo.html`)**: proposta comercial, processo, conteúdo do pacote, amostras reais do guia, FAQ e CTA de compra via WhatsApp.

## Direção visual
Editorial cinematográfico/technical archive; preto, branco e neutros; tipografia técnica; fotografia integrada à composição; hierarquia clara e movimentos discretos. A capa nova é usada na primeira imagem da faixa de prévias da página de Grupo.

## Comportamento
- Menu lateral em telas de até 1024 px, com overlay e fechamento por link/tecla Escape conforme o script.
- Revelação de conteúdo via IntersectionObserver e barra de progresso de leitura.
- Carrossel e modal de combinações acionados por controles próprios.
- Movimento secundário restrito a telas desktop e reduzido quando `prefers-reduced-motion` é solicitado.
- A navegação lateral da Home acompanha as seções, incluindo a última seção de recebimento.

## Responsividade
Breakpoints principais definidos no CSS em torno de 480 px, 768 px, 1024 px e desktop. Validar manualmente em 320, 375, 768, 1024 e 1440 px antes de publicar.

## Componentes de mockup
As regras de escala/posicionamento da Home, Hero do Grupo e tablet da última seção do Grupo estão reunidas no bloco final de `css/style.css`. Não acrescentar novos overrides no fim sem antes editar o bloco consolidado.
