class Medico {

    #CRM;
    #nome;
    #telefone; 
    #especialidade;
    #bebe

    constructor(CRM, nome, bebe, telefone, especialidade){
        this.#CRM = CRM;
        this.#nome = nome;
        this.#bebe = bebe;
        this.#telefone = telefone;
        this.#especialidade = especialidade;
    } 

    get CRM (){
        return this.#CRM;
    }
    get nome (){
        return this.#nome;
    }
    get bebe (){
        return this.#bebe;
    }
    get telefone (){
        return this.#telefone;
    }
    get especialidade (){
        return this.#especialidade;
    }

    set CRM (nCRM){
        this.#CRM = nCRM
    }
    set nome (n){
        this.#nome = n
    }
    set bebe (nbebe){
        this.#bebe = nbebe
    }
    set telefone (ntelefone){
        this.#telefone = ntelefone
    }
    set especialidade (nespecialidade){
        this.#especialidade = nespecialidade
    }
}