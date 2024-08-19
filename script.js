function changeText(){
    document.getElementById("myParagraph").innerText = "Text has been changed!";
}
function validateForm(){
    var input = document.forms["myForm"]["textInput"].value;
    if (input == "") {
        alert("Input must not be empty!");
        return false;
    }
}