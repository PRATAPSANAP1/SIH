document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("authForm");
    const roleSelect = document.getElementById("roleSelect");
    const langSelect = document.getElementById("langSelect");

    // Handle form submission
    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const role = roleSelect.value;
        const userId = document.getElementById("userId").value;
        const password = document.getElementById("password").value;

        // In a real application, you'd validate credentials here.
        // This is a demo; it accepts any input.
        alert(translations[langSelect.value].loginSuccess);

        // Redirect to the appropriate dashboard based on the selected role
        if (role === "candidate") {
            window.location.href = "candidate.html";
        } else if (role === "company") {
            window.location.href = "company.html";
        } else if (role === "government") {
            window.location.href = "government.html";
        }
    });

    // Event listener for language change
    langSelect.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        // Save the user's language preference to local storage
        localStorage.setItem('appLang', selectedLang);
        // Reload the page to apply all language changes from common.js
        window.location.reload(); 
    });
});