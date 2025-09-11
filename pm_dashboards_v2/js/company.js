document.addEventListener('DOMContentLoaded', function() {

    // --- Profile Dropdown Logic ---
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    // Toggle the dropdown's visibility by adding/removing the 'show' class
    profileBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the document click from firing immediately
        profileDropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks anywhere else on the page
    document.addEventListener('click', function(event) {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    });

    // --- "Post New Internship" Form Logic ---
    const postInternshipBtn = document.querySelector('.new-internship-btn');
    const addInternshipFormSection = document.querySelector('.add-internship-form');
    const postInternshipForm = document.getElementById('postInternshipForm');
    const cancelBtn = document.querySelector('.cancel-btn'); // Assuming a "Cancel" button exists

    // Show the form and scroll to it when the 'Post New' button is clicked
    if (postInternshipBtn && addInternshipFormSection) {
        postInternshipBtn.addEventListener('click', () => {
            addInternshipFormSection.style.display = 'block';
            window.scrollTo({
                top: addInternshipFormSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }

    // Hide the form on cancel button click
    if (cancelBtn && addInternshipFormSection) {
        cancelBtn.addEventListener('click', () => {
            addInternshipFormSection.style.display = 'none';
        });
    }
// Hide the form and reset it on cancel button click
if (cancelBtn && addInternshipFormSection && postInternshipForm) {
    cancelBtn.addEventListener('click', () => {
        addInternshipFormSection.style.display = 'none';
        postInternshipForm.reset(); // This line clears all form fields
    });
}
    // Handle form submission
    if (postInternshipForm) {
        postInternshipForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from reloading the page

            // Get all form data as an object
            const formData = new FormData(postInternshipForm);
            const data = Object.fromEntries(formData.entries());

            // You would typically send this 'data' to your server here (e.g., using fetch())
            console.log('New Internship Posted:', data);
            alert('Internship posted successfully!');

            // Clear the form and hide the section
            postInternshipForm.reset();
            addInternshipFormSection.style.display = 'none';
        });
    }

    // --- Other Dashboard Interactions (e.g., "View" buttons) ---
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Viewing application details...');
        });
    });
});