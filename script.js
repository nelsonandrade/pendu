const mots=["ORANGE","POMME","BANANA","KIWI","POIRE","ANANAS"];//Mot pour tirage au sort
var quantiteError = 0;
var cont = 0;
var chances ="";

motsecreta = mots[Math.floor(Math.random() *6)];//pour tirage au sort
//variables pour canvas
var c = document.getElementById("pendu");
var ctx = c.getContext("2d");

//dessiner le poupée  
poteau();
barreTop();
bas();
trace();

window.onkeypress = touchePresse;//lire touche du clavier

function touchePresse() {
    if(!chances.includes(event.key) && motsecreta.includes((event.key).toUpperCase())) {//vérifie si la lettre est dans le mot secret
        adcChance();
        for (var i = 0; i < motsecreta.length; i++) {
            if (motsecreta[i] == (event.key).toUpperCase()){//cherche position de lettre
                ctx.font = "10px Arial";
                ctx.fillText((event.key).toUpperCase(), 20 + (10*i), 120);//affiche le lettre
                cont++;
            }
        }
    }else{
        adcChance();
        quantiteError++;
        dessinerPoupee(quantiteError);
    }
    finJeux();
}
function adcChance() {   //verifié si lettre est déjà choisi
    if (!chances.includes(event.key)) {
        chances = chances + event.key;
        ctx.font = "10px,Bold ";
        ctx.fillText("chances:" + chances.toUpperCase(), 20, 140);//affiche le lettres choisi
    }
} 
function finJeux() {
    if (quantiteError >= 6) {//vérifiez si vous avez atteint la limite des chances
        ctx.font = "1px, Bold";
        ctx.fillText("GAME OVER! Le Mot est: " + motsecreta, 100, 50);
        window.onkeypress = null;
        return;
    }
    if(cont == motsecreta.length) {// cas découvert le mot
        ctx.font = "10px";
        ctx.fillText("Vous avez gagné!", 100, 50);
        window.onkeypress = null;
        return;
    }
}   
    function poteau() {
        ctx.moveTo(10,10);
        ctx.lineTo(10,100);
        ctx.stroke();
    }
    function barreTop() {
        ctx.moveTo(10,10);
        ctx.lineTo(60,10);
        ctx.stroke();
    }
    function bas() {
        ctx.moveTo(60,10);
        ctx.lineTo(60,30);
        ctx.stroke();
    }
    function trace() {
        ctx.moveTo(20 , 90);
        ctx.lineTo(20 , 90);
        ctx.stroke();
        }
       

    function dessinerPoupee(quantiteError) {
        switch (quantiteError) {
            case 1:
               tete();
                break;
            case 2:
                corp();
                break;
            case 3:
               brasGouche();
                break;
            case 4:
                brasDroit();
                break;
            case 5:
               jambeGouche();
                break;
            case 6:
                jambeDroit();
                break;         

        }
    }

    function tete() {
        ctx.beginPath();
        ctx.arc(60, 40, 10, 0, 2* Math.PI);
        ctx.stroke();
    }
    function corp() {
        ctx.moveTo(60, 50);
        ctx.lineTo(60, 80);
        ctx.stroke();
    }
    function brasGouche() {
        ctx.moveTo(60, 60);
        ctx.lineTo(50, 70);
        ctx.stroke();
    }
    function brasDroit() {
        ctx.moveTo(60, 60);
        ctx.lineTo(70, 70);
        ctx.stroke();
    }
    function jambeGouche() {
        ctx.moveTo(60, 80);
        ctx.lineTo(50, 90);
        ctx.stroke();
    }
    function jambeDroit() {
        ctx.moveTo(60, 80);
        ctx.lineTo(70, 90);
        ctx.stroke();
    }