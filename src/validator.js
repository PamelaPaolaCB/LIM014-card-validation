const validator = {
  // Validar la TC con la función is.valid
  isValid: function (creditCardNumber)  {
    


  let CCNArray = creditCardNumber.split("");
  let reverseCCNArray = CCNArray.reverse();
 
  
  let NCNArray = reverseCCNArray.map((num,indice) =>  {

    if ((indice +1)%2 == 0){
      let n = parseInt(num) *2; 
       
      if(n>=10){
        //console.log("Valor de n mayor a diez "+ n);
        let returnMayorDiez = n.toString().split("").reduce((a1,a2) => parseInt(a1) + parseInt(a2));
        //console.log("Return de n mayor a diez  = " + returnMayorDiez);
        return returnMayorDiez; 

      } else {
        return n;
      } 

    } else{
      //console.log("Valor de n  en ELSE "+ num);
      return parseInt(num);
    }

}).reduce((accumulator, currentValue) => accumulator + currentValue); 

 
if (NCNArray % 10 === 0){
  return  true;
  
}
else {
  return false;
}
},

//se crea la función maskify para ocultar los ultimos 4 digitos de la operación
maskify: function (creditCardNumber)  {

  let michis = "";
  let stringFinal = "";

  for ( let i = 0; i < creditCardNumber.length - 4; i++){
      michis = michis + "#";
  }

  stringFinal = michis + creditCardNumber.substring(creditCardNumber.length - 4, creditCardNumber.length);
  //console.log(stringFinal);
  return stringFinal
},

};

  export default validator;

  