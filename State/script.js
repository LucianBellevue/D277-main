// JavaScript code for email verification
document.addEventListener('DOMContentLoaded', function () {
    const emailField1 = document.getElementById('email1');
    const emailField2 = document.getElementById('email2');

    emailField1.addEventListener('input', function () {
        if (emailField1.value !== emailField2.value) {
            emailField2.setCustomValidity('Emails must match');
        } else {
            emailField2.setCustomValidity('');
        }
    });
    emailField2.addEventListener('input', function () {
        if (emailField1.value !== emailField2.value) {
            emailField2.setCustomValidity('Emails must match');
        } else {
            emailField2.setCustomValidity('');
        }
    });
});
