let x = true;

let numeros = [];

while(x){
let num = prompt("Ingrese un número");

if(isNaN(num)){
    alert("Por favor ingrese un número válido");
}else {
    numeros.push(num);
    x = confirm("¿Seguirás ingresando números?"); 

}

}

console.log(numeros.join(''));






