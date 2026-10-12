# SEO — SHOT Guia Técnico | V20

## URLs canônicas
- Home: https://shotguiatecnico.com.br/
- Página comercial: https://shotguiatecnico.com.br/grupo.html

## SEO on-page conferido estaticamente
- Um H1 em cada página.
- Title e meta description específicos por página.
- Canonical absoluto, Open Graph e Twitter Card.
- Imagens HTML com `alt`.
- Dados estruturados JSON-LD presentes nas duas páginas.
- `robots.txt`, `sitemap.xml`, `llms.txt` e `.htaccess` incluídos.

## Termos semânticos principais
SHOT Guia Técnico; prompts de imagem e vídeo com IA; linguagem cinematográfica; câmera; lente; ângulo; enquadramento; abertura; luz; movimento; composição; cor/grading; proporção de tela; combinações; catálogo de prompts.

## Arquivos técnicos
- `robots.txt` aponta para `https://shotguiatecnico.com.br/sitemap.xml`.
- `sitemap.xml` lista a Home e a página comercial.
- `.htaccess` define HTTPS, redirecionamento de `/index.html`, compressão e cabeçalhos de cache. Regras só funcionam em hospedagem Apache com os módulos correspondentes; adaptar se o servidor for diferente.
- `llms.txt` resume produto, capítulos, método e fluxo de compra.

## Pendências pós-publicação
1. Confirmar DNS, certificado HTTPS, respostas HTTP e redirecionamentos no domínio de produção.
2. Cadastrar/verificar a propriedade no Google Search Console e enviar o sitemap.
3. Conferir relatório de indexação, canonical selecionado pelo Google e eventuais problemas de rastreamento.
4. Executar teste de resultados avançados para JSON-LD com as URLs publicadas.
5. Medir Core Web Vitals com PageSpeed Insights e dados de campo quando disponíveis.
6. Monitorar consultas, impressões, cliques e páginas indexadas; ampliar conteúdo útil somente com material original que responda a buscas reais.

## Limites da revisão
Esta revisão valida arquivos locais e estrutura estática; não confirma indexação, rankings, backlinks, desempenho de campo ou elegibilidade de resultados avançados. Sitemap e metadados ajudam o rastreamento, mas não garantem posicionamento orgânico.
