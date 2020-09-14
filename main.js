//ALGORITHME JEU DE NIM  ----- CELUI QUI GAGNE EST CELUI QUI JOUE EN DERNIER ----- LE JOUEUR JOUE EN PREMIER

let stick = [];
let player = "joueur";
let takeOff = 0;
let iaOff = 0;

for (let i = 0; i < 10; i++) { 
    stick.push('|');
}

console.log(stick.join(' ')); // affichage initial des 'allumettes'
console.log('Nombre d\'allumettes : ' + stick.length);

while(stick.length > 0){    //demande le nombre d'allumettes à retirer et les retire
    if(player === "joueur" && stick.length > 0){
        takeOff = parseInt(prompt("Joueur => retirer combien d'allumettes ? ")); //demande au joueur et converti en entier
        if(takeOff){ // vérifie si on a bien un nombre
            if(takeOff >= 1 && takeOff <= 3){
                if(takeOff <= stick.length){
                    for (let i = takeOff; i > 0; i--){
                        stick.pop();             
                    }
                    console.log('Nombre d\'allumettes à retirer :' + takeOff);
                    console.log(stick.join(' '));
                    console.log('Nombre d\'allumettes restantes : ' + stick.length);
                    player = "cpu";
                }else{
                    console.log("Vous ne pouvez pas retirer plus d'alumettes qu'il n'y en a !")
                }
            }else{
                console.log("Entrez un nombre entre 1 et 3");
            }
        }else{
            console.log('Ceci n\'est pas un nombre');
        }
    }
    if(player === "cpu" && stick.length > 0){
        iaOff = 4 - takeOff;    //on s'adapte pour retirer un complément de 4
        for (let n = 1; n <= 3; n++) {  //on essaie de laisser l'adversaire avec un multiple de 4; 
            if((stick.length - n) % 4 == 0){
                iaOff = n;
            }
        }
        if(stick.length <= 3){ // on prend tout le reste pour gagner
            iaOff = stick.length;
        }
        for (let i = iaOff; i > 0; i--){
            stick.pop();
        }
        console.log('Nombre d\'allumettes à retirer par l\'ordinateur :' + iaOff);
        console.log(stick.join(' '));
        console.log('Nombre d\'allumettes restantes : ' + stick.length);
        player = "joueur";
    }            
}

if(stick.length <= 0){
    if(player === "joueur"){
        player = "cpu"
    }else{
        player = "joueur"
    }
    console.log(player + ' a gagné ! ');
}


// L' ORDI GAGNE A 100% SI ON COMMENCE AVEC n*4 ALLUMETTES, PAS OBLIGE DE GAGNER SINON (EX : 10 Allumettes, Win = 2 => 2 => 2)