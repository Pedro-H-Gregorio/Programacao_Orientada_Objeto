class Medico {
    #CRM;
    #nome;
    #telefone; 
    #especialidade;

    constructor(CRM, nome, telefone, especialidade){
        this.#CRM = CRM;
        this.#nome = nome;
        this.#telefone = telefone;
        this.#especialidade = especialidade;
    } 

    get CRM (){
        return this.#CRM;
    }
    get nome (){
        return this.#nome;
    }
    get telefone (){
        return this.#telefone;
    }
    get especialidade (){
        return this.#especialidade;
    }
    get lista (){
        return {
            nome: this.nome,
            telefone: this.telefone,
            especialidade: this.especialidade
        }
    }

    set CRM (nCRM){
        this.#CRM = nCRM
    }
    set nome (n){
        this.#nome = n
    }
    set telefone (ntelefone){
        this.#telefone = ntelefone
    }
    set especialidade (nespecialidade){
        this.#especialidade = nespecialidade
    }
}module.exports = Medico