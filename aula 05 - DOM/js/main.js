function botao(){ //innerHTML une informação ao HTML
    document.getElementById("agradecimento").innerHTML = "Brigado Ajuda"; 
    //alert("Brigado Ajuda!")
}

function nextPageOne(){ // Windows.Open (abre uma janela nova no navegador)
    window.open("https://www.linkedin.com/feed/");
}

function nextPageTwo(){ //Windows.Location.Href (altera janela local)
    window.location.href = "https://github.com/diegofernandesfeijo/aula_javaScript/tree/main";
}


//usando getElementById ao passar o mouse, porém, como usa o document, 
//ele busca todas as <p> e se criar mais acaba gerando problemas

/*
function trocar() { //alterando texto direto ao passar o mouse com o HTML usando onmouseover e essa function
    document.getElementById("passaMouse").innerHTML = "Brigado Ajuda!"
    //alert("Trocar texto");
}

function voltar(){  //alterando texto após passar o mouse com o HTML usando onmouseout e essa function
    document.getElementById("passaMouse").innerHTML = "Passe o Mouse aqui"
}
*/

//colocando um parametro na function para fazer InnerHTML
function trocar(elemento) { //usando o elemento como variavel e inserindo no HTML ao invés de usar document
    elemento.innerHTML = "Brigado Ajuda!"; //pega o THIS da function voltar do HTML e gera um Inner
    //document.getElementById("passaMouse").innerHTML = "Brigado Ajuda!"
}

function voltar(elemento){  //alterando texto após passar o mouse com o HTML usando onmouseout e essa function
    elemento.innerHTML = "Passe o Mouse Aqui"; //pega o THIS da function voltar do HTML e gera um Inner
    //document.getElementById("passaMouse").innerHTML = "Passe o Mouse aqui"
}

function load(){ //executa function durante o carregamento do Body
    alert("Pagina Carregada");
}

function funcaoChange(elemento){ //coleta o valor que foi selecinado no select do HTML através do OnChange
    console.log(elemento.value)
}