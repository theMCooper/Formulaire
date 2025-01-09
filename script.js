// Déclaration d'un objet pour stocker les données utilisateur
const formData = {
    firstName: null,
    lastName: null,
    email: null,
};

// Références des éléments HTML
const form = document.getElementById("mon_form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");

const errorName = document.getElementById("error_name");
const errorLastName = document.getElementById("error_lastname");
const errorEmail = document.getElementById("error_email");

// Fonction pour valider un email
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Mise à jour des données en temps réel
firstNameInput.addEventListener("input", (e) => {
    formData.firstName = e.target.value;
    if (formData.firstName) {
        errorName.style.display = "none";
        firstNameInput.classList.remove("error");
    }
});

lastNameInput.addEventListener("input", (e) => {
    formData.lastName = e.target.value;
    if (formData.lastName) {
        errorLastName.style.display = "none";
        lastNameInput.classList.remove("error");
    }
});

emailInput.addEventListener("input", (e) => {
    formData.email = e.target.value;
    if (validateEmail(formData.email)) {
        errorEmail.style.display = "none";
        emailInput.classList.remove("error");
    }
});

// Validation lors de la soumission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!formData.firstName) {
        errorName.style.display = "block";
        firstNameInput.classList.add("error");
        isValid = false;
    }

    if (!formData.lastName) {
        errorLastName.style.display = "block";
        lastNameInput.classList.add("error");
        isValid = false;
    }

    if (!validateEmail(formData.email)) {
        errorEmail.style.display = "block";
        emailInput.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        alert("Formulaire soumis avec succès !");
        console.log("Données utilisateur :", formData);
    }
});

