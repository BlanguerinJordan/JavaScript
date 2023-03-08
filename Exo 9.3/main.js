function Hello(){
    var madiv = document.getElementsByClassName("salut");
    for(var i=0;i<madiv.length;i++){
        madiv[i].innerHTML = "Hello";
    }
};