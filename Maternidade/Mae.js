class Mae {

    #id;
    #rua;
    #nome;
    #bairro;
    #numero;
    #telefone; 
    #maternidade;
    #data_de_nasciemtno;

    constructor(id, rua, nome, bairro, numero, telefone, maternidade, data_de_nasciemnto){

        this.#id = id;
        this.#nome = nome;
        this.#rua = rua;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#telefone = telefone;
        this.#maternidade = maternidade;
        this.#data_de_nasciemtno = data_de_nasciemnto;

    }

    get id (){
        return this.#id;
    }
    get rua (){
        return this.#rua;
    }
    get nome (){
        return this.#nome;
    }
    get bairro (){
        return this.#bairro;
    }
    get numero (){
        return this.#numero;
    }
    get telefone (){
        return this.#telefone;
    }
    get maternidade (){
        return this.#maternidade;
    }
    get data_de_nasciemnto (){
        return this.#data_de_nasciemtno;
    }

    set id (nid){
        this.#id = String(nid);
    }
    set rua (nrua){
        this.#rua = nrua;
    }
    set nome (n){
        this.#nome = n;
    }
    set bairro (nbairro){
        this.#bairro = nbairro;
    }
    set numero (n){
        this.#numero = n;
    }
    set telefone (ntelefone){
        this.#telefone = ntelefone;
    }
    set maternidade (nmaternidade){
        this.#maternidade = nmaternidade;
    }
    set data_de_nasciemnto (ndata_de_nascimento){
        this.#data_de_nasciemtno = ndata_de_nascimento;
    }

}
export {Mae}