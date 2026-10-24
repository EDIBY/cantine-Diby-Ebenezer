let client = "Awa"; // nom du client
let codeduplat = 3; // code du plat
let montantverse = 4000; // le montant remi par le client


switch(codeduplat) // sert a selectionné le pla
{ case 1 : 
    console.log(`Prix du plat : 1500 FCFA`); // Sortie si plat Attiéké-poisson commandé
    break;
case 2 :
    console.log(`Prix du plat : 2000 FCFA`); // Sortie si plat Riz-poulet commandé

    break;
case 3 :
    console.log(`Prix du plat : 1000 FCFA`); //Sortie si plat Alloco-oeuf commandé
    break; 
default:
    console.log(`Plat non proposé`) // Sortie si aucun plat commandé
}
function calculertotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
} // fonction calculant le montant a payé.
let totalpaye = calculertotal(1000,4)
console.log(`Total payé : ${totalpaye} FCFA`)
let monnaierendu = montantverse - totalpaye // variable qui permet le calcul la monnaie rendu
let manquant = montantverse - totalpaye    // variable qui permet calcul le montant manquant
let totalportion =3 // variable qui declare le nombre de portion
for(let portion = 1; portion <= totalportion; portion++){ // affiche les portion et nom client 
    console.log(`Portion n° ${portion}, code du plat ${codeduplat}, commandé par ${client} `)
}
    if(montantverse > totalpaye){
      console.log(`La monnaie rendu est  ${monnaierendu} FCFA`); // calcul la monnaie rendue
    }  
    else {
        console.log(`Le montant manquant est  ${manquant} FCFA`); // calcul le montant manquant
    }
   
