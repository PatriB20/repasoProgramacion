//Reto 5 
function reto5(colores:string[])
{
let arcoiris =["rojo","naranja","amarillo",
    "violeta","verde","azul","añil"]
let i=0
 
    while (i<colores.length)
    {
    
        if (arcoiris.includes(colores[i])==true)
        {
            console.log(colores[i]+ " esta en el arcoiris")
        }
        else console.log(colores[i]+ " no esta en el arcoiris")
         i++
    }
    

}

reto5(["amarillo","marron","verde"]);
