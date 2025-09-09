document.addEventListener("DOMContentLoaded", () => {
    const internshipCardsContainer = document.getElementById("internshipCards");
    const dashboardContent = document.getElementById("dashboardContent");
    const editProfileSection = document.getElementById("editProfileSection");
    const profileBtn = document.getElementById("profileBtn");
    const profileDropdown = document.getElementById("profileDropdown");
    const editProfileLink = document.getElementById("editProfileLink");
    const internshipsLink = document.getElementById("internshipsLink");
    const logoutBtn = document.getElementById("logoutBtn");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const profileForm = document.getElementById("profileForm");

    // Profile photo elements
    const mainProfilePhoto = document.getElementById("mainProfilePhoto");
    const profilePhotoPreview = document.getElementById("profilePhotoPreview");
    const photoInput = document.getElementById("photoInput");
    const changePhotoBtn = document.getElementById("changePhotoBtn");
    const removePhotoBtn = document.getElementById("removePhotoBtn");
    const cancelEditBtn = document.getElementById("cancelEditBtn"); // New button element

    // The 'internships' array is now available globally from data.js.
    
    // Function to render internship cards with translations
    function renderInternshipCards(internshipList, lang) {
        internshipCardsContainer.innerHTML = '';
        const currentTranslations = translations[lang] || translations.en;
        
        internshipList.forEach(internship => {
            const card = document.createElement("div");
            card.className = "internship-card";
            card.innerHTML = `
                <img src="${internship.photo}" alt="Internship photo" class="card-image">
                <div class="card-content">
                    <h3>${internship.title}</h3>
                    <p>${internship.description}</p>
                    <div class="meta">
                        <span><b>${currentTranslations.companyLabel}</b>: ${internship.company}</span>
                        <span><b>${currentTranslations.locationLabel}</b>: ${internship.location}</span>
                        <span><b>${currentTranslations.stipendLabel}</b>: ${internship.stipend}</span>
                        <span><b>${currentTranslations.sectorLabel}</b>: ${internship.sector}</span>
                    </div>
                </div>
            `;
            internshipCardsContainer.appendChild(card);
        });
    }

    // Function to filter internships based on search query
    function filterInternships(query) {
        const lowerCaseQuery = query.toLowerCase();
        const candidateInternships = internships.filter(internship => internship.role === 'Candidate');

        return candidateInternships.filter(internship => {
            const searchFields = [
                internship.title,
                internship.company,
                internship.location,
                internship.sector,
                ...(internship.skills || [])
            ].join(" ").toLowerCase();

            return searchFields.includes(lowerCaseQuery);
        });
    }

    // --- Event Listeners and Logic ---

    // Toggle profile dropdown
    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    window.addEventListener("click", (e) => {
        if (!e.target.closest(".profile-dropdown")) {
            profileDropdown.style.display = "none";
        }
    });

    // Show Edit Profile form
    editProfileLink.addEventListener("click", (e) => {
        e.preventDefault();
        dashboardContent.classList.add("hidden");
        editProfileSection.classList.remove("hidden");
        profileDropdown.style.display = "none";
    });

 

    // Handle search action
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        const filteredList = filterInternships(query);
        const currentLang = localStorage.getItem('appLang') || 'en';
        renderInternshipCards(filteredList, currentLang);
    });

    // Handle logout action
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const currentLang = localStorage.getItem('appLang') || 'en';
        alert(translations[currentLang].logout);
        window.location.href = "login.html";
    });

    // Handle photo change
    changePhotoBtn.addEventListener("click", () => {
        photoInput.click();
    });

    photoInput.addEventListener("change", () => {
        const file = photoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePhotoPreview.src = e.target.result;
                mainProfilePhoto.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle photo removal
    removePhotoBtn.addEventListener("click", () => {
        const defaultPhoto = "";
        profilePhotoPreview.src = defaultPhoto;
        mainProfilePhoto.src = defaultPhoto.replace("150", "100");
    });

    // Handle profile form submission
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const currentLang = localStorage.getItem('appLang') || 'en';
        alert(translations[currentLang].profileUpdated);
        editProfileSection.classList.add("hidden");
        dashboardContent.classList.remove("hidden");
    });
    
    // Handle cancel button click
    cancelEditBtn.addEventListener("click", () => {
        editProfileSection.classList.add("hidden");
        dashboardContent.classList.remove("hidden");
    });

    // Initial render of all candidate internships on page load
    const currentLang = localStorage.getItem('appLang') || 'en';
    const initialList = internships.filter(internship => internship.role === 'Candidate');
    renderInternshipCards(initialList, currentLang);
});
