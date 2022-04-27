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
