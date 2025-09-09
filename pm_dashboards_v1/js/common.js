const translations = {
    en: {
        // --- General Website Text (Homepage, Header, Footer) ---
        pageTitle: "PM Internship Recommendation",
        homeTitle: "PM Intern",
        headerTitle: "PM Internship Recommendation",
        homeLink: "Home",
        aboutLink: "About Us",
        helpLink: "Help",
        loginLink: "Login",
        registerLink: "Register",
        heroHeading: "Your Dream Internship Awaits.",
        heroText: "We connect students with the best internship opportunities using smart, personalized matching technology.",
        getStartedBtn: "Get Started",
        learnMoreBtn: "Learn More",
        footerText: "2025 PM Internship Recommendation — By Team Buildzen",
        // --- About Us Page Text ---
        aboutHeroHeading: "About PM Internship Recommendation",
        aboutHeroText: "Our mission is to bridge the gap between students and the best internship opportunities. We use smart technology to match your skills and preferences with relevant internships, making your search fast and effective.",
        missionHeading: "Our Mission",
        missionText: "We believe that every student deserves access to a meaningful and relevant internship experience. Our platform is designed to cut through the noise of endless job boards and present you with a curated list of opportunities that truly fit your profile. By providing personalized recommendations, we empower you to take the next step in your career with confidence.",
        featuresHeading: "Key Features",
        feature1Heading: "Personalized Search",
        feature1Text: "Our algorithm learns your skills and preferences to show you internships that are the perfect match.",
        feature2Heading: "Advanced Filtering",
        feature2Text: "Filter internships by location, stipend, sector, and more to narrow down your choices.",
        feature3Heading: "Curated Recommendations",
        feature3Text: "Get top-rated internships handpicked by our team to ensure quality and relevance.",
        teamHeading: "Meet the Team",
        teamText: "We are a passionate team dedicated to helping students succeed. Our diverse backgrounds in tech, education, and career counseling drive our commitment to building the best platform for you.",
        memberName1: "Pratap Sanap",
        memberRole1: "FrontEnd Developer",
        memberName2: "Vaibhav Salve",
        memberRole2: "Backend Developer",
        // --- Help Page Text ---
        helpHeroHeading: "Help & Support",
        helpHeroText: "Find answers to the most common questions about our platform.",
        faqHeading: "Frequently Asked Questions",
        faq1Question: "How does the internship recommendation work?",
        faq1Answer: "Our platform uses an algorithm that analyzes your profile information, including skills, stream, and preferences, to match you with the most suitable internships.",
        faq2Question: "Can I update my profile after registering?",
        faq2Answer: "Yes, you can edit your profile at any time from your candidate dashboard to update your personal details, skills, and preferences.",
        faq3Question: "Is this a final application portal?",
        faq3Answer: "No, this is a prototype platform for internship recommendations only. The final application process will take place on the respective companies' official portals, which will be linked in the internship details.",
        faq4Question: "What if I encounter an issue or have a suggestion?",
        faq4Answer: "We welcome your feedback! You can reach us through our contact form or by emailing us at support@pmintern.com.",
        contactHeading: "Contact Us",
        contactText: "Can't find what you're looking for? Reach out to us directly.",
        contactBtn: "Send us an Email",
        // --- Login / Register Page Text ---
        loginPageTitle: "Login / Register",
        loginHeading: "Login",
        registerHeading: "Register",
        roleLabel: "Role",
        idLabel: "Email or Mobile",
        passwordLabel: "Password",
        nameLabel: "Name",
        confirmPasswordLabel: "Confirm Password",
        loginBtn: "Login",
        registerBtn: "Register",
        noAccountText: "Don't have an account?",
        haveAccountText: "Already have an account?",
        registerHereLink: "Register here",
        loginHereLink: "Login here",
        demoText: "Demo login: any credentials accepted. Role decides dashboard.",
        candidate: "Candidate",
        company: "Company",
        government: "Government",
        passwordsDoNotMatch: "Passwords do not match!",
        registrationSuccess: "Registration successful! Redirecting to login page...",
        loginSuccess: "Login successful! Redirecting to dashboard...",
        logout: "Logout",
        emailMobilePlaceholder: "email or mobile",
        fullNamePlaceholder: "full name",
        professionalDetails: "Professional Details",
        educationalBackground: "Educational Background",
        skillsAndInterests: "Skills and Interests",
        resumeUploadLabel: "Upload Resume/CV (PDF only)",
        portfolioUrlLabel: "Portfolio/LinkedIn URL",
        educationLevelLabel: "Education Level",
        universityLabel: "University/College",
        majorLabel: "Major/Field of Study",
        graduationYearLabel: "Year of Graduation",
        skillsInputLabel: "Your Skills (comma-separated)",
        workExperienceLabel: "Work Experience",
        addWorkExperienceBtn: "Add New Experience",
        locationPreferenceLabel: "Location Preference",
        modalMessage: "This is a placeholder message.",
        modalOK: "OK",
        workExperiencePlaceholder: "e.g., Software Developer at XYZ Corp.",
        jobTitleLabel: "Job Title",
        companyNameLabel: "Company Name",
        durationLabel: "Duration (e.g., Jan 2023 - Present)",
        responsibilitiesLabel: "Key Responsibilities",
        // --- Candidate Dashboard specific translations ---
        candidateDashboardTitle: "Candidate Dashboard",
        welcomeMessage: (name) => `Welcome, ${name}`,
        recommendedHeading: "Recommended Internships",
        searchPlaceholder: "Search by title, company, or location...",
        searchBtn: "Search",
        editProfileLink: "Edit Profile",
        internshipsLink: "Internships",
        editProfileHeading: "Edit Profile",
        fullNameLabel: "Full Name",
        emailLabel: "Email",
        mobileLabel: "Mobile",
        streamLabel: "Stream/Branch",
        passOutYearLabel: "Pass Out Year",
        skillsLabel: "Skills (comma-separated)",
        locationLabel: "Preferred Location",
        stipendLabel: "Stipend Expectation",
        saveBtn: "Save Profile",
        profileUpdated: "Profile updated successfully!",
        changePhotoLabel: "Change Photo",
        removePhotoLabel: "Remove Photo",
        cancelBtn: "Cancel",
        // --- Company Dashboard specific translations ---
        companyDashboardTitle: "Company Dashboard",
        postInternshipLink: "Post Internship",
        viewApplicantsLink: "View Applicants",
        postInternshipHeading: "Post a New Internship",
        viewApplicantsHeading: "View Applicants",
        internshipTitleLabel: "Internship Title",
        descriptionLabel: "Description",
        postBtn: "Post Internship",
        postSuccess: "Internship posted successfully!",
        applicantDetails: (name, stream) => `Name: ${name} | Stream: ${stream}`,
        eligibilityLabel: "Eligibility Criteria",
        applicationDeadlineLabel: "Application Deadline",
        // --- Government Dashboard specific translations ---
        governmentDashboardTitle: "Government Dashboard",
        overviewLink: "Overview",
        allInternshipsLink: "All Internships",
        allCandidatesLink: "All Candidates",
        overviewHeading: "Dashboard Overview",
        allInternshipsHeading: "All Posted Internships",
        allCandidatesHeading: "All Registered Candidates",
        totalInternshipsLabel: "Total Internships Posted",
        totalCandidatesLabel: "Total Candidates Registered",
        totalApplicationsLabel: "Total Applications Received",
        // --- New Candidate Registration fields ---
        bioLabel: "Brief Introduction",
        noFileChosen: "No file chosen"
    },
    hi: {
        // --- General Website Text (Homepage, Header, Footer) ---
        pageTitle: "पीएम इंटर्नशिप अनुशंसा",
        homeTitle: "पीएम इंटर्न",
        headerTitle: "पीएम इंटर्नशिप अनुशंसा",
        homeLink: "होम",
        aboutLink: "हमारे बारे में",
        helpLink: "मदद",
        loginLink: "लॉगिन",
        registerLink: "रजिस्टर",
        heroHeading: "आपकी सपनों की इंटर्नशिप आपका इंतजार कर रही है।",
        heroText: "हम स्मार्ट, व्यक्तिगत मिलान तकनीक का उपयोग करके छात्रों को सर्वश्रेष्ठ इंटर्नशिप अवसरों से जोड़ते हैं।",
        getStartedBtn: "अभी शुरू करें",
        learnMoreBtn: "और जानें",
        footerText: "© 2025 पीएम इंटर्नशिप रिकमेंडेशन — टीम बिल्डज़ेन द्वारा।",
        // --- About Us Page Text ---
        aboutHeroHeading: "पीएम इंटर्नशिप अनुशंसा के बारे में",
        aboutHeroText: "हमारा मिशन छात्रों और सर्वोत्तम इंटर्नशिप अवसरों के बीच की खाई को पाटना है। हम आपकी खोज को तेज़ और प्रभावी बनाने के लिए, आपके कौशल और प्राथमिकताओं को प्रासंगिक इंटर्नशिप के साथ मिलाने के लिए स्मार्ट तकनीक का उपयोग करते हैं।",
        missionHeading: "हमारा मिशन",
        missionText: "हमारा मानना है कि हर छात्र एक सार्थक और प्रासंगिक इंटर्नशिप अनुभव तक पहुंच का हकदार है। हमारा प्लेटफ़ॉर्म अंतहीन जॉब बोर्डों के शोर को कम करने और आपको उन अवसरों की एक क्यूरेटेड सूची प्रस्तुत करने के लिए डिज़ाइन किया गया है जो वास्तव में आपकी प्रोफ़ाइल के अनुकूल हैं। व्यक्तिगत अनुशंसाएँ प्रदान करके, हम आपको आत्मविश्वास के साथ अपने करियर में अगला कदम उठाने के लिए सशक्त बनाते हैं।",
        featuresHeading: "मुख्य विशेषताएं",
        feature1Heading: "व्यक्तिगत खोज",
        feature1Text: "हमारा एल्गोरिथम आपके कौशल और प्राथमिकताओं को सीखता है ताकि आपको ऐसे इंटर्नशिप दिखाए जा सकें जो सही मेल खाते हैं।",
        feature2Heading: "उन्नत फ़िल्टरिंग",
        feature2Text: "अपनी पसंद को सीमित करने के लिए स्थान, वजीफा, क्षेत्र, और बहुत कुछ के अनुसार इंटर्नशिप को फ़िल्टर करें।",
        feature3Heading: "क्यूरेटेड अनुशंसाएँ",
        feature3Text: "गुणवत्ता और प्रासंगिकता सुनिश्चित करने के लिए हमारी टीम द्वारा चुनी गई शीर्ष-रेटेड इंटर्नशिप प्राप्त करें।",
        teamHeading: "टीम से मिलें",
        teamText: "हम छात्रों को सफल होने में मदद करने के लिए समर्पित एक उत्साही टीम हैं। तकनीक, शिक्षा और करियर परामर्श में हमारी विविध पृष्ठभूमि आपको सबसे अच्छा प्लेटफ़ॉर्म बनाने की हमारी प्रतिबद्धता को प्रेरित करती है।",
        memberName1: "प्रताप सनाप",
        memberRole1: "फ्रंटएंड डेवलपर",
        memberName2: "वैभव साल्वे",
        memberRole2: "बैकएंड डेवलपर",
        // --- Help Page Text ---
        helpHeroHeading: "मदद और समर्थन",
        helpHeroText: "हमारे प्लेटफ़ॉर्म के बारे में सबसे आम सवालों के जवाब खोजें।",
        faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
        faq1Question: "इंटर्नशिप की अनुशंसा कैसे काम करती है?",
        faq1Answer: "हमारा प्लेटफ़ॉर्म आपकी प्रोफ़ाइल जानकारी, जिसमें कौशल, स्ट्रीम और प्राथमिकताएं शामिल हैं, का विश्लेषण करने के लिए एक एल्गोरिथम का उपयोग करता है, ताकि आपको सबसे उपयुक्त इंटर्नशिप के साथ जोड़ा जा सके।",
        faq2Question: "क्या मैं पंजीकरण के बाद अपनी प्रोफ़ाइल अपडेट कर सकता हूँ?",
        faq2Answer: "हाँ, आप अपने व्यक्तिगत विवरण, कौशल और प्राथमिकताओं को अपडेट करने के लिए किसी भी समय अपने उम्मीदवार डैशबोर्ड से अपनी प्रोफ़ाइल को संपादित कर सकते हैं।",
        faq3Question: "क्या यह एक अंतिम आवेदन पोर्टल है?",
        faq3Answer: "नहीं, यह केवल इंटर्नशिप अनुशंसाओं के लिए एक प्रोटोटाइप प्लेटफ़ॉर्म है। अंतिम आवेदन प्रक्रिया संबंधित कंपनियों के आधिकारिक पोर्टलों पर होगी, जो इंटर्नशिप विवरण में लिंक किए जाएंगे।",
        faq4Question: "यदि मुझे कोई समस्या आती है या कोई सुझाव है तो क्या करें?",
        faq4Answer: "हम आपकी प्रतिक्रिया का स्वागत करते हैं! आप हमारे संपर्क फ़ॉर्म के माध्यम से या हमें support@pmintern.com पर ईमेल करके हमसे संपर्क कर सकते हैं।",
        contactHeading: "हमसे संपर्क करें",
        contactText: "जो आप ढूंढ रहे हैं वह नहीं मिला? सीधे हमसे संपर्क करें।",
        contactBtn: "हमें एक ईमेल भेजें",
        // --- Login / Register Page Text ---
        loginPageTitle: "लॉगिन / रजिस्टर",
        loginHeading: "लॉगिन",
        registerHeading: "रजिस्टर",
        roleLabel: "भूमिका",
        idLabel: "ईमेल या मोबाइल",
        passwordLabel: "पासवर्ड",
        nameLabel: "नाम",
        confirmPasswordLabel: "पासवर्ड की पुष्टि करें",
        loginBtn: "लॉगिन",
        registerBtn: "रजिस्टर",
        noAccountText: "खाता नहीं है?",
        haveAccountText: "पहले से ही एक खाता है?",
        registerHereLink: "यहां रजिस्टर करें",
        loginHereLink: "यहां लॉगिन करें",
        demoText: "डेमो लॉगिन: कोई भी क्रेडेंशियल स्वीकार किए जाते हैं। भूमिका डैशबोर्ड तय करती है।",
        candidate: "उम्मीदवार",
        company: "कंपनी",
        government: "सरकार",
        passwordsDoNotMatch: "पासवर्ड मेल नहीं खाते हैं!",
        registrationSuccess: "पंजीकरण सफल! लॉगिन पेज पर रीडायरेक्ट हो रहा है...",
        loginSuccess: "लॉगिन सफल! डैशबोर्ड पर रीडायरेक्ट हो रहा है...",
        logout: "लॉग आउट",
        emailMobilePlaceholder: "ईमेल या मोबाइल",
        fullNamePlaceholder: "पूरा नाम",
        professionalDetails: "पेशेवर विवरण",
        educationalBackground: "शैक्षणिक पृष्ठभूमि",
        skillsAndInterests: "कौशल और रुचियां",
        resumeUploadLabel: "रिज्यूमे/सीवी अपलोड करें (केवल पीडीएफ)",
        portfolioUrlLabel: "पोर्टफोलियो/लिंक्डइन यूआरएल",
        educationLevelLabel: "शिक्षा का स्तर",
        universityLabel: "विश्वविद्यालय/कॉलेज",
        majorLabel: "प्रमुख/अध्ययन क्षेत्र",
        graduationYearLabel: "स्नातक वर्ष",
        skillsInputLabel: "आपके कौशल (कॉमा-सेपरेटेड)",
        workExperienceLabel: "कार्य अनुभव",
        addWorkExperienceBtn: "नया अनुभव जोड़ें",
        locationPreferenceLabel: "स्थान प्राथमिकता",
        modalMessage: "यह एक प्लेसहोल्डर संदेश है।",
        modalOK: "ठीक है",
        workExperiencePlaceholder: "जैसे, XYZ कॉर्प में सॉफ्टवेयर डेवलपर।",
        jobTitleLabel: "नौकरी का शीर्षक",
        companyNameLabel: "कंपनी का नाम",
        durationLabel: "अवधि (जैसे, जनवरी 2023 - वर्तमान)",
        responsibilitiesLabel: "मुख्य जिम्मेदारियां",
        // --- Candidate Dashboard specific translations ---
        candidateDashboardTitle: "उम्मीदवार डैशबोर्ड",
        welcomeMessage: (name) => `आपका स्वागत है, ${name}`,
        recommendedHeading: "अनुशंसित इंटर्नशिप",
        searchPlaceholder: "शीर्षक, कंपनी, या स्थान से खोजें...",
        searchBtn: "खोजें",
        editProfileLink: "प्रोफ़ाइल संपादित करें",
        internshipsLink: "इंटर्नशिप",
        editProfileHeading: "प्रोफ़ाइल संपादित करें",
        fullNameLabel: "पूरा नाम",
        emailLabel: "ईमेल",
        mobileLabel: "मोबाइल",
        streamLabel: "स्ट्रीम/शाखा",
        passOutYearLabel: "पास आउट वर्ष",
        skillsLabel: "कौशल (कॉमा-सेपरेटेड)",
        locationLabel: "पसंदीदा स्थान",
        stipendLabel: "स्टायपेंड अपेक्षा",
        saveBtn: "प्रोफ़ाइल सहेजें",
        profileUpdated: "प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई है!",
        changePhotoLabel: "फ़ोटो बदलें",
        removePhotoLabel: "फ़ोटो हटाएँ",
        cancelBtn: "रद्द करें",
        // --- Company Dashboard specific translations ---
        companyDashboardTitle: "कंपनी डैशबोर्ड",
        postInternshipLink: "इंटर्नशिप पोस्ट करें",
        viewApplicantsLink: "आवेदक देखें",
        postInternshipHeading: "एक नई इंटर्नशिप पोस्ट करें",
        viewApplicantsHeading: "आवेदक देखें",
        internshipTitleLabel: "इंटर्नशिप शीर्षक",
        descriptionLabel: "विवरण",
        postBtn: "इंटर्नशिप पोस्ट करें",
        postSuccess: "इंटर्नशिप सफलतापूर्वक पोस्ट की गई!",
        applicantDetails: (name, stream) => `नाम: ${name} | स्ट्रीम: ${stream}`,
        eligibilityLabel: "पात्रता मानदंड",
        applicationDeadlineLabel: "आवेदन की अंतिम तिथि",
        // --- Government Dashboard specific translations ---
        governmentDashboardTitle: "सरकार डैशबोर्ड",
        overviewLink: "अवलोकन",
        allInternshipsLink: "सभी इंटर्नशिप",
        allCandidatesLink: "सभी उम्मीदवार",
        overviewHeading: "डैशबोर्ड अवलोकन",
        allInternshipsHeading: "सभी पोस्ट की गई इंटर्नशिप",
        allCandidatesHeading: "सभी पंजीकृत उम्मीदवार",
        totalInternshipsLabel: "कुल पोस्ट की गई इंटर्नशिप",
        totalCandidatesLabel: "कुल पंजीकृत उम्मीदवार",
        totalApplicationsLabel: "कुल प्राप्त आवेदन",
        // --- New Candidate Registration fields ---
        bioLabel: "संक्षिप्त परिचय",
        noFileChosen: "कोई फ़ाइल नहीं चुनी गई है"
    },
    mr: {
        // --- General Website Text (Homepage, Header, Footer) ---
        pageTitle: "पीएम इंटर्नशिप शिफारस",
        homeTitle: "पीएम इंटर्न",
        headerTitle: "पीएम इंटर्नशिप शिफारस",
        homeLink: "मुख्यपृष्ठ",
        aboutLink: "आमच्याबद्दल",
        helpLink: "मदत",
        loginLink: "लॉगिन",
        registerLink: "नोंदणी",
        heroHeading: "तुमची स्वप्नातील इंटर्नशिप वाट पाहत आहे.",
        heroText: "आम्ही स्मार्ट, वैयक्तिकृत जुळणाऱ्या तंत्रज्ञानाचा वापर करून विद्यार्थ्यांना सर्वोत्तम इंटर्नशिप संधींशी जोडतो.",
        getStartedBtn: "आता सुरू करा",
        learnMoreBtn: "अधिक जाणून घ्या",
        footerText: "© 2025 पीएम इंटर्नशिप रिकमेंडेशन — Buildzen",
        // --- About Us Page Text ---
        aboutHeroHeading: "पीएम इंटर्नशिप शिफारसबद्दल",
        aboutHeroText: "आमचे उद्दिष्ट विद्यार्थी आणि सर्वोत्तम इंटर्नशिप संधी यांच्यातील अंतर कमी करणे आहे. तुमची शोध जलद आणि प्रभावी करण्यासाठी, आम्ही तुमच्या कौशल्यांना आणि प्राधान्यांना संबंधित इंटर्नशिपशी जुळवण्यासाठी स्मार्ट तंत्रज्ञानाचा वापर करतो.",
        missionHeading: "आमचे ध्येय",
        missionText: "आमचा विश्वास आहे की प्रत्येक विद्यार्थ्याला एक अर्थपूर्ण आणि संबंधित इंटर्नशिप अनुभव मिळण्याचा अधिकार आहे. आमचे प्लॅटफॉर्म अंतहीन जॉब बोर्डच्या गोंधळातून मार्ग काढण्यासाठी आणि तुम्हाला तुमच्या प्रोफाइलला खऱ्या अर्थाने जुळणाऱ्या संधींची क्यूरेटेड यादी सादर करण्यासाठी डिझाइन केलेले आहे. वैयक्तिकृत शिफारसी देऊन, आम्ही तुम्हाला तुमच्या करिअरमध्ये आत्मविश्वासाने पुढील पाऊल उचलण्यासाठी सक्षम करतो.",
        featuresHeading: "मुख्य वैशिष्ट्ये",
        feature1Heading: "वैयक्तिकृत शोध",
        feature1Text: "आमचा अल्गोरिदम तुमची कौशल्ये आणि प्राधान्ये शिकतो जेणेकरून तुम्हाला योग्य जुळणाऱ्या इंटर्नशिप दाखवता येतील.",
        feature2Heading: "प्रगत फिल्टरिंग",
        feature2Text: "तुमच्या निवडी कमी करण्यासाठी स्थान, स्टायपेंड, क्षेत्र आणि बरेच काही द्वारे इंटर्नशिप फिल्टर करा.",
        feature3Heading: "क्यूरेटेड शिफारसी",
        feature3Text: "गुणवत्ता आणि प्रासंगिकता सुनिश्चित करण्यासाठी आमच्या टीमने निवडलेल्या टॉप-रेटेड इंटर्नशिप मिळवा.",
        teamHeading: "टीमशी भेटा",
        teamText: "आम्ही विद्यार्थ्यांना यशस्वी होण्यास मदत करण्यासाठी समर्पित एक उत्साही टीम आहोत. तंत्रज्ञान, शिक्षण आणि करिअर समुपदेशनातील आमची विविध पार्श्वभूमी तुमच्यासाठी सर्वोत्तम प्लॅटफॉर्म तयार करण्याच्या आमच्या वचनबद्धतेला चालना देते.",
        memberName1: "प्रताप सनाप",
        memberRole1: "फ्रंटएंड डेव्हलपर",
        memberName2: "वैभव साळवे",
        memberRole2: "बॅकएंड डेव्हलपर",
        // --- Help Page Text ---
        helpHeroHeading: "मदत आणि समर्थन",
        helpHeroText: "आमच्या प्लॅटफॉर्मबद्दल सर्वात सामान्य प्रश्नांची उत्तरे शोधा.",
        faqHeading: "वारंवार विचारले जाणारे प्रश्न",
        faq1Question: "इंटर्नशिप शिफारस कशी कार्य करते?",
        faq1Answer: "आमचे प्लॅटफॉर्म तुमच्या प्रोफाइल माहितीचे विश्लेषण करण्यासाठी एक अल्गोरिदम वापरते, ज्यात कौशल्ये, स्ट्रीम आणि प्राधान्ये समाविष्ट आहेत, जेणेकरून तुम्हाला सर्वात योग्य इंटर्नशिपशी जुळवता येईल.",
        faq2Question: "नोंदणीनंतर मी माझे प्रोफाइल अपडेट करू शकेन का?",
        faq2Answer: "होय, तुम्ही तुमची वैयक्तिक माहिती, कौशल्ये आणि प्राधान्ये अपडेट करण्यासाठी तुमच्या उमेदवार डॅशबोर्डमधून कधीही तुमचे प्रोफाइल संपादित करू शकता.",
        faq3Question: "हे अंतिम अर्ज पोर्टल आहे का?",
        faq3Answer: "नाही, हे केवळ इंटर्नशिप शिफारसींसाठी एक प्रोटोटाइप प्लॅटफॉर्म आहे. अंतिम अर्ज प्रक्रिया संबंधित कंपन्यांच्या अधिकृत पोर्टल्सवर होईल, जे इंटर्नशिप तपशिलांमध्ये जोडले जातील.",
        faq4Question: "जर मला एखादी समस्या आली किंवा काही सूचना असेल तर काय करावे?",
        faq4Answer: "आम्ही तुमच्या प्रतिक्रियांचे स्वागत करतो! तुम्ही आमच्या संपर्क फॉर्मद्वारे किंवा support@pmintern.com वर ईमेल पाठवून आमच्याशी संपर्क साधू शकता.",
        contactHeading: "आमच्याशी संपर्क साधा",
        contactText: "तुम्ही जे शोधत आहात ते सापडत नाहीये? थेट आमच्याशी संपर्क साधा.",
        contactBtn: "आम्हाला ईमेल पाठवा",
        // --- Login / Register Page Text ---
        loginPageTitle: "लॉगिन / नोंदणी",
        loginHeading: "लॉगिन",
        registerHeading: "नोंदणी",
        roleLabel: "भूमिका",
        idLabel: "ईमेल किंवा मोबाइल",
        passwordLabel: "पासवर्ड",
        nameLabel: "नाव",
        confirmPasswordLabel: "पासवर्डची पुष्टी करा",
        loginBtn: "लॉगिन",
        registerBtn: "नोंदणी",
        noAccountText: "खाते नाहीये?",
        haveAccountText: "आधीच खाते आहे?",
        registerHereLink: "येथे नोंदणी करा",
        loginHereLink: "येथे लॉगिन करा",
        demoText: "डेमो लॉगिन: कोणतेही क्रेडेन्शियल स्वीकारले जातात. भूमिका डॅशबोर्ड ठरवते.",
        candidate: "उमेदवार",
        company: "कंपनी",
        government: "सरकार",
        passwordsDoNotMatch: "पासवर्ड जुळत नाहीत!",
        registrationSuccess: "नोंदणी यशस्वी! लॉगिन पृष्ठावर पुनर्निर्देशित करत आहे...",
        loginSuccess: "लॉगिन यशस्वी! डॅशबोर्डवर पुनर्निर्देशित करत आहे...",
        logout: "लॉग आउट",
        emailMobilePlaceholder: "ईमेल किंवा मोबाइल",
        fullNamePlaceholder: "पूर्ण नाव",
        professionalDetails: "व्यावसायिक तपशील",
        educationalBackground: "शैक्षणिक पार्श्वभूमी",
        skillsAndInterests: "कौशल्ये आणि आवडी",
        resumeUploadLabel: "रिझ्युमे/सीव्ही अपलोड करा (केवळ पीडीएफ)",
        portfolioUrlLabel: "पोर्टफोलिओ/लिंक्डइन यूआरएल",
        educationLevelLabel: "शिक्षणाचे स्तर",
        universityLabel: "विद्यापीठ/महाविद्यालय",
        majorLabel: "प्रमुख/अभ्यासाचे क्षेत्र",
        graduationYearLabel: "पदवीचे वर्ष",
        skillsInputLabel: "तुमची कौशल्ये (कॉमा-सेपरेटेड)",
        workExperienceLabel: "कार्य अनुभव",
        addWorkExperienceBtn: "नवीन अनुभव जोडा",
        locationPreferenceLabel: "स्थान प्राधान्य",
        modalMessage: "हा एक प्लेसहोल्डर संदेश आहे।",
        modalOK: "ठीक आहे",
        workExperiencePlaceholder: "उदा. XYZ कॉर्पमध्ये सॉफ्टवेअर डेव्हलपर.",
        jobTitleLabel: "नोकरीचे शीर्षक",
        companyNameLabel: "कंपनीचे नाव",
        durationLabel: "कालावधी (उदा. जाने. २०२३ - सध्या)",
        responsibilitiesLabel: "मुख्य जबाबदाऱ्या",
        // --- Candidate Dashboard specific translations ---
        candidateDashboardTitle: "उमेदवार डॅशबोर्ड",
        welcomeMessage: (name) => `स्वागत आहे, ${name}`,
        recommendedHeading: "शिफारस केलेल्या इंटर्नशिप",
        searchPlaceholder: "शीर्षक, कंपनी, किंवा स्थानानुसार शोधा...",
        searchBtn: "शोधा",
        editProfileLink: "प्रोफाईल संपादित करा",
        internshipsLink: "इंटर्नशिप",
        editProfileHeading: "प्रोफाईल संपादित करा",
        fullNameLabel: "पूर्ण नाव",
        emailLabel: "ईमेल",
        mobileLabel: "मोबाइल",
        streamLabel: "स्ट्रीम/शाखा",
        passOutYearLabel: "उत्तीर्ण वर्ष",
        skillsLabel: "कौशल्ये (कॉमा-सेपरेटेड)",
        locationLabel: "पसंतीचे स्थान",
        stipendLabel: "स्टायपेंड अपेक्षा",
        saveBtn: "प्रोफाईल जतन करा",
        profileUpdated: "प्रोफाईल यशस्वीरित्या अपडेट झाली आहे!",
        changePhotoLabel: "फोटो बदला",
        removePhotoLabel: "फोटो काढा",
        cancelBtn: "रद्द करा",
        // --- Company Dashboard specific translations ---
        companyDashboardTitle: "कंपनी डॅशबोर्ड",
        postInternshipLink: "इंटर्नशिप पोस्ट करा",
        viewApplicantsLink: "आवेदक पहा",
        postInternshipHeading: "एक नवीन इंटर्नशिप पोस्ट करा",
        viewApplicantsHeading: "आवेदक पहा",
        internshipTitleLabel: "इंटर्नशिप शीर्षक",
        descriptionLabel: "वर्णन",
        postBtn: "इंटर्नशिप पोस्ट करा",
        postSuccess: "इंटर्नशिप यशस्वीरित्या पोस्ट केली!",
        applicantDetails: (name, stream) => `नाव: ${name} | स्ट्रीम: ${stream}`,
        eligibilityLabel: "पात्रता निकष",
        applicationDeadlineLabel: "अर्जाची अंतिम तारीख",
        // --- Government Dashboard specific translations ---
        governmentDashboardTitle: "सरकार डॅशबोर्ड",
        overviewLink: "अवलोकन",
        allInternshipsLink: "सर्व इंटर्नशिप",
        allCandidatesLink: "सर्व उमेदवार",
        overviewHeading: "डॅशबोर्ड अवलोकन",
        allInternshipsHeading: "सर्व पोस्ट केलेल्या इंटर्नशिप",
        allCandidatesHeading: "सर्व नोंदणीकृत उमेदवार",
        totalInternshipsLabel: "एकूण पोस्ट केलेल्या इंटर्नशिप",
        totalCandidatesLabel: "एकूण नोंदणीकृत उमेदवार",
        totalApplicationsLabel: "एकूण प्राप्त अर्ज",
        // --- New Candidate Registration fields ---
        bioLabel: "संक्षिप्त परिचय",
        noFileChosen: "कोणतीही फाइल निवडलेली नाही"
    }
};

