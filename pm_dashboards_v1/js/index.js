document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("langSelect");
    const internshipCardsContainer = document.getElementById("internshipCards");
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

    if (navMenu.classList.contains("show")) {
        toggleBtn.innerHTML = "&#10005;"; // ✕
    } else {
        toggleBtn.innerHTML = "&#9776;"; // ☰
    }
}

// 🔹 Event listeners
if (toggleBtn) toggleBtn.addEventListener("click", toggleMobileNav);
if (overlay) overlay.addEventListener("click", toggleMobileNav);

    // Close menu when a link is clicked
    if (navMenu) {
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
                toggleBtn.innerHTML = "&#9776;"; // Reset icon
            });
        });
    }

    // New: Handle active link on click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // New: Handle active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the user is in this section
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

    // Function to render internship cards based on language
    function renderInternshipCards(lang) {
        if (!internshipCardsContainer || !internships || !translations) return;

        internshipCardsContainer.innerHTML = '';
        const candidateInternships = internships.filter(internship => internship.role === 'Candidate');

        candidateInternships.forEach(internship => {
            const card = document.createElement("div");
            card.className = "internship-card";
            card.innerHTML = `
                <img src="${internship.photo}" alt="Internship photo" class="card-image">
                <h3>${internship.title}</h3>
                <p>${internship.description}</p>
                <div class="meta">
                    <span>${translations[lang].companyLabel}: ${internship.company}</span>
                    <span>${translations[lang].locationLabel}: ${internship.location}</span>
                    <span>${translations[lang].stipendLabel}: ${internship.stipend}</span>
                    <span>${translations[lang].sectorLabel}: ${internship.sector}</span>
                </div>
            `;
            internshipCardsContainer.appendChild(card);
        });
    }

    // Initialize language on page load
    const currentLang = localStorage.getItem('appLang') || 'en';
    if (langSelect) {
        langSelect.value = currentLang;
    }
    
    if (typeof updateLanguage === 'function') {
        updateLanguage(currentLang);
    }

    // Event listener for language change in the select box
    if (langSelect) {
        langSelect.addEventListener("change", (event) => {
            const selectedLang = event.target.value;
            localStorage.setItem('appLang', selectedLang);
            
            if (typeof updateLanguage === 'function') {
                updateLanguage(selectedLang);
            }
        });
    }
    
    // Listen for the custom event after a language change
    document.addEventListener('languageChanged', (e) => {
        renderInternshipCards(e.detail.lang);
    });

    // Initial render of internship cards on page load
    renderInternshipCards(currentLang);
});
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const answer = btn.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        btn.setAttribute('aria-expanded', !isOpen);
    });
});
