
function Login(){
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();

    if(email == "" || password == ""){
        alert("Please fill all the fields");
        return false;
    }

    alert("Login Successfully");
    return false;
}

function displayhiddenText(){
    let hiddenText = document.getElementById("hidden-text");
    let learnMore = document.getElementById("learn-more");
    
    hiddenText.style.display = "block";
    learnMore.style.display = "none";
}