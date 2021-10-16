//Reto 1
let mes = "";
let dia = 0

function horoscopo (dia,mes)
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
let pais ="Francia"
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

 //Reto 3 
  function impares(n)
  {
let impares = new Array
for (let i=1; i<=n;i+=2)
    {
        impares[i] = i
    }
    return impares
  }
console.log(impares(10));

//Reto 4 
function reto4(array)
{
let alReves = array.reverse()
console.log(alReves);}
reto4(["casa","hotel","hostal","albergue"])

//Reto 5 
function reto5(colores)
{
let arcoiris =["rojo","naranja","amarillo",
    "violeta","verde","azul","añil"]
let i=0
{  
    while (i<arcoiris.length)
    {
        colores[i]==arcoiris[i]
        i++
    }
    console.log(colores[i].indexOf(arcoiris[i]))
}
}
reto5(["amarillo","marron","verde"]);


// Reto 6
  function par(pares)
  {
  const even = (element)=> element %2 === 0
    console.log(pares.some(even))
}
par([3,2,7])


//Reto 7 
function letraM (nombres)
{
    const m = (value) => value =="M"
    console.log(nombres.every(m))
}
letraM(["Patricia","Juan","Maria"])

//Reto 8
function suma (array)
{
    array=["Patricia","Juan","Maria"]
    let suma =0
    for ( let i=0; i<array.length;i++)
  {suma += array[i].length
    
  }
  console.log(suma)
}

suma(["Patricia","Juan","Maria"])

//Reto 9
function numberPar (number)
{
   if (number %2 == 0) 
   {
     console.log("el numero es par")
   }
   else console.log("el numero es impar")
}
numberPar(4)
numberPar(5)
//Reto 10;
function sumaArray (array)
{
    let suma =0
    for ( let i=0; i<array.length;i++)
  {suma += array[i].length
   
  }   
  
  console.log(suma) 
   if (suma%2 == 0)
    {
        console.log("el número es par");
    }
    else console.log("el número es impar")
}
sumaArray(["casa","coche","ciudad","cesta"]);
sumaArray(["barco","baca","bicicleta","balon",
            "bisiesto","Brasil"]);
sumaArray(["Venezuela","veneno","voltaje"]);
