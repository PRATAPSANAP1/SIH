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

        localStorage.setItem('appLang', selectedLang);
    
        window.location.reload(); 
    });
});