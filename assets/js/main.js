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
            alert("Please enter your email address");
            return false;
        }

        Toast.show();
        form.reset(); // Reset the form after successful submission
        return false; // Prevent form submission and page refresh
}

function formValidation2(){
        let emailInput = document.getElementById("email-2");
        let form = document.getElementById("membership-form-2");
        let successToast = document.getElementById("successToast");
        let Toast = new bootstrap.Toast(successToast);

        if(emailInput.value === "" || emailInput.value === null){
            alert("Please enter your email address");
            return false;// wont proceed to the next line if conditon is true
        }

        Toast.show();
        
        form.reset(); // Reset the form after successful submission
        return false; // Prevent form submission and page refresh
}