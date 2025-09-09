document.addEventListener("DOMContentLoaded", () => {
    const postInternshipLink = document.getElementById("postInternshipLink");
    const viewApplicantsLink = document.getElementById("viewApplicantsLink");
    const postInternshipSection = document.getElementById("postInternshipSection");
    const viewApplicantsSection = document.getElementById("viewApplicantsSection");
    const postInternshipForm = document.getElementById("postInternshipForm");
    const applicantsContainer = document.getElementById("applicantsContainer");
    const profileBtn = document.getElementById("profileBtn");
    const profileDropdown = document.getElementById("profileDropdown");
    const logoutBtn = document.getElementById("logoutBtn");

    // Dummy data for applicants
    const applicants = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            mobile: "9876543210",
            stream: "Computer Science",
            year: "2025",
            skills: "React, Node.js, Python",
            internshipApplied: "Software Development Intern"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            mobile: "9988776655",
            stream: "Electrical Engineering",
            year: "2024",
            skills: "AutoCAD, MATLAB, PCB Design",
            internshipApplied: "Electrical Engineering Intern"
        },
        {
            id: 3,
            name: "Rahul Sharma",
            email: "rahul.sharma@example.com",
            mobile: "9123456789",
            stream: "Information Technology",
            year: "2025",
            skills: "C++, Data Structures, Algorithms",
            internshipApplied: "Software Development Intern"
        },
    ];

    // Function to render applicant cards
    function renderApplicants() {
        const currentLang = localStorage.getItem('appLang') || 'en';
        const currentTranslations = translations[currentLang] || translations.en;
        applicantsContainer.innerHTML = '';
        applicants.forEach(applicant => {
            const card = document.createElement("div");
            card.className = "applicant-card";
            card.innerHTML = `
                <h3>${applicant.name}</h3>
                <p><strong>${currentTranslations.internshipTitleLabel}:</strong> ${applicant.internshipApplied}</p>
                <div class="meta">
                    <span><strong>${currentTranslations.streamLabel}:</strong> ${applicant.stream}</span>
                    <span><strong>${currentTranslations.emailLabel}:</strong> ${applicant.email}</span>
                    <span><strong>${currentTranslations.mobileLabel}:</strong> ${applicant.mobile}</span>
                    <span><strong>${currentTranslations.passOutYearLabel}:</strong> ${applicant.year}</span>
                    <span><strong>${currentTranslations.skillsLabel}:</strong> ${applicant.skills}</span>
                </div>
            `;
            applicantsContainer.appendChild(card);
        });
    }

    // --- Event Listeners ---

    // Navigation logic
    postInternshipLink.addEventListener("click", (e) => {
        e.preventDefault();
        postInternshipLink.classList.add("active");
        viewApplicantsLink.classList.remove("active");
        postInternshipSection.classList.remove("hidden");
        viewApplicantsSection.classList.add("hidden");
    });

    viewApplicantsLink.addEventListener("click", (e) => {
        e.preventDefault();
        viewApplicantsLink.classList.add("active");
        postInternshipLink.classList.remove("active");
        postInternshipSection.classList.add("hidden");
        viewApplicantsSection.classList.remove("hidden");
        renderApplicants(); // Render applicants when the section is shown
    });

    // Form submission for posting an internship
    postInternshipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const currentLang = localStorage.getItem('appLang') || 'en';
        
        // Get form data
        const formData = new FormData(postInternshipForm);
        const newInternship = {
            title: formData.get("internshipTitle"),
            company: formData.get("companyName"),
            location: formData.get("location"),
            stipend: formData.get("stipend"),
            stream: formData.get("stream"),
            eligibility: formData.get("eligibility"),
            applicationDeadline: formData.get("applicationDeadline"),
            description: formData.get("description"),
            skills: formData.get("skills").split(",").map(s => s.trim())
        };

        // In a real application, you would send this 'newInternship' object to a backend server
        console.log("New Internship Posted:", newInternship);

        alert(translations[currentLang].postSuccess);
        postInternshipForm.reset();
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
});