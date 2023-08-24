function generatePassword() {
    let length = document.getElementById("length").value;

    // Vérifier si la taille est négative ou supérieure à 33
    if (length < 0) {
        alert("Please enter a positive password length.");
        return; // Arrête la génération du mot de passe
    }

    // Limiter la taille maximale à 33
    if (length > 33) {
        alert("Password length cannot exceed 33 characters.");
        return; // Arrête la génération du mot de passe
    }

    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (document.getElementById("include-numbers").checked) {
        characters += "0123456789";
    }
    if (document.getElementById("include-symbols").checked) {
        characters += "!@#$%^&*()-_+{}[]|:;'<>,./?";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Afficher le mot de passe généré dans l'élément avec l'ID "password-result"
    document.getElementById("password-result").textContent = password;

    // Mettre à jour la valeur de l'élément avec l'ID "Password" (la lettre "P" en majuscule est importante ici)
    document.getElementById("Password").value = password;
}

// Fonction pour copier le mot de passe dans le presse-papiers
function copyPassword() {
    var copyText = document.getElementById("Password");
    copyText.select();
    document.execCommand("copy");
}

// Ajouter des gestionnaires d'événements pour les boutons
document.getElementById("generate-button").addEventListener("click", generatePassword);
document.getElementById("copy-button").addEventListener("click", copyPassword);
