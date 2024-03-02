document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Validation function
    function validateForm() {
        let errors = [];

        if (fullName.value.length < 5) {
            errors.push('Full Name must not be less than 5 characters.');
        }
        if (!email.value.includes('@')) {
            errors.push('Enter a correct email.');
        }
        if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10) {
            errors.push('Enter a valid phone number.');
        }
        if (password.value.toLowerCase() === 'password' || password.value.length < 8 || password.value === fullName.value) {
            errors.push('Password is not strong.');
        }
        if (password.value !== confirmPassword.value) {
            errors.push('Passwords do not match.');
        }

        // Display errors or submit form
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        return true;
    }

    // Submit event listener
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        if (validateForm()) {
            // Proceed with form submission or AJAX call here
            alert('Form submitted successfully!');
        }
    });
});
