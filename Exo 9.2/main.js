var monbutton = document.getElementById("button");
monbutton.addEventListener("click",Hello);

function Hello(){
    var madiv = document.getElementsByTagName("div");
    
    for(var i=0;i<madiv.length;i++){
        madiv[i].innerHTML = "Hello";
    } 
};