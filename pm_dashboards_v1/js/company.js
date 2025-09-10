 const newInternshipBtn = document.querySelector('.new-internship-btn');
    const addInternshipForm = document.querySelector('.add-internship-form');
    const cancelBtn = document.querySelector('.cancel-btn');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded successfully!');
    
    // Example: Add an event listener to the "Post New Internship" button
    const postBtn = document.querySelector('.new-internship-btn');
    if (postBtn) {
        postBtn.addEventListener('click', () => {
            alert('Opening new internship posting form...');
        });
    }

    // Example: Add functionality to "View" buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Viewing application details...');
        });
    });

    // You can add more interactive logic here as needed.
});
 newInternshipBtn.addEventListener('click', () => {
        addInternshipForm.style.display = 'block';
    });

    // Hide form on cancel button click
    cancelBtn.addEventListener('click', () => {
        addInternshipForm.style.display = 'none';
    });
