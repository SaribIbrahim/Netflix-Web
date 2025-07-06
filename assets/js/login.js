
function Login(){
    let email = document.getElementById("login-email").value.trim();
    let emailDiv = document.querySelector(".login-email-div");
    let password = document.getElementById("login-password").value.trim();
    let passwordDiv = document.querySelector(".login-password-div");
    let successToast = document.getElementById("successToast");
    let Toast = new bootstrap.Toast(successToast);
    document.querySelector("#successToast .toast-body").innerText = "Logged in successfully!";

    // Check if both fields are empty first
    if(email == "" && password == ""){
        document.querySelector(".email-error").style.display = "block";
        document.querySelector(".password-error").style.display = "block";
        emailDiv.style.marginBottom = "2px";
        passwordDiv.style.marginBottom = "2px";
        return false;
    }

    // Check individual fields
    if(email == "" || email == null){
        document.querySelector(".email-error").style.display = "block";
        emailDiv.style.marginBottom = "2px";
        return false;
    }

    if(password == "" || password == null){
        document.querySelector(".password-error").style.display = "block";
        passwordDiv.style.marginBottom = "2px";
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

// Function to hide email error when user starts typing
function hideEmailError(){
    document.querySelector(".email-error").style.display = "none";
    document.querySelector(".login-email-div").style.marginBottom = "16px";
}

// Function to hide password error when user starts typing
function hidePasswordError(){
    document.querySelector(".password-error").style.display = "none";
    document.querySelector(".login-password-div").style.marginBottom = "16px";
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Email input event listeners
    let emailInput = document.getElementById("login-email");
    emailInput.addEventListener('input', hideEmailError);
    
    // Password input event listeners
    let passwordInput = document.getElementById("login-password");
    passwordInput.addEventListener('input', hidePasswordError);
});