const form = document.getElementById('myform')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('e-mail')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success')
}
const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');
 
    errorDisplay.innerText = '';
    input.classList.remove('error');
    input.classList.add('success')
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'First name is required')
    } else {
        setSuccess(firstname)       
    }

    if (lastnameValue === '') {
        setError(lastname, 'Last name is required')
    } else {
        setSuccess(lastname)       
    }

    if (emailValue === '') {
        setError(email, 'Email is required')
    } else {
        setSuccess(email)       
    }

    if (passwordValue === '') {
        setError(password, 'Password is required')
    } else {
        setSuccess(password)       
    }
};