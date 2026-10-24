let client = "Awa";
let codeduplat = 2;
let montantverse = 5000; 

switch(codeduplat)
{ case 1 : 
    console.log(`Prix du plat : 1500 FCFA`);
    break;
case 2 :
    console.log(`Prix du plat : 2000 FCFA`);
    break;
case 3 :
    console.log(`Prix du plat : 1000 FCFA`);
    break; 
default:
    console.log(`Plat non proposé`)
}
function calculertotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
let totalpaye = calculertotal(2000,6)
console.log(totalpaye)
