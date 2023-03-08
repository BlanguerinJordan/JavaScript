function Hello(texte){
    var madiv = document.getElementsByClassName("salut");
    for(var i=0;i<madiv.length;i++){
        madiv[i].innerHTML = texte;
    }
      
    
}
Hello("Hello");