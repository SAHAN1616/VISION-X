// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

const successPopup = document.getElementById("successPopup");

const closePopup = document.getElementById("closePopup");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get required values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();


    // Check required fields

    if (name === "") {

        alert("Please enter your name.");

        document.getElementById("name").focus();

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        document.getElementById("email").focus();

        return;
    }


    if (phone === "") {

        alert("Please enter your phone number.");

        document.getElementById("phone").focus();

        return;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        document.getElementById("email").focus();

        return;
    }


    // Phone validation

    const phonePattern =
        /^[0-9+\-\s]{10,15}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid phone number.");

        document.getElementById("phone").focus();

        return;
    }


    // Show success popup

    successPopup.classList.add("show");


    // Clear form

    contactForm.reset();

});
// ================= CLOSE POPUP =================

closePopup.addEventListener("click", function (event) {

    event.preventDefault();

    successPopup.classList.remove("show");

});