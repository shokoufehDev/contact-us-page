const $ = document

// mobile menu //

const hamburgerMenu = $.querySelector('.hamburger__icon')
const closeIcon = $.querySelector('.close__icon')
const navList = $.querySelector('.nav__list')
const navitem = $.querySelectorAll('.nav__item')
const nav = $.querySelector('.nav')
let navOpen = false;

hamburgerMenu.addEventListener('click', () => {

    nav.style.display = 'block'
    closeIcon.style.display = 'block'
    navList.classList.add('mobile__mode')
    navitem.forEach((li) => {
        li.classList.add('li__mobile__mode')
    })

    if (navOpen) {
        navList.classList.remove("mobile__menu--open")
        navOpen = false
    } else {
        navList.classList.add("mobile__menu--open")
        navOpen = true
    }
})


closeIcon.addEventListener('click', () => {
    nav.style.display = 'none'
    closeIcon.style.display = 'none'
    navList.classList.remove('mobile__mode')
    navitem.forEach((li) => {
        li.classList.remove('li__mobile__mode')
    })

    if (navOpen) {
        navList.classList.remove("mobile__menu--open")
        navOpen = false
    } else {
        navList.classList.add("mobile__menu--open")
        navOpen = true
    }
})


// form validation //

$.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // name
    const nameInput = $.getElementById("name");
    const nameError = $.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        isValid = false;
        nameError.style.display = "block";
        nameInput.classList.add("invalid");
    } else {
        nameError.style.display = "none";
        nameInput.classList.remove("invalid");
    }

    // phone
    const phoneInput = $.getElementById("phone");
    const phoneError = $.getElementById("phoneError");
    const phonePattern = /^09\d{9}$/;
    if (phoneInput.value.trim() === "") {
        isValid = false;
        phoneError.style.display = "block";
        phoneInput.classList.add("invalid");
    } else if (!phonePattern.test(phoneInput.value)) {
        isValid = false;
        phoneError.style.display = "block";
        phoneInput.classList.add("invalid");
        phoneError.innerText = "لطفا شماره تماس معتبر وارد کنید.\n";
    } else {
        phoneError.style.display = "none";
        phoneInput.classList.remove("invalid");
    }


// email
    const emailInput = $.getElementById("email");
    const emailError = $.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === "") {
        isValid = false;
        emailError.style.display = "block";
        emailInput.classList.add("invalid");
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.classList.add("invalid");
        isValid = false;
        emailError.innerText = "لطفا ایمیل معتبر وارد کنید.\n";
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("invalid");
    }

    // subject
    const subjectInput = $.getElementById("subject");
    const subjectError = $.getElementById("subjectError");
    if (subjectInput.value.trim() === "") {
        isValid = false;
        subjectError.style.display = "block";
        subjectInput.classList.add("invalid");
    } else {
        subjectError.style.display = "none";
        subjectInput.classList.remove("invalid");
    }

    // description
    const descriptionInput = $.getElementById("description");
    const descriptionError = $.getElementById("descriptionError");
    if (descriptionInput.value.trim() === "") {
        isValid = false;
        descriptionError.style.display = "block";
        descriptionInput.classList.add("invalid");
    } else {
        descriptionError.style.display = "none";
        descriptionInput.classList.remove("invalid");
    }
    
function emptyInputs () {
    nameInput.value = ""
    phoneInput.value = ""
    emailInput.value = ""
    subjectInput.value = ""
    descriptionInput.value = ""
}
    const submitResult = $.querySelector('.submit__result')

    if (isValid) {
        submitResult.style.display = "block"
        emptyInputs()
    } else {
        submitResult.style.display = "block"
        submitResult.innerText = "لطفا خطاهای موجود را رفع کنید"
        submitResult.style.color = "red"
        emptyInputs()
    }
});
