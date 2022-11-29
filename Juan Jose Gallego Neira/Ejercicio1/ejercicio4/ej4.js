const reservation = [];
let i = 1;
while(i != 0){

let name = prompt("Indique su nombre");
let country = prompt("Indique su pais de origen");
let people = parseInt(prompt("¿Para cuantas personas ?"))
let estadia =prompt("¿ Cuantos dias desea reservar?")
if(people<=2){
    tipohab="individual";   
}else if(people <=4){
    tipohab="doble";    
}else{
    tipohab="familiar"
}
if(tipohab==="familiar"){
    let animal = prompt("desea ingresar animal (si/no)");
    let animal2 = animal=="si" ? True : false;
}

reservation.push({
    name:name,
    country:country,
    people:people,
    estadia:estadia,

})

alert( "Bienvenido "+reservation[0].name)

    i=parseInt(prompt("1. continuar,  0.Terminar"));
}