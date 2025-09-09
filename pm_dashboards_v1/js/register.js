
import { updateContent, translations } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const roleSelect = document.getElementById('roleSelect');
    const candidateFields = document.getElementById('candidateFields');
    const addWorkExperienceBtn = document.getElementById('addWorkExperienceBtn');
    const workExperienceContainer = document.getElementById('workExperienceContainer');
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const langSelect = document.getElementById('langSelect');

    // Toggle visibility of candidate-specific fields
    function toggleCandidateFields() {
        if (roleSelect.value === 'candidate') {
            candidateFields.style.display = 'block';
        } else {
            candidateFields.style.display = 'none';
        }
    }

    // Initial call to set the correct visibility on page load
    toggleCandidateFields();

    // Add event listener for role change
    roleSelect.addEventListener('change', toggleCandidateFields);

    // Function to create a new work experience field
    function createWorkExperienceField() {
        const newEntry = document.createElement('div');
        newEntry.classList.add('work-experience-item');
        const currentLang = langSelect.value;
        const langTrans = translations[currentLang];
        newEntry.innerHTML = `
            <button type="button" class="remove-work-experience">&times;</button>
            <label>
                <span>${langTrans.jobTitleLabel}</span>
                <input type="text" placeholder="${langTrans.workExperiencePlaceholder}" />
            </label>
            <label>
                <span>${langTrans.companyNameLabel}</span>
                <input type="text" placeholder="${langTrans.companyNameLabel}" />
            </label>
            <label>
                <span>${langTrans.durationLabel}</span>
                <input type="text" placeholder="${langTrans.durationLabel}" />
            </label>
            <label>
                <span>${langTrans.responsibilitiesLabel}</span>
                <textarea rows="4" placeholder="${langTrans.responsibilitiesLabel}"></textarea>
            </label>
        `;
        workExperienceContainer.appendChild(newEntry);
        // Re-apply translations to dynamic content
        updateContent(currentLang);
    }

    // Event listener to add new work experience fields
    addWorkExperienceBtn.addEventListener('click', createWorkExperienceField);

    // Event listener to remove work experience fields using event delegation
    workExperienceContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-work-experience')) {
            e.target.closest('.work-experience-item').remove();
        }
    });

    // Form submission handler
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Basic validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            window.showModal("Passwords do not match. Please try again.");
            return;
        }

        // Gather form data
        const formData = {
            role: roleSelect.value,
            name: document.getElementById('userName').value,
            userId: document.getElementById('userId').value,
            password: passwordInput.value,
        };

        if (roleSelect.value === 'candidate') {
            formData.professional = {
                resume: document.getElementById('resumeUpload').files[0] ? document.getElementById('resumeUpload').files[0].name : null,
                portfolioUrl: document.getElementById('portfolioUrl').value,
            };
            formData.education = {
                level: document.getElementById('educationLevel').value,
                university: document.getElementById('university').value,
                major: document.getElementById('major').value,
                graduationYear: document.getElementById('graduationYear').value,
            };
            formData.skills = document.getElementById('skills').value.split(',').map(s => s.trim());
            
            const workExperiences = [];
            document.querySelectorAll('.work-experience-item').forEach(item => {
                const jobTitle = item.querySelector('input[placeholder*="Software Developer"]').value;
                const companyName = item.querySelector('input[placeholder*="Company Name"]').value;
                const duration = item.querySelector('input[placeholder*="Duration"]').value;
                const responsibilities = item.querySelector('textarea').value;
                workExperiences.push({ jobTitle, companyName, duration, responsibilities });
            });
            formData.workExperience = workExperiences;
            
            formData.locationPreference = document.getElementById('locationPreference').value;
        }

        console.log("Form Data:", formData);
        
        // This is where you would typically send the data to a server.
        
        window.showModal("Registration successful! Thank you for joining.");
        registerForm.reset();
    });
});