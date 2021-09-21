class Maternidade {

    #id;
    #rua;
    #nome;
    #bairro;
    #numero;
    #estado;
    #municipio;

    constructor (id, nome, estado, municipio, numero, rua, bairro){
        
        this.#id = id;
        this.#rua = rua;
        this.#nome = nome;
        this.#bairro = bairro;
        this.numero = numero
        this.#estado = estado;
        this.#municipio = municipio;
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
    get estado (){
        return this.#estado;
    }
    get municipio (){
        return this.#municipio;
    }
    get lista (){
        return {
            nome: this.nome,
            numero: this.numero,
            rua: this.rua,
            municipio: this.municipio,
            bairro: this.bairro,
            estado: this.estado
        }
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
        this.#bairro = nbairro
    }
    set numero (n){
        this.#numero = n
    }
    set estado (nestado){
        this.#estado = nestado;
    }
    set municipio (nmunicipio){
        this.#municipio = nmunicipio;
    }
}module.exports = Maternidade