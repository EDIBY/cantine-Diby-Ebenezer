let client = "Awa";
let codeduplat = 1;
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
let totalpaye = calculertotal(1500,3)
console.log(`Total payé : ${totalpaye} FCFA`)
let monnaierendu = montantverse - totalpaye
let manquant = montantverse - totalpaye
let totalportion =3
for(let portion = 1; portion <= totalportion; portion++){
    console.log(`Portion n° ${portion}, code du plat ${codeduplat}, commandé par ${client} `)
}
    if(montantverse > totalpaye){
      console.log(`La monnaie rendu est  ${monnaierendu} FCFA`);
    }  
    else if(montantverse < totalpaye){
        console.log(`Le montant manquant est  ${manquant} FCFA`);
    }
    else{
        console.log(`Facture réglée, pas de monnaie à rendre`);
    }

