/*var pessoas = ["Maria","josé","carlos","ana"];
var objetos = ["colher ","garfo"];
var frutas=["uva","maça","abacaxi"];

pessoas[0];
pessoas.length;
objetos[objetos.length]="Faça";
frutas.indexOf["uva"];


var animais = ["tigre","onça","cavalo","cachoro","gato"];
document.write("Tamanho da lista "+animais.length);
document.write("<br> lista antes de incrementar"+animais);
animais[animais.length]= "vaca";
animais[animais.length]= "camelo";
animais.push("coruja","gaviaõ");
document.write("<br> posição do elemento"+inicial);
*/






/*2
var d = new Date ("october 13 , 2014  11:13:00");
document.getElementById("D1").innerHTML=d;
 
var d = new Date (99,5,24,11,33,30,0);
document.getElementById("D2").innerHTML=d;

var d= new Date (2014, 7 , 20);
document.getElementById("D3").innerHTML = d;


d= new Date();
document.write("<br>"+ d.toUTCString());
document.write("<br>"+ d.toDateString());
document.write("<br>"+ d.toLocaleDateString());
document.write("<br>"+ d.toLocaleTimeString('pt-pt',{hour12: false}));

*/


/*3
var hoje,prazo;
hoje = new Date();
prazo = new Date();

prazo.setFullYear(2023,10,27);
var dia = [ "Domingo", "segunda","terça","Quarta","Quinta","Sexta","Sabado"];

document.write("<p>Hoje e :"+ dia [hoje.getDay()]+","+
+ hoje.getDate ()+ "/" +(hoje.getMonth() )+ "/"
+hoje.getFullYear ()+ "</p>");

document.write("<p> O prazo e:"+dia[prazo.getDay()]+","+
prazo.getDate() + "/" + (prazo.getMonth()+1)+"/"
+prazo.getFullYear()+"</p>");

*/

/*
try {
    var x;

if (X == "") throw"vazio";
if ( isNaN(x)) throw "não e um numero";
if( x== 10) throw x;
console.log(x);
document.write(x);
}catch (err){
console.log("Input is"+err);
document.write("Input is"+err);
}
*/



/*4
var dividendo = 10;
var divisor = 2;

try {
    if (divisor == 0 ){
        throw new 
        Error("Erro: Divisão por zero não e permetida");
    }
var resultado = dividendo /divisor;
console.log("Resultado:", resultado );
}catch(err){
    console.log(err.message);
}
    */




function myFunction(){
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x= document.getElementById("demo").value;
    try{
        if(x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if(x <5) throw "too low";
        if(x >10)throw "too high";

    }
    catch (err){
        message.innerHTML = "Input is "+err;
}}





try{
    adddlert("ERRO!!!");
}catch(err){
    document.write("<br>"+ err.message);
    }finally{
        document.write("<br> Sera mostrado mesmo com o Erro");
    }