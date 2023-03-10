var body =document.body;
//Exercice 1
var monrectangle = document.getElementById("airrectangle");
monrectangle.addEventListener("click",AirRectangle);

function AirRectangle(event)
{
   let longueur=prompt("Saisir une longueur");
   let largeur = prompt("Saisir une largeur");
   let perimetre = longueur*2 + largeur*2;
   let air = longueur*largeur;
   let madiv = document.createElement("div");
   madiv.innerHTML="air : "+air+" | perimètre : "+perimetre;
   monrectangle.insertAdjacentElement("afterend",madiv);
   monrectangle.removeEventListener("click",AirRectangle);
}

//Exercice 2
var moncercle = document.getElementById("aircercle");
moncercle.addEventListener("click",AirCercle);

function AirCercle(event)
{
   let longueur=prompt("Saisir une longueur");
   let air = ((longueur/2)*(longueur/2))*Math.PI;
   let perimetre = longueur*Math.PI;
   let madiv = document.createElement("div");
   madiv.innerHTML = "air : "+air+" | perimètre : "+perimetre;
   moncercle.insertAdjacentElement("afterend",madiv);
   moncercle.removeEventListener("click",AirCercle);
}

//Exercice 3
var a = 3;
var b = 2;
var mamultiplication = document.getElementById("multiplication");
mamultiplication.addEventListener("click",AfficherMultiplication);

function AfficherMultiplication(event)
{
    let multiplepara = Multiplie(a);
    let multipleparb = Multiplie(b);
    let multiplenoparam = Multiplie();
    let madiv1 = document.createElement("div");
    let madiv2 = document.createElement("div");
    let madiv3 = document.createElement("div");
    madiv1.innerHTML = "Multiplication par "+a+" = "+multiplepara;
    madiv2.innerHTML = "Multiplication par "+b+" = "+multipleparb;
    madiv3.innerHTML = "Multiplication sans paramètre = "+multiplenoparam;
    mamultiplication.insertAdjacentElement("afterend",madiv3);
    mamultiplication.insertAdjacentElement("afterend",madiv2);
    mamultiplication.insertAdjacentElement("afterend",madiv1);
    mamultiplication.removeEventListener("click",AfficherMultiplication);
}

function Multiplie(x=8)
{
    return x*3;
}

//Exercice 4
var tab = [-2,1,4];
var monaddition = document.getElementById("addition");
monaddition.addEventListener("click",AfficherAddition);

function AfficherAddition(event)
{
    for (let i=tab.length-1; i>=0;i--)
    {
        result=Addition(tab[i]);
        let madiv = document.createElement("div");
        madiv.innerHTML = tab[i]+" + 2 = "+result;
        monaddition.insertAdjacentElement("afterend",madiv);
        monaddition.removeEventListener("click",AfficherAddition);
    }
}

function Addition(x)
{
    return x+2;
}

//Exercice 5
var maboucle1 = document.getElementById("boucle1");
var maboucle2 = document.getElementById("boucle2");
var madivboucle = document.getElementById("divboucle");
maboucle1.addEventListener("click",Boucle);
maboucle2.addEventListener("click",Boucle2);

function Boucle(event)
{
    let tab = [];
    for (let i=1;i<=3;i++)
    {
        tab[i]= i;
        tab[i]*=tab[i];
    }
    let montableau= document.createElement("table");
    let monbodytable = document.createElement("tbody");
    let maligne = document.createElement("tr");
    for(let i=1;i<=tab.length-1;i++)
    {
        let macolone = document.createElement("td");
        macolone.innerHTML = tab[i];
        maligne.appendChild(macolone);
    }
    monbodytable.appendChild(maligne);
    montableau.appendChild(monbodytable);
    montableau.setAttribute("border","2");
    maboucle1.insertAdjacentElement("afterend",montableau);
    maboucle1.removeEventListener("click",Boucle);
}

function Boucle2()
{
    let tailletab = prompt("Entrer une taille de tableau");
    let tab = [];
    for (let i=1;i<=tailletab;i++)
    {
        tab[i]= i;
        tab[i]*=tab[i];
    }
    let montableau= document.createElement("table");
    let monbodytable = document.createElement("tbody");
    let maligne = document.createElement("tr");
    for(let i=1;i<=tab.length-1;i++)
    {
        let macolone = document.createElement("td");
        macolone.innerHTML = tab[i];
        maligne.appendChild(macolone);
    }
    monbodytable.appendChild(maligne);
    montableau.appendChild(monbodytable);
    montableau.setAttribute("border","2");
    maboucle2.insertAdjacentElement("afterend",montableau);
    maboucle2.removeEventListener("click",Boucle2);
}

//Exercice 6
