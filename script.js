function clearErrors() {
    const errors = document.getElementsByClassName('formerror');
    for (const item of errors) {
        item.innerHTML = '';
    }
}

function setError(id, error) {
    const element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    element.getElementsByClassName('formerror')[0].style.color = 'red'; // Set error text color to red
}

function validateName(name) {
    if (name.length < 5) {
        setError('name', '*Length of name is too short');
        return false;
    }

    if (name.toLowerCase() === 'password' || name.toLowerCase() === document.forms['myForm']['fpass'].value.toLowerCase()) {
        setError('name', '*Name cannot be "password" or the same as the password');
        return false;
    }

    return true;
}

function validateEmail(email) {
    if (!email.includes('@')) {
        setError('email', '*Enter a valid email address');
        return false;
    }

    return true;
}

function validatePhone(phone) {
    if (phone === '123456789' || phone.length !== 10) {
        setError('phone', '*Enter a valid 10-digit phone number');
        return false;
    }

    return true;
}

function validatePassword(password, cpassword) {
    if (password.toLowerCase() === 'password' || password.toLowerCase() === document.forms['myForm']['fname'].value.toLowerCase() || password.length < 8) {
        setError('pass', '*Password should be strong');
        return false;
    }

    if (password !== cpassword) {
        setError('cpass', '*Password and Confirm password should match');
        return false;
    }

    return true;
}

function validateForm() {
    clearErrors();

    const nameField = document.forms['myForm']['fname'];
    const emailField = document.forms['myForm']['femail'];
    const phoneField = document.forms['myForm']['fphone'];
    const passwordField = document.forms['myForm']['fpass'];
    const cpasswordField = document.forms['myForm']['fcpass'];

    const name = nameField.value;
    const email = emailField.value;
    const phone = phoneField.value;
    const password = passwordField.value;
    const cpassword = cpasswordField.value;

    if (!nameField.validity.valid || !validateName(name)) {
        return false;
    }

    if (!emailField.validity.valid || !validateEmail(email)) {
        return false;
    }

    if (!phoneField.validity.valid || !validatePhone(phone)) {
        return false;
    }

    if (!passwordField.validity.valid || !validatePassword(password, cpassword)) {
        return false;
    }


    alert('Form submitted successfully!'); 

    return true; // Prevent form submission
}
