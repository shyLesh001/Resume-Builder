let educationCount = 0;
let experienceCount = 0;

function addEducation() {
    const container = document.getElementById('education-entries');
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" placeholder="School/University" class="education-school">
        <input type="text" placeholder="Degree" class="education-degree">
        <input type="text" placeholder="Year" class="education-year">
    `;
    container.appendChild(div);
    educationCount++;
}

function addExperience() {
    const container = document.getElementById('experience-entries');
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" placeholder="Company" class="experience-company">
        <input type="text" placeholder="Position" class="experience-position">
        <input type="text" placeholder="Duration" class="experience-duration">
        <textarea placeholder="Description" class="experience-description"></textarea>
    `;
    container.appendChild(div);
    experienceCount++;
}

function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;

    let educationHTML = '';
    document.querySelectorAll('#education-entries > div').forEach(edu => {
        const school = edu.querySelector('.education-school').value;
        const degree = edu.querySelector('.education-degree').value;
        const year = edu.querySelector('.education-year').value;
        
        educationHTML += `
            <div class="education-item">
                <h3>${school}</h3>
                <p>${degree} - ${year}</p>
            </div>
        `;
    });

    let experienceHTML = '';
    document.querySelectorAll('#experience-entries > div').forEach(exp => {
        const company = exp.querySelector('.experience-company').value;
        const position = exp.querySelector('.experience-position').value;
        const duration = exp.querySelector('.experience-duration').value;
        const description = exp.querySelector('.experience-description').value;
        
        experienceHTML += `
            <div class="experience-item">
                <h3>${company}</h3>
                <p><strong>${position}</strong> | ${duration}</p>
                <p>${description}</p>
            </div>
        `;
    });

    const resumeHTML = `
        <div class="resume">
            <div class="header">
                <h1>${fullName}</h1>
                <p>${email} | ${phone}</p>
            </div>
            
            <div class="section">
                <h2>Education</h2>
                ${educationHTML}
            </div>
            
            <div class="section">
                <h2>Experience</h2>
                ${experienceHTML}
            </div>
            
            <div class="section">
                <h2>Skills</h2>
                <p>${skills}</p>
            </div>
        </div>
    `;

    const previewDiv = document.getElementById('resume-preview');
    previewDiv.innerHTML = resumeHTML;
    previewDiv.classList.remove('hidden');
}