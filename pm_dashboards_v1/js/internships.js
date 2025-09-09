
window.translations = {
    en: {
        myInternshipsTitle: "My Internships",
        myInternshipsHeading: "My Applied Internships",
        myInternshipsText: "Here you can see the list of all internships you have previously applied for.",
        noInternshipsApplied: "You haven't applied for any internships yet.",

        headerTitle: "PM Internship Recommendation",
        editProfileLink: "Edit Profile",
        internshipsLink: "Internships",
        logout: "Logout",
        footerText: "© 2025 PM Internship Recommendation — Prototype. Final applications on the official portal."
    },
    hi: {
        myInternshipsTitle: "मेरी इंटर्नशिप",
        myInternshipsHeading: "मेरी आवेदन की गई इंटर्नशिप",
        myInternshipsText: "यहां आप उन सभी इंटर्नशिप की सूची देख सकते हैं जिनके लिए आपने पहले आवेदन किया है।",
        noInternshipsApplied: "आपने अभी तक किसी भी इंटर्नशिप के लिए आवेदन नहीं किया है।",

        headerTitle: "पीएम इंटर्नशिप अनुशंसा",
        editProfileLink: "प्रोफ़ाइल संपादित करें",
        internshipsLink: "इंटर्नशिप",
        logout: "लॉग आउट",
        footerText: "© 2025 पीएम इंटर्नशिप अनुशंसा — प्रोटोटाइप। अंतिम आवेदन आधिकारिक पोर्टल पर।"
    },
    mr: {
        myInternshipsTitle: "माझ्या इंटर्नशिप",
        myInternshipsHeading: "माझ्या अर्ज केलेल्या इंटर्नशिप",
        myInternshipsText: "येथे तुम्ही त्या सर्व इंटर्नशिपची यादी पाहू शकता ज्यासाठी तुम्ही यापूर्वी अर्ज केला आहे.",
        noInternshipsApplied: "तुम्ही अद्याप कोणत्याही इंटर्नशिपसाठी अर्ज केलेला नाही.",

        headerTitle: "पीएम इंटर्नशिप शिफारस",
        editProfileLink: "प्रोफाईल संपादित करा",
        internshipsLink: "इंटर्नशिप",
        logout: "लॉग आउट",
        footerText: "© 2025 पीएम इंटर्नशिप शिफारस — प्रोटोटाइप. अंतिम अर्ज अधिकृत पोर्टलवर."
    }
};

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