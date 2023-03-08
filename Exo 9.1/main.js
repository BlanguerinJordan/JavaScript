function Hello(){
    var madiv = document.getElementsByName("salut");
    madiv.forEach(element => {
        element.innerHTML = "Hello"
    });
};