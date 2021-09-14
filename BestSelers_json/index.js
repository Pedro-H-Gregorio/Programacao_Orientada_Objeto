let dados = JSON.parse(require('fs').readFileSync('nyt2', 'utf8'))
dados.forEach((v,i,a)=>console.log(dados[i]))