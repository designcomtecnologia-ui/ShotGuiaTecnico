# RELATÓRIO DE REVISÃO TÉCNICA — SHOT V20

Data da revisão: 09/10/2026  
Base: pacote estático V19, com atualização da prévia da capa e consolidação das regras CSS.

## Alterações realizadas

- Atualizada a primeira amostra de `grupo.html` na seção **“CONTEÚDO REAL. ABERTO AO OLHAR.”** para usar a nova imagem fornecida.
- Otimizada a nova imagem para WebP com transparência preservada (`images/previews/shot-cover.webp`, aproximadamente 150 KB).
- Consolidado em um único bloco final do CSS o conjunto histórico de regras que alterava a escala e o posicionamento dos tablets da Home, da Hero do Grupo e da última seção do Grupo.
- Preservados os posicionamentos aprovados: tablet da Home; tablet da Hero do Grupo deslocado à esquerda; tablet da última seção do Grupo ampliado; regras próprias para telas menores.
- Atualizados `README.md`, `SPEC.md`, `PRD.md`, `BRIEFING.md`, `WORKFLOWS.md`, `SEO.md` e `PROOF-SYSTEM.md` para V20.
- Criado este relatório e atualizado `llms.txt` e a data de `lastmod` do sitemap.

## Verificações concluídas localmente

| Verificação | Resultado |
|---|---|
| Sintaxe JavaScript com `node --check` | Aprovada |
| Parsing estático de `index.html` e `grupo.html` | Aprovado |
| Quantidade de H1 | 1 em cada página |
| Imagens sem atributo `alt` | 0 nas duas páginas |
| IDs duplicados | Nenhum encontrado |
| Referências locais de HTML ausentes | Nenhuma encontrada |
| Âncoras internas quebradas | Nenhuma encontrada |
| JSON-LD como JSON válido | Aprovado nas duas páginas |
| Parsing sintático do CSS | Nenhum erro encontrado |
| Chaves do CSS | Balanceadas |
| Referências locais `url()` no CSS | Nenhuma ausente |
| XML do sitemap | Válido |
| Documentação | Atualizada para V20; sem referências remanescentes a V11 |

A consolidação reduziu `css/style.css` de aproximadamente 1.260 para 880 linhas, removendo a pilha de regras históricas repetidas para os mockups. Permanecem declarações `!important` herdadas de outras partes do estilo; não foram removidas em massa para evitar regressões visuais.

## O que depende de teste/publicação

- **Revisão visual real em navegador:** a captura headless tentou ser executada, mas o Chromium encerrou com erro neste ambiente. Portanto, não declaro aprovação visual automatizada. Conferir a Home e `grupo.html` em desktop e mobile antes da publicação.
- **WhatsApp:** confirmar que o convite configurado é o link vigente e que o grupo aceita novos participantes.
- **Hospedagem:** verificar DNS, HTTPS, redirecionamentos, compressão e cache no servidor de produção. O `.htaccess` depende de Apache e módulos habilitados; outras plataformas exigem configuração equivalente.
- **Indexação:** cadastrar/verificar `shotguiatecnico.com.br` no Google Search Console e enviar `sitemap.xml`.
- **SEO em produção:** testar URLs publicadas, dados estruturados com as ferramentas do Google e canonical selecionado pelo buscador.
- **Desempenho real:** medir LCP, INP e CLS no PageSpeed Insights; os resultados de campo só aparecem quando houver dados suficientes.
- **Resultado orgânico:** rankings, indexação, impressões e cliques não podem ser garantidos por metadados ou sitemap; acompanhar no Search Console ao longo do tempo.

## Conclusão

O pacote passou pelas verificações estáticas descritas acima e a documentação foi alinhada à versão V20. A validação de publicação, renderização visual em navegador e desempenho de campo permanece pendente até o site estar acessível no ambiente final.
