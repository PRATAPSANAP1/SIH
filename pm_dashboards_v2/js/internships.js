document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    // Toggle the dropdown when the profile button is clicked
    profileBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the click from closing the dropdown immediately
        profileDropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#profileBtn') && !event.target.closest('.profile-dropdown')) {
            if (profileDropdown.classList.contains('show')) {
                profileDropdown.classList.remove('show');
            }
        }
    });

    const appliedInternshipsGrid = document.getElementById('appliedInternshipsGrid');
    const noInternshipsMessage = document.getElementById('noInternshipsMessage');

    // This data would typically come from a server or local storage.
    const appliedInternships = [{
        id: 1,
        title: 'Software Developer Internship',
        company: 'Google',
        location: 'Mountain View, CA',
        duration: '3 Months',
        stipend: '50,000/month',
        status: 'Applied'
    }, {
        id: 2,
        title: 'Data Analyst Intern',
        company: 'Microsoft',
        location: 'Redmond, WA',
        duration: '6 Months',
        stipend: '60,000/month',
        status: 'Applied'
    }, {
        id: 3,
        title: 'UX/UI Design Intern',
        company: 'Adobe',
        location: 'San Jose, CA',
        duration: '4 Months',
        stipend: '45,000/month',
        status: 'Applied'
    }, ];

    /**
     * Creates an HTML card element for a single internship.
     * @param {Object} internship - The internship data.
     * @returns {HTMLElement} The created card element.
     */
    function createInternshipCard(internship) {
        const card = document.createElement('div');
        card.className = 'card internship-card';
        card.setAttribute('data-id', internship.id);

        card.innerHTML = `
            <div class="card-header">
                <h3 class="internship-title">${internship.title}</h3>
                <p class="company-name">${internship.company}</p>
            </div>
            <div class="card-body">
                <p class="internship-location"><i class="fa fa-map-marker"></i> ${internship.location}</p>
                <p class="internship-duration"><i class="fa fa-clock-o"></i> ${internship.duration}</p>
                <p class="internship-stipend"><i class="fa fa-inr"></i> ${internship.stipend}</p>
            </div>
            <div class="card-footer">
                <span class="internship-status">${internship.status}</span>
            </div>
        `;

        return card;
    }

    /**
     * Renders the list of applied internships on the page.
     * @param {Array<Object>} internships - The list of internships to render.
     */
    function renderAppliedInternships(internships) {
        appliedInternshipsGrid.innerHTML = '';

        if (internships.length === 0) {
            noInternshipsMessage.style.display = 'block';
        } else {
            noInternshipsMessage.style.display = 'none';
            internships.forEach(internship => {
                const card = createInternshipCard(internship);
                appliedInternshipsGrid.appendChild(card);
            });
        }
    }

    renderAppliedInternships(appliedInternships);
});