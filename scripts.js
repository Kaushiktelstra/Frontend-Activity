function validateCustomerForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.");
        return false;
    }

   
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be a valid 10-digit number.");
        return false;
    }

  
    alert("Registration Successful!");
    setTimeout(() => {}, 1000);
    return true;
}

function validateFeedbackForm() {
    const feedback = document.getElementById('feedback').value;

   
    if (feedback.length < 10) {
        alert("Feedback must be at least 10 characters long.");
        return false;
    }

    // If validation passes
    alert("Feedback Submitted Successfully!");
    return true;
}