function togglelink() {
    const nav = document.getElementById("nav-menu");
    const overlay = document.getElementById('mainOverlay');
    const toggleBtn = document.getElementById("toggle-Link");
    if (nav && overlay && toggleBtn) {
        nav.classList.toggle("show1");
        overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
        if (toggleBtn.classList.contains("active")) {
            toggleBtn.innerHTML = "&#10005;"; // 'X'
        } else {
            toggleBtn.innerHTML = "&#9776;"; // Hamburger
        }
        toggleBtn.classList.toggle("active");
    }
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const translation = translations[lang] ? translations[lang][key] : null;

        if (translation) {
            if (typeof translation === 'function') {
                const name = el.getAttribute('data-name');
                if (name) {
                    el.textContent = translation(name);
                }
            } else if (el.tagName === 'INPUT' && el.placeholder) {
                el.placeholder = translation;
            } else if (el.tagName === 'LABEL') {
                const span = el.querySelector('span');
                if (span) {
                    span.textContent = translation;
                } else {
                    el.textContent = translation;
                }
            } else {
                el.textContent = translation;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("langSelect");
    const currentLang = localStorage.getItem('appLang') || 'en';
    if (langSelect) {
        langSelect.value = currentLang;
    }
    updateLanguage(currentLang);

    if (langSelect) {
        langSelect.addEventListener("change", (event) => {
            const selectedLang = event.target.value;
            localStorage.setItem('appLang', selectedLang);
            window.location.reload();
        });
    }

    // Modal logic (re-integrating as requested)
    const modal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalButton = document.querySelector('.close-button');

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }

    if (closeModalButton) {
        closeModalButton.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
    
    // Register page-specific logic
    const roleSelect = document.getElementById('roleSelect');
    const candidateFields = document.getElementById('candidateFields');
    const addWorkExperienceBtn = document.getElementById('addWorkExperienceBtn');
    const workExperienceContainer = document.getElementById('workExperienceContainer');
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Toggle visibility of candidate-specific fields
    function toggleCandidateFields() {
        if (roleSelect && candidateFields) {
            if (roleSelect.value === 'candidate') {
                candidateFields.style.display = 'block';
            } else {
                candidateFields.style.display = 'none';
            }
        }
    }
    
    toggleCandidateFields();
    if (roleSelect) {
        roleSelect.addEventListener('change', toggleCandidateFields);
    }
    
    // Function to create a new work experience field
    function createWorkExperienceField() {
        const newEntry = document.createElement('div');
        newEntry.classList.add('work-experience-item');
        const lang = localStorage.getItem('appLang') || 'en';
        const langTrans = translations[lang];
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
        if (workExperienceContainer) {
            workExperienceContainer.appendChild(newEntry);
            updateLanguage(lang);
        }
    }
    
    if (addWorkExperienceBtn) {
        addWorkExperienceBtn.addEventListener('click', createWorkExperienceField);
    }
    
    if (workExperienceContainer) {
        workExperienceContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-work-experience')) {
                e.target.closest('.work-experience-item').remove();
            }
        });
    }

    // Form submission handler
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (passwordInput && confirmPasswordInput && passwordInput.value !== confirmPasswordInput.value) {
                showModal(translations[currentLang].passwordsDoNotMatch);
                return;
            }
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
            showModal(translations[currentLang].registrationSuccess);
            registerForm.reset();
        });
    }
});