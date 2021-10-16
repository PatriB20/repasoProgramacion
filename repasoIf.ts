//Reto 1

function horoscopo (dia:number,mes:string)
{ if ((dia >= 21 && mes == "marzo") || ( dia<= 20 && mes == "abril" ) )
    {
        console.log("Aries");
    }
    else if ((dia >= 21 && mes == "abril") ||( dia<= 20 && mes == "mayo" ) )
    {
        console.log("Tauro");
    }
    else if ((dia >= 22 && mes == "mayo") ||( dia<= 22 && mes == "junio" ) )
    {
        console.log("Géminis");
    }
    else if ((dia >= 23 && mes == "junio") ||( dia<= 23 && mes == "julio" ) )
    {
        console.log("Cancer");
    }
    else if ((dia >= 24 && mes == "julio") ||( dia<= 23 && mes == "agosto" ) )
    {
        console.log("Leo");
    }
    else if ((dia >= 24 && mes == "agosto") ||( dia<= 23 && mes == "septiembre" ) )
    {
        console.log("Virgo");
    }
    else if ((dia >= 24  && mes == "septiembre") ||( dia<= 23 && mes == "octubre" ) )
    {
        console.log("Libra");
    }
    else if ((dia >= 24 && mes == "octubre") ||( dia<= 22 && mes == "noviembre" ) )
    {
        console.log("Escorpio");
    }
    else if ((dia >= 23 && mes == "noviembre") ||( dia<= 21 && mes == "diciembre" ) )
    {
        console.log("Sagitario");
    }
    else if ((dia >= 22 && mes == "diciembre") ||( dia<= 20 && mes == "enero" ) )
    {
        console.log("Capricornio");
    }
    else if ((dia >= 21 && mes == "enero") ||( dia<= 19 && mes == "febrero" ) )
    {
        console.log("Acuario");
    }
    else if ((dia >= 20 && mes == "febrero") ||( dia<= 20 && mes == "marzo" ))
    {
        console.log("Piscis");
    }
}
horoscopo(20,"julio")

//Reto 2 
let pais:string ="China"
let continente
 switch (pais)
 {
    case ("Australia"|| "Polinesia Francesa"||
     "Islas Salomon"||"Papúa Nueva Guinea"):
        console.log("Oceania")
      break;
    case ("Marruecos"||"Nigeria"|| "Kenia"||
    "Etiopia"|| "Tanzania" ):
        console.log("Africa");
        break;
    case ("España"|| "Portugal"|| "Francia"||
    "Alemania"|| "Suiza"):
        console.log("Europa");
        break
    case ("China"|| "Japon"|| "Taiwan"|| 
    "Tailandia"|| "India"):
       console.log("Asia");
        break
    case ("Estados Unidos"|| "Colombia"|| "Mexico"||
    "Perú"|| "Venezuela"):
            console.log("America")
        break;

 }
 console.log()

//Reto 9
function numberPar (number:number)
{
   if (number %2 == 0) 
   {
     console.log("el numero es par")
   }
   else console.log("el numero es impar")
}
numberPar(4)
numberPar(5)
