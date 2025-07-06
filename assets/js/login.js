
function Login(){
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();
    let successToast = document.getElementById("successToast");
    let Toast = new bootstrap.Toast(successToast);
    document.querySelector("#successToast .toast-body").innerText = "Logged in successfully!";


    if(email == "" || password == ""){
        alert("Please fill all the fields");
        return false;
    }

    Toast.show();
    return false;
}

function displayhiddenText(){
    let hiddenText = document.getElementById("hidden-text");
    let learnMore = document.getElementById("learn-more");
    
    hiddenText.style.display = "block";
    learnMore.style.display = "none";
}