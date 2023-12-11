document.getElementById("btMostrar").addEventListener("click",function(){
    let inMedicamento = document.getElementById("inMedicamento").Value;
let inPreco = document.getElementById("inPreco").Value;
if (isNaN(inPreco)){
    alert ("Digite um numero");
return;
}
let Pomocao = (inPreco*2) - (inPreco*2*0.10);
document.getElementById("outMedicamento").textContent = "promoção do "+ inMedicamento;
document.getElementById("outPromocao").textContent = "leve 2 por apenas "+ promocao.toFixed(2);

});