////IF and ELSE////
/*
var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade")
}else{
    alert("Menor de Idade")
};
*/

///WHILE ///
/*
var count = 0
while (console < 5) {
    console.log(count);
    count++
}
*/

///FOR///
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

///ADICIONAR DATA E HORA///
var d = new Date();
alert(d); //mostra dia mes ano e hora
alert(d.getMonth()+1); //para mostrar o mês
alert(d.getDay()); //busca o dia
alert(d.getHours()); //busca horas
