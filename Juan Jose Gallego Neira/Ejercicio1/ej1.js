let tipoCliente ={
    externo:"1",
    cooperativa : "2"
}
let x =0;
do {
    console.log("Bienvendio al banco,para empezar indique si pertenece a la cooperativa o si es externo.")
    console.log("1.Cooperativa")
    console.log("2.Externo");
    let tipo = prompt("Digite el numero que corresponde.");
    if (tipo==tipoCliente.externo){
        coop();
    }else{
        ext();
    }
    x++;
}while(x=100)

function coop(){
    console.log("1.Pagos")
    console.log("2.Asesoria")
    let servicio = prompt("Selleccione el tipo de servicio");
    if (servicio=="1"){
        console.log("1.Pagar cuota")
        console.log("2.Pagar administracion");
        let tipoServ = prompt("Digite el numero que corresponde a su servicio solicitado");
        if ( tipoServ == "1"){
            console.log ("Pase a la caja 1 y espere en la fila")
        }else  {
            console.log("Pase a la caja 2 y espere en la fila");
        }
        CoopServ(tipoServ);
    }else {
        console.log("Pase a caja 3 y espere en la fila")
        console.log("Pase a caja 3 y espere para ser atendido.");
        CoopServ(tipoServ);
    }
}

function ext(){
    console.log("1.Pagos")
    console.log("2. Asesoria")
    let servicio = prompt("Selleccione el tipo de servicio");
    if (servicio=="1"){
        console.log("1.Pagar cuota")
        console.log("2.Pagar administracion");
        let tipoServ = prompt("Digite el numero que corresponde a su servicio solicitado");
        if ( tipoServ == "1"){
            console.log ("Pase a la caja 1 y espere en la fila")
        }else {
            console.log("Pase a la caja 2 y espere en la fila");
        }
        extServ(tipoServ);
    } else {
        console.log("Pase a caja 3 y espere en la fila")
        console.log("Pase a caja 3 y espere para ser atendido.")
        extServ(tipoServ);
    }
}

function waitTime(time) {
  
    let process = true;
    return new Promise( (resolve, reject) => {
  
       if(process){
          setTimeout(resolve,time);
       }
  
       else{
          reject(console.log("Proceso fallido. Digame sus datos otra vez."))
       }
     });
   }
  
async function CoopServ(){
    await waitTime(0);
    console.log("Vuelva pronto afiliado");
  }

async function extServ(){
    await waitTime(1000);
    console.log("Vuelva pronto");
  }
