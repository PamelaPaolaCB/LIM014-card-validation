import validator from './validator.js';

 document.getElementById("pantallaDos").style.display = "none";
 document.getElementById("pantallaTres").style.display = "none";
 let botonOne = document.getElementById("botonIngresar");
 let botonPython = document.getElementById("botonPython");
 let botonJS =  document.getElementById("botonJS");
 let botonSpark = document.getElementById("botonSpark");

 /*MODAL*/
 /*let abrirModal = document.querySelector("");*/
 
 botonOne.addEventListener("click", function(){
  document.getElementById("pantallaUno").style.display = "none";
  document.getElementById("pantallaTres").style.display = "none";
  document.getElementById("pantallaDos").style.display = "block";
  let usuario = document.getElementById("nombre").value; /*Capturar valor, nombre del usurio*/
  let registro = document.getElementById("nombreUsuario");
  registro.innerHTML = "Bienvenid@" + " " + usuario;
 });

botonPython.addEventListener("click", function(){
  document.getElementById("pantallaUno").style.display = "none";
  document.getElementById("pantallaTres").style.display = "block";
  document.getElementById("pantallaDos").style.display = "none";
  let welcome = document.getElementById("welcome");
  welcome.innerHTML = "Bienvenidos al curso de Python";
 });
 botonJS.addEventListener("click", function(){
  document.getElementById("pantallaUno").style.display = "none";
  document.getElementById("pantallaTres").style.display = "block";
  document.getElementById("pantallaDos").style.display = "none";
  let welcome = document.getElementById("welcome");
  welcome.innerHTML = "Bienvenidos al curso de JS";
 });
 botonSpark.addEventListener("click", function(){
  document.getElementById("pantallaUno").style.display = "none";
  document.getElementById("pantallaTres").style.display = "block";
  document.getElementById("pantallaDos").style.display = "none";
  let welcome = document.getElementById("welcome");
  welcome.innerHTML = "Bienvenidos al curso de Spark";
 });

//let pantallaTres = document.getElementById("pantallaTres");
 let btn =  document.getElementById("capturar");
 btn.addEventListener('click', () => {
    let numeroTarjeta = document.getElementById("txtNum").value;
    let inputTarjeta = document.getElementById("txtNum");
    //alert(numeroTarjeta);
    let isValido = validator.isValid(numeroTarjeta);
    //console.log(isValido);
    let enmascarado = validator.maskify(numeroTarjeta);
    if (isValido == true){
    
      
      alert("Tu tarjeta " + enmascarado+ " es válida!");
      /*Para validar tipo de tarjeta*/
      if(numeroTarjeta.charAt(0) == "4")
      {
       inputTarjeta.classList.add("visa");
      } else if(numeroTarjeta.charAt(0) == "5"){
        inputTarjeta.classList.add("mastercard");
      }
    }
    else {
      alert("Tu tarjeta " + enmascarado+ " es inválida!");
    }
  });

  
