// view passwored 
function viewPassword() {
    var x = document.getElementById("viewMe");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// clean input field
 cleanText = ()=>{
    document.getElementById(
        'clean1').value = ''
 }