// Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:
// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

let num = parseInt(prompt("Ingrese un valor del 1 al 5"));

switch (num) {
  case 1:
    console.log("Elegiste el numero: 1");
    break;
  case 2:
    console.log("Elegiste el numero: 2");
    break;
  case 3:
    console.log("Elegiste el numero: 3");
    break;
  case 4:
    console.log("Elegiste el numero: 4");
    break;
  case 5:
    console.log("Elegiste el numero: 5");
    break;

  default:
    alert("Valor incorrecto, porfavor ingrese un numero del 1 al 5");
    break;
}
