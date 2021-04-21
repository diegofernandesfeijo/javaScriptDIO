//function usando "return" e usar posteriormente (parametro)

//exemplo, criar fução soma, essa funcao tem parametro var1 e var2 chamadas de n1,n2
function soma(n1, n2){
//ao executar essa funcao, ela retornara para tela a n1+n2
    return n1 + n2;
}
//executando a função + parametros n1, n2
alert(soma(5, 10));
//retorna no alert 15
//--------------------------------------------------------
//outro exemplo
function setReplace (frase, nome, nome_novo) {
    return frase.setReplace(nome, nome_novo)
}
//por parametro setReplace recebeu "Frase" e depois gerou replace em Japão para Brasil
alert(setReplace("vai japão", "Japão", "Brasil"))
//--------------------------------------------------------

//outro exemplo de funcion com parametro
//COM VARIAVEL GLOBAL

var validar = 0; //informo uma variavel global
function validaIdade(idade){   //declaro a function que vai usar e o parametro 
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }   
    return validar;           //retorna o novo valor de validar após ativar a funcion
}

var idade = prompt("Qual sua idade?"); //recebo a variavel idade
console.log(validaIdade(idade))   //utilizo minha function + variavel idade 
                                  //ao executar a function ira me trazer true ou false 