function botDetectionTextOnclick(){
    let botClick = document.getElementById("bot-detection-text-onclick");

    let anchorTag = document.getElementById("anchor-tag");
    
    botClick.style.display = "block";
    anchorTag.style.display = "none";}

function formValidation1(){
        let emailInput = document.getElementById("email-1");
        let form = document.getElementById("membership-form-1");
        let successToast = document.getElementById("successToast");
        let Toast = new bootstrap.Toast(successToast);

        if(emailInput.value === "" || emailInput.value === null){
            document.querySelector(".email-error").style.display = "block";
            return false;
        }
        
        

        Toast.show();
        form.reset(); // Reset the form after successful submission
        return false; // Prevent form submission and page refresh
}

function hideEmailError(){
    document.querySelector(".email-error").style.display = "none";
}

function hideEmailError1(){
    document.querySelector(".email-errorr").style.display = "none";
}


document.addEventListener('DOMContentLoaded', function(){
    let email = document.getElementById("email-1");
    email.addEventListener('input', hideEmailError);

    let emaill = document.getElementById("email-2");
    emaill.addEventListener('input', hideEmailError1);
});

function formValidation2(){
        let emailInput = document.getElementById("email-2");
        let form = document.getElementById("membership-form-2");
        let successToast = document.getElementById("successToast");
        let Toast = new bootstrap.Toast(successToast);

        if(emailInput.value === "" || emailInput.value === null){
            document.querySelector(".email-errorr").style.display = "block";
            return false;// wont proceed to the next line if conditon is true
        }

        Toast.show();
        
        form.reset(); // Reset the form after successful submission
        return false; // Prevent form submission and page refresh
}