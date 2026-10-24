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
let monnaierendu = montantverse - totalpaye
let manquant = montantverse - totalpaye

for(let portion = 1; portion >= 1; portion++){
    console.log(`Portion n° ${portion}, code du plat ${codeduplat}, commandé par ${client} `)
}
    if(montantverse > totalpaye){
      console.log(`La monnaie rendu est  ${monnaierendu}`);
    }  
    else if(montantverse < totalpaye){
        console.log(`Le montant manquant est  ${manquant}`);
    }
    else{
        console.log(`La facture a été réglé il n'y a pas de monnaie à rendre`);
    }

