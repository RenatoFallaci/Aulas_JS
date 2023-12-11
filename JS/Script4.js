
function myFunction(){
    alert ('ola');
}

function mostrarHora (){
  let d = new  Date (); /* instanciado a classe date   */
 document . body. innerHTML = "<h3>Hora"+d.getHours () + "Minutos" + d .getMinutes ()+
 + "segundos" + d. getSeconds ()+
 d.toLocaleTimeString ();


mostrarHora();

function Hora (){
    const tempo =  new Date  ();
    const hora = tempo .getHours (); /* varialvel hora */ 
    const min = tempo . getMinutes ();
    const seg = tempo . getSeconds ();
    console.log(  `HORA ${hora}:  ${min} :  ${seg} `);
    document.body.innerHTML =  `HORA ${hora}:  ${min} :  ${seg} `;
setInterval (Hora,1000);
}
Hora();
}


