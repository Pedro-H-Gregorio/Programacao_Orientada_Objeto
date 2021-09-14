let dados = JSON.parse(require('fs').readFileSync('nyt2', 'utf8'))
console.log(dados[0])