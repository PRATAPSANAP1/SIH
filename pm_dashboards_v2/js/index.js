document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    //  2. MOBILE NAVIGATION (from common.js)
    // ----------------------------------------------------

    const toggleBtn = document.getElementById("toggle-Link");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById('mainOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    function toggleMobileNav() {
        if (!navMenu || !overlay || !toggleBtn) return;
        navMenu.classList.toggle("show");
        overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
        toggleBtn.innerHTML = navMenu.classList.contains("show") ? "&#10005;" : "&#9776;";
    }

    if (toggleBtn) toggleBtn.addEventListener("click", toggleMobileNav);
    if (overlay) overlay.addEventListener("click", toggleMobileNav);

    // Close menu when a link is clicked
    if (navMenu) {
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
                toggleBtn.innerHTML = "&#9776;";
            });
        });
    }

    // Handle active link on click
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ----------------------------------------------------
    //  3. CANDIDATE DASHBOARD SPECIFIC LOGIC
    // ----------------------------------------------------

    const dashboardContent = document.getElementById('dashboardContent');
    const editProfileSection = document.getElementById('editProfileSection');
    const viewProfileSection = document.getElementById('viewProfileSection');
    const editProfileLink = document.getElementById('editProfileLink');
    const viewProfileLink = document.getElementById('viewProfileLink');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const editProfileFromViewBtn = document.getElementById('editProfileFromViewBtn');
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const profileForm = document.getElementById('profileForm');
    const workExperienceContainer = document.getElementById('workExperienceContainer');
    const addWorkExperienceBtn = document.getElementById('addWorkExperienceBtn');
    const photoInput = document.getElementById('photoInput');
    const profilePhotoPreview = document.getElementById('profilePhotoPreview');
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const removePhotoBtn = document.getElementById('removePhotoBtn');
    const modal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalButton = document.querySelector('.close-button');

    let userProfile = {
        name: "Pratap Sanap",
        email: "pratapsanap14@example.com",
        photo: "https://via.placeholder.com/150",
        portfolioUrl: "https://linkedin.com/in/rahulsharma",
        resumeUrl: "#",
        university: "SCOE",
        major: "Computer Science",
        graduationYear: "2027",
        skills: "Python, Data Analysis, HTML, CSS",
        stipend: 20000,
        location: "Pune, Bengaluru",
        workExperience: [{
            company: "TechCorp",
            role: "Junior Developer",
            duration: 6
        }]
    };

    function showModal(message) {
        if (modal && modalMessage) {
            modalMessage.textContent = message;
            modal.style.display = 'block';
        }
    }

    if (closeModalButton) {
        closeModalButton.onclick = function () {
            if (modal) {
                modal.style.display = 'none';
            }
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    const showSection = (sectionToShow) => {
        [dashboardContent, editProfileSection, viewProfileSection].forEach(section => {
            section.classList.add('hidden');
        });
        sectionToShow.classList.remove('hidden');
    };

    const populateProfileView = (profile) => {
        document.getElementById('profileViewPhoto').src = profile.photo;
        document.getElementById('profileViewName').textContent = profile.name;
        // ... (rest of populateProfileView logic) ...
        // Note: The logic for dynamic content based on translations is already in `updateLanguage`
    };

    const populateEditForm = (profile) => {
        if (profilePhotoPreview) profilePhotoPreview.src = profile.photo;
        document.getElementById('userName').value = profile.name;
        // ... (rest of populateEditForm logic) ...
        // Rebuild work experience blocks with correct language placeholders
        if (workExperienceContainer) {
            workExperienceContainer.innerHTML = '';
            profile.workExperience.forEach(exp => addExperienceBlock(exp));
            if (profile.workExperience.length === 0) addExperienceBlock();
        }
    };

    const saveProfile = () => {
        // ... (rest of saveProfile logic) ...
        showModal(translations[currentLang].registrationSuccess);
    };

    const addExperienceBlock = (data = {}) => {
        const newExp = document.createElement('div');
        newExp.classList.add('experience-entry');
        // Use translation keys for placeholders and button text
        newExp.innerHTML = `
            <div class="form-group">
                <label data-i18n="companyNameLabel"><span>${translations[currentLang].companyNameLabel}</span><input type="text" placeholder="e.g., TechCorp" value="${data.company || ''}" required /></label>
            </div>
            <div class="form-group">
                <label data-i18n="jobTitleLabel"><span>${translations[currentLang].jobTitleLabel}</span><input type="text" placeholder="e.g., Junior Developer" value="${data.role || ''}" required /></label>
            </div>
            <div class="form-group">
                <label data-i18n="durationLabel"><span>${translations[currentLang].durationLabel}</span><input type="number" placeholder="e.g., 6" value="${data.duration || ''}" required /></label>
            </div>
            <button type="button" class="btn btn-danger remove-exp-btn" style="margin-top: 10px;">${translations[currentLang].removePhoto}</button>
        `;
        workExperienceContainer.appendChild(newExp);
    };

    // Event listeners for page sections and forms
    if (editProfileLink) editProfileLink.addEventListener('click', (e) => { e.preventDefault(); showSection(editProfileSection); populateEditForm(userProfile); profileDropdown.style.display = 'none'; });
    if (viewProfileLink) viewProfileLink.addEventListener('click', (e) => { e.preventDefault(); showSection(viewProfileSection); populateProfileView(userProfile); profileDropdown.style.display = 'none'; });
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', (e) => { e.preventDefault(); showSection(viewProfileSection); });
    if (editProfileFromViewBtn) editProfileFromViewBtn.addEventListener('click', (e) => { e.preventDefault(); showSection(editProfileSection); populateEditForm(userProfile); });
    if (profileForm) profileForm.addEventListener('submit', (e) => { e.preventDefault(); saveProfile(); showSection(viewProfileSection); });
    if (profileBtn) profileBtn.addEventListener('click', () => { profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block'; });
    window.addEventListener('click', (e) => { if (profileBtn && profileDropdown && !profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) { profileDropdown.style.display = 'none'; } });
    if (addWorkExperienceBtn) addWorkExperienceBtn.addEventListener('click', () => addExperienceBlock());
    if (workExperienceContainer) workExperienceContainer.addEventListener('click', (e) => { if (e.target.classList.contains('remove-exp-btn')) { e.target.closest('.experience-entry').remove(); } });
    if (changePhotoBtn && photoInput) changePhotoBtn.addEventListener('click', () => { photoInput.click(); });
    if (photoInput) photoInput.addEventListener('change', () => { const file = photoInput.files[0]; if (file) { const reader = new FileReader(); reader.onload = (e) => { profilePhotoPreview.src = e.target.result; }; reader.readAsDataURL(file); } });
    if (removePhotoBtn && profilePhotoPreview && photoInput) removePhotoBtn.addEventListener('click', () => { profilePhotoPreview.src = 'https://via.placeholder.com/150'; photoInput.value = ''; });

    showSection(dashboardContent);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const answer = btn.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        btn.setAttribute('aria-expanded', !isOpen);
    });
});