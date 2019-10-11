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
}