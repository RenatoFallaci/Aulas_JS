function blurFunction(){
    document.getElementById("myInput").style.backgroundColor="PINK";
}

function myFunction(val){
    alert ("mudou para"+ val);
}

function loadFunction(){
    alert ("Carregando Pagina!!!");
}
function mouseDown (){
document.getElementById("myP").style.color="red";
}

function mouseUp(){
    document.getElementById("myP").style.color="green";
}


function coordenadasFigura(e){
    var x =e . clientX;
    var y = e . clientY;
     var coor = " Coordenadas:("+ x +","+y+")";
     document.getElementById("demo3").innerHTML=coor;
}
function clearCoor(){
    document.getElementById("demo3").innerHTML="";
}