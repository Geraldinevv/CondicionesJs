function toggleBorder() {
    var img = document.getElementById("ferrari1");

    if (img.style.border === "5px solid red") {
        img.style.border = "";
    } else {
        img.style.border = "5px solid red";
    }
}