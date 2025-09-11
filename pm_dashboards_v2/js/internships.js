


// Simulate applied internships data
const appliedInternships = [
    data.internships[0], 
    data.internships[2]
];

function renderInternshipCards(internships, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    if (internships.length === 0) {
        document.getElementById('noInternshipsMessage').style.display = 'block';
        return;
    } else {
        document.getElementById('noInternshipsMessage').style.display = 'none';
    }

    internships.forEach(internship => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${internship.photo || 'https://placehold.co/400x200'}" alt="${internship.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${internship.title}</h3>
                <p class="card-company">${internship.company}</p>
                <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${internship.location}</p>
                <div class="card-details">
                    <p class="detail-item"><i class="fas fa-calendar-alt"></i> ${internship.duration}</p>
                    <p class="detail-item"><i class="fas fa-coins"></i> ${internship.stipend}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to call on page load and language change
function renderContent() {
    renderInternshipCards(appliedInternships, 'appliedInternshipsGrid');
}

// Set the renderContent function to the window object so common.js can call it
window.renderContent = renderContent;

document.addEventListener("DOMContentLoaded", () => {
    renderContent();
});