function botDetectionTextOnclick(){
    let botClick = document.getElementById("bot-detection-text-onclick");

    let anchorTag = document.getElementById("anchor-tag");
    
    botClick.style.display = "block";
    anchorTag.style.display = "none";}

function formValidation1(){
        let emailInput = document.getElementById("email-1");
        let form = document.getElementById("membership-form-1");

        if(emailInput.value === "" || emailInput.value === null){
            alert("Please enter your email address");
            return false;
        }
        
        alert("Membership form submitted successfully");
        form.reset(); // Reset the form after successful submission
        return false; // Prevent form submission and page refresh
}

function formValidation2(){
        let emailInput = document.getElementById("email-2");
        let form = document.getElementById("membership-form-2");

        if(emailInput.value === "" || emailInput.value === null){
            alert("Please enter your email address");
            return false;// wont proceed to the next line if conditon is true
        }
        
        alert("Membership form submitted successfully");
        form.reset(); // Reset the form after successful submission
        return false; // Prevent form submission and page refresh
}