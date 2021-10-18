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
function paises(pais:string){
if (pais == "Australia"||pais == "Polinesia Francesa"||pais == "Islas Salomon"||pais == "Papúa Nueva Guinea")
{
    console.log("Oceania")
}
else if (pais == "Marruecos"||pais == "Nigeria"||pais == "Kenia"||pais == "Tanzania")
{
    console.log("Africa")
}
else if (pais == "España"||pais == "Portugal"||pais == "Francia"||pais == "Alemania")
{
    console.log("Europa")
}
else if(pais == "China"||pais == "Japon"||pais == "Taiwan"||pais == "Tailandia")
{
    console.log("Asia")
}
else if(pais == "Estados Unidos"||pais == "Colombia"||pais == "Peru"||pais == "Mexico")
{
    console.log("America")
}
}
paises("Nigeria")
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
