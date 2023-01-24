class Dados {

    constructor(){
        this.Candidato = [];
        
    }

    salvar(){
        let dados = this.lerDados();
        if(this.valida(dados)){
            this.adicionar(dados);
            console.log(dados);
        }
        
    };
    adicionar(dados){
        this.Candidato.push(dados);
        
    }
    
    lerDados(){
        let dados = {};
            
            dados.nome = document.getElementById('nome').value;
            dados.nascimento = document.getElementById('nasc').value;

        return dados;

        };
        valida(dados){   
        let msn = '';
        if(dados.nome == '' || dados.nascimento == ''){
            msn += '- Existe(m) campo(s) sem preecher, verifique e tente novamente!\n'}

          if(msn != ''){
            alert(msn);
            return false;
        };
        return true;
        };

    };
    
var dados = new Dados();




