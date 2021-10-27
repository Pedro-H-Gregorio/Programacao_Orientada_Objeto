class Livro {
  #ano;
  #isbn;
  #titulo;
  #id;
  #id_editora;

  constructor(ano, isbn, titulo, id, id_editora) {
    this.#ano = ano;
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#id = id;
    this.#id_editora = id_editora;
  }

  get ano() {
    return this.#ano;
  }

  get isbn() {
    return this.#isbn;
  }
  set isbn(nIsbn) {
    this.#isbn = Number(nIsbn);
  }

  get titulo() {
    return this.#titulo;
  }
  set titulo(nTitulo) {
    this.#titulo = nTitulo;
  }

  get id() {
    return this.#id;
  }

  get id_editora() {
    return this.#id_editora;
  }
}

class Editora {
  #id;
  #nome;
  #cidade;

  constructor(id, nome, cidade) {
    this.#id = id;
    this.#nome = nome;
    this.#cidade = cidade;
  }

  get id() {
    return this.id;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nNome) {
    this.#nome = nNome;
  }

  get cidade() {
    return this.#cidade;
  }
  set cidade(nCidade) {
    this.#cidade = nCidade;
  }
}

class Autor {
  #nome;
  #id;
  #nacionalidade;

  constructor(nome, id, nacionalidade) {
    this.#nome = nome;
    this.#id = id;
    this.#nacionalidade = nacionalidade;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nNome) {
    this.#nome = nNome;
  }

  get id() {
    return this.#id;
  }

  get nacionalidade() {
    return this.#nacionalidade;
  }
}

class Categoria {
  #id;
  #descricao;

  constructor(id, descricao) {
    this.#id = id;
    this.#descricao = descricao;
  }

  get id() {
    return this.#id;
  }

  get descricao() {
    return this.#descricao;
  }
  set descricao(nDescricao) {
    this.#descricao = nDescricao;
  }
}
