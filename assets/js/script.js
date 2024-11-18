// =========================================================================
// Déclaration des variables                                               =
// =========================================================================
const REGEX_CODE_PRODUIT = /(([\d\w]){5}-){2,4}([\d\w]){5}/;
const listeProduits = {
    "Q1JBC-3ZPX8-TVHUH" : "Final Fantasy 1",
    "P3CJN-JNGJM-XYYT4" : "Contra",
    "2RCWA-XPRPX-GJHPR" : "The Legend of Zelda",
    "H4LS8-L1L3T-08D9X" : "Rygar",
    "KBZB7-PQYDY-D5TMZ-MUABS-JNGJM" : "Metroid",
    "VPTU1-9UZXA-X4ED4-F596J-XPRPX" : "Ninja Gaiden",
    "SUY17-21D57-5QYJU-UE6PN-HZ452" : "Kirby's Adventure"
};
const erreurValidation = {
    "terme" : "Vous devez accepter les termes de l’Accord de souscription Vapeur pour finaliser la transaction.",
    "formatInvalide" : "Le code produit que vous avez saisie est invalide, il ne respecte pas le format requis.",
    "produitInexistant" : "Aucun produit n'est associé au code de produit saisie."
};


// Code pour provoquer une animation sur le bouton Activer
const boutonActiver = document.querySelector('.bouton-activation');
boutonActiver.addEventListener('click', (e) => e.target.classList.add('bouton-click'));
boutonActiver.addEventListener('transitionend', (e) =>  e.target.classList.remove('bouton-click'));

/**
 * Recherche dans le tableau listeProduits un produit associé a un code de produit
 * @param {string} codeProduit Le code de produit à valider
 * @returns true si le produit existe dans le tableau
 */
function isProduitExiste(codeProduit) {
    return listeProduits[codeProduit.toString().toUpperCase()] ? true : false;
}

// =========================================================================
// Ajoutez votre code plus bas                                             =
// =========================================================================

const code = document.getElementById('cle-activation');
const terme = document.getElementById("declaration");
const texteDecla = document.querySelector(".label-declaration");
const erreur = document.getElementById("message-erreur");

function CodeValide(){
    let valide = false;
    if(REGEX_CODE_PRODUIT.test(code.value)&&isProduitExiste(code.value))
    {
        valide = true;
         
    }
    
    return valide;
    
}


function TermeAccepter(){
    let valide = false;
    if(terme.checked == true){
        valide = true;
        texteDecla.style.color = "#c6d4df";
    }
    else{
        texteDecla.style.color = "rgb(255, 153, 0)";
    }
    return valide;
}
function MessageErreur(){
    erreur.classList.add("hidden");
    if(!TermeAccepter()){
        erreur.classList.remove("hidden");
        erreur.innerText = "Vous devez accepter les termes de l’Accord de souscription Vapeur pour finaliser la transaction."
    }
    else if(!isProduitExiste(code.value)){
        erreur.classList.remove("hidden");
        erreur.innerText = "Aucun produit n'est associé au code de produit saisie."

    }
    else if(!CodeValide()){
        erreur.classList.remove("hidden");
        erreur.innerText = "Le code produit que vous avez saisie est invalide, il ne respecte pas le format requis."
 
    }
}

function Submit()
{
    MessageErreur();
    return CodeValide()&&TermeAccepter();   
}
