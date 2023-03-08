function Hello(texte){
    var madiv = document.getElementsByName("salut");
    madiv.forEach(element => {
        element.innerHTML = texte
    });
    
}
Hello("Hello");