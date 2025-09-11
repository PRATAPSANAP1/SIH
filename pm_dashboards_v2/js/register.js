document.addEventListener("DOMContentLoaded", () => {
  const roleSelect = document.getElementById("roleSelect");
  const candidateFields = document.getElementById("candidateFields");
  const companyFields = document.getElementById("companyFields");
  const registerForm = document.getElementById("registerForm");
  const formMessage = document.getElementById("formMessage");

  const nameField = document.getElementById("userName").closest("label");
  const idField = document.getElementById("userId").closest("label");
  const passwordField = document.getElementById("password").closest("label");
  const confirmPasswordField = document.getElementById("confirmPassword").closest("label");

  // ----------------------------------------
  // TOGGLE FIELDS (Candidate vs Company)
  // ----------------------------------------
  function toggleFields() {
    if (roleSelect.value === "candidate") {
      nameField.style.display = "block";
      idField.style.display = "block";
      candidateFields.style.display = "block";
      passwordField.style.display = "block";
      confirmPasswordField.style.display = "block";
      companyFields.style.display = "none";
    } else {
      nameField.style.display = "block";
      idField.style.display = "block";
      candidateFields.style.display = "none";
      passwordField.style.display = "block";
      confirmPasswordField.style.display = "block";
      companyFields.style.display = "block";
    }
  }

  // Run once on load
  toggleFields();
  roleSelect.addEventListener("change", toggleFields);

  // ----------------------------------------
  // VALIDATION HELPERS
  // ----------------------------------------
  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isMobile = (val) => /^\d{10}$/.test(val);

  // ----------------------------------------
  // FORM SUBMIT HANDLER
  // ----------------------------------------
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "";
    formMessage.classList.remove("error");

    const fullName = document.getElementById("userName").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = roleSelect.value;

    if (!isEmail(userId) && !isMobile(userId)) {
      formMessage.textContent = "Enter valid email or 10-digit mobile.";
      formMessage.classList.add("error");
      return;
    }
    if (password !== confirmPassword) {
      formMessage.textContent = "Passwords do not match!";
      formMessage.classList.add("error");
      return;
    }

    // Collect form data
    const formData = { fullName, userId, role };
    if (role === "company") {
      formData.companyName = document.getElementById("companyName").value.trim();
      formData.websiteUrl = document.getElementById("websiteUrl").value.trim();
      formData.industry = document.getElementById("industry").value.trim();
    }

    // Save to localStorage (demo only)
    let users = JSON.parse(localStorage.getItem("registrations") || "[]");
    users.push(formData);
    localStorage.setItem("registrations", JSON.stringify(users));

    formMessage.textContent = "Registration successful!";
    registerForm.reset();
    toggleFields();
  });

  // ----------------------------------------
  // WORK EXPERIENCE DYNAMIC FIELDS
  // ----------------------------------------
  const addWorkExperienceBtn = document.getElementById("addWorkExperienceBtn");
  const workExperienceContainer = document.getElementById("workExperienceContainer");

  function createWorkExperienceField() {
    const newEntry = document.createElement("div");
    newEntry.classList.add("work-experience-item");

    newEntry.innerHTML = `
      
      <label>
          <span>Job Title</span>
          <input type="text" placeholder="e.g., Software Intern" />
      </label>
      <label>
          <span>Company Name</span>
          <input type="text" placeholder="Company Name" />
      </label>
      <label>
          <span>Duration</span>
          <input type="text" placeholder="e.g., Jan 2023 - May 2023" />
      </label>
      <label>
          <span>Responsibilities</span>
          <textarea rows="4" placeholder="Describe your work"></textarea>
      </label>
      <button type="button" class="remove-work-experience">Cancel</button>
    `;
    workExperienceContainer.appendChild(newEntry);
  }

  addWorkExperienceBtn.addEventListener("click", createWorkExperienceField);

  // Remove experience (event delegation)
  workExperienceContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-work-experience")) {
      e.target.closest(".work-experience-item").remove();
    }
  });
});
