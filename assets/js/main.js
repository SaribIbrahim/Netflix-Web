function botDetectionTextOnclick() {
  let botClick = document.getElementById("bot-detection-text-onclick");

  let anchorTag = document.getElementById("anchor-tag");

  botClick.style.display = "block";
  anchorTag.style.display = "none";
}

function formValidation1() {
  let emailInput = document.getElementById("email-1");
  let form = document.getElementById("membership-form-1");
  let successToast = document.getElementById("successToast");
  let Toast = new bootstrap.Toast(successToast);

  if (emailInput.value === "" || emailInput.value === null) {
    document.querySelector(".email-error p").textContent = "Please enter your email address";
    document.querySelector(".email-error").style.display = "block";
    return false;
  }
  

  // Email pattern regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    document.querySelector(".email-error p").textContent =
      "Please enter a valid email address.";
    document.querySelector(".email-error").style.display = "block";
    return false;
  }

  Toast.show();
  form.reset(); // Reset the form after successful submission
  return false; // Prevent form submission and page refresh
}

function hideEmailError() {
  document.querySelector(".email-error").style.display = "none";
}

function hideEmailError1() {
  document.querySelector(".email-errorr").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  let email = document.getElementById("email-1");
  email.addEventListener("input", hideEmailError);

  let emaill = document.getElementById("email-2");
  emaill.addEventListener("input", hideEmailError1);
});

function formValidation2() {
  let emailInput = document.getElementById("email-2");
  let form = document.getElementById("membership-form-2");
  let successToast = document.getElementById("successToast");
  let Toast = new bootstrap.Toast(successToast);

  if (emailInput.value === "" || emailInput.value === null) {
    document.querySelector(".email-errorr").textContent = "Please enter your email address";
    document.querySelector(".email-errorr").style.display = "block";
    return false;
  }
  

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    document.querySelector(".email-errorr").textContent =
      "Please enter a valid email address.";
    document.querySelector(".email-errorr").style.display = "block";
    return false;
  }

  Toast.show();

  form.reset(); // Reset the form after successful submission
  return false; // Prevent form submission and page refresh
}
