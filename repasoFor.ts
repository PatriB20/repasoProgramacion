//Reto 3 
function impares(n:number)
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
function reto4(array:string[])
{
let alReves = array.reverse()
console.log(alReves);}
reto4(["casa","hotel","hostal","albergue"])

// Reto 6
function par(pares:number[])
{
const even = (element)=> element %2 === 0
  console.log(pares.some(even))
}
par([3,2,7])

//Reto 7 
function letraM (nombres:string[])
{
    const m = (value) => value =="M"
    console.log(nombres.every(m))
}
letraM(["Patricia","Juan","Maria"])

//Reto 8
function suma (array:string[])
{
    array=["Patricia","Juan","Maria"]
    let suma =0
    for ( let i=0; i<array.length;i++)
  {suma += array[i].length
    
  }
  console.log(suma)
}
suma(["Patricia","Juan","Maria"])
//Reto 10;
function sumaArray (array:string[])
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