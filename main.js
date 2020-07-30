document.addEventListener('submit', e => {
    e.preventDefault();
    validateData();
});

function validateData() {
    const email = document.querySelector('#email');
    let emailAddress = email.value;
    let errorMessage = document.querySelector('.error-message');
    let successMessage = document.querySelector('.success-message');

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        email.classList.remove("error");
        email.classList.add("success");
        return (true)
    } else {
        email.classList.add("error");
        email.classList.remove("success");
        errorMessage.style.display = "block"
        successMessage.style.display = "none"
        return (false)
    }
};