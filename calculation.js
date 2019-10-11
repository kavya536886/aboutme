function convert(degree) {
    var x;
    if (degree == "C") {
        x = (document.getElementById("c").value )/3;
        document.getElementById("f").value = x;
    }
    else{
        x = (document.getElementById("f").value )*3 ;
    document.getElementById("c").value = x;
    }
    localStorage.setItem("degree",degree)
    localStorage.getItem("degree",degree)
    tot=convert(degree)
    document.getElementById("calculate").innerHTML= tot

    document.querySelector('#click to convert').addEventListener('onclick', convert(degree))
}