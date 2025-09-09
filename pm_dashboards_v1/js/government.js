document.addEventListener("DOMContentLoaded", () => {
    const overviewLink = document.getElementById("overviewLink");
    const allInternshipsLink = document.getElementById("allInternshipsLink");
    const allCandidatesLink = document.getElementById("allCandidatesLink");
    
    const overviewSection = document.getElementById("overviewSection");
    const allInternshipsSection = document.getElementById("allInternshipsSection");
    const allCandidatesSection = document.getElementById("allCandidatesSection");

    const totalInternshipsCount = document.getElementById("totalInternshipsCount");
    const totalCandidatesCount = document.getElementById("totalCandidatesCount");
    const totalApplicationsCount = document.getElementById("totalApplicationsCount");

    const allInternshipsList = document.getElementById("allInternshipsList");
    const allCandidatesList = document.getElementById("allCandidatesList");

    const profileBtn = document.getElementById("profileBtn");
    const profileDropdown = document.getElementById("profileDropdown");
    const logoutBtn = document.getElementById("logoutBtn");

    // Function to update summary statistics
    function updateStats() {
        const totalInternships = internships.length;
        const totalCandidates = candidates.length;
        // In a real application, you would fetch this from a backend.
        // For this prototype, we'll use a hardcoded value.
        const totalApplications = 27; 

        totalInternshipsCount.textContent = totalInternships;
        totalCandidatesCount.textContent = totalCandidates;
        totalApplicationsCount.textContent = totalApplications;
    }

    // Function to render all internships
    function renderAllInternships() {
        const currentLang = localStorage.getItem('appLang') || 'en';
        const currentTranslations = translations[currentLang] || translations.en;
        allInternshipsList.innerHTML = '';
        internships.forEach(internship => {
            const card = document.createElement("div");
            card.className = "internship-card";
            card.innerHTML = `
                <h3>${internship.title}</h3>
                <p><strong>${currentTranslations.companyLabel}:</strong> ${internship.company}</p>
                <div class="meta">
                    <span><strong>${currentTranslations.locationLabel}:</strong> ${internship.location}</span>
                    <span><strong>${currentTranslations.stipendLabel}:</strong> ${internship.stipend}</span>
                    <span><strong>${currentTranslations.sectorLabel}:</strong> ${internship.sector}</span>
                    <span><strong>${currentTranslations.skillsLabel}:</strong> ${internship.skills.join(', ')}</span>
                </div>
            `;
            allInternshipsList.appendChild(card);
        });
    }

    // Function to render all candidates
    function renderAllCandidates() {
        const currentLang = localStorage.getItem('appLang') || 'en';
        const currentTranslations = translations[currentLang] || translations.en;
        allCandidatesList.innerHTML = '';
        candidates.forEach(candidate => {
            const card = document.createElement("div");
            card.className = "candidate-card";
            card.innerHTML = `
                <h3>${candidate.name}</h3>
                <p><strong>${currentTranslations.streamLabel}:</strong> ${candidate.stream}</p>
                <div class="meta">
                    <span><strong>${currentTranslations.emailLabel}:</strong> ${candidate.email}</span>
                    <span><strong>${currentTranslations.mobileLabel}:</strong> ${candidate.mobile}</span>
                    <span><strong>${currentTranslations.passOutYearLabel}:</strong> ${candidate.year}</span>
                    <span><strong>${currentTranslations.skillsLabel}:</strong> ${candidate.skills.join(', ')}</span>
                </div>
            `;
            allCandidatesList.appendChild(card);
        });
    }

    // --- Navigation Logic ---
    function setActiveLink(link) {
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    }

    function showSection(section) {
        document.querySelectorAll('.content-item').forEach(item => item.classList.add('hidden'));
        section.classList.remove('hidden');
    }
    
    // Event listeners for sidebar navigation
    overviewLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveLink(overviewLink);
        showSection(overviewSection);
        updateStats();
    });

    allInternshipsLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveLink(allInternshipsLink);
        showSection(allInternshipsSection);
        renderAllInternships();
    });

    allCandidatesLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveLink(allCandidatesLink);
        showSection(allCandidatesSection);
        renderAllCandidates();
    });

    // Profile dropdown logic
    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", (e) => {
        if (!e.target.closest(".profile-dropdown")) {
            profileDropdown.style.display = "none";
        }
    });

    // Logout
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const currentLang = localStorage.getItem('appLang') || 'en';
        alert(translations[currentLang].logout);
        window.location.href = "login.html";
    });

    // Initial load
    updateStats();
});