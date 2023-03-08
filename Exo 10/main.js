var madivclick = document.getElementById("madivclick");
madivclick.addEventListener("click",ChangeClass);
var madivsurvole = document.getElementById("madivsurvole");
madivsurvole.addEventListener("mouseover",Changevisu);
function ChangeClass(evenement)
{
        evenement.target.className = "newStyle";
};
function Changevisu(evenement)
{
    evenement.target.style.visibility ="hidden";
};