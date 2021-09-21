class Bebe {
    #id;
    #mae
    #nome;
    #peso;
    #altura;
    #data_de_nascimento;
    #medico;

    constructor(id, nome, peso, altura, data_de_nascimento, mae, medico){
        this.#id = id;
        this.#mae = mae;
        this.#nome = nome;
        this.#peso = peso;
        this.#altura = altura;
        this.#medico = medico;
        this.#data_de_nascimento= data_de_nascimento;
    }

    get id (){
        return this.#id;
    }
    get mae (){
        return this.#mae;
    }
    get nome (){
        return this.#nome;
    }
    get peso (){
        return this.#peso;
    }
    get altura (){
        return this.#altura;
    }
    get medico (){
        return this.#medico
    }
    get data_de_nascimento (){
        return this.#data_de_nascimento;
    }
    get lista (){
        return {
            nome: this.nome,
            peso: this.peso,
            altura: this.altura,
            data_de_nascimento: this.data_de_nascimento,
            mae: this.mae,
            medico: this.medico
        }
    }

    set id (nid){
        this.#id = String(nid);
    }
    set nome (n){
        this.#nome = n;
    }
    set peso (peso){
        this.#peso = peso;
    }
    set altura (altura){
        this.#altura = altura;
    }
    set data_de_nascimento (ndata_de_nascimento){
        this.#data_de_nascimento = ndata_de_nascimento;
    }
}module.exports = Bebe