var monbutton = document.getElementById("button");
monbutton.addEventListener("click",Hello);

function Hello(){
    var madiv = document.getElementsByName("salut");
    
    madiv.forEach(element => {
        element.innerHTML = "Hello";
    });
};
