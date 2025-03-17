function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function registerUser() {
    alert('User registered: ' + document.getElementById('regName').value);
}

function loginUser() {
    alert('Logged in with email: ' + document.getElementById('loginEmail').value);
}

function updateProfile() {
    alert('Profile updated: ' + document.getElementById('updateName').value);
}

function searchSkills() {
    alert('Searching for: ' + document.getElementById('skillSearch').value);
}

function offerSkill() {
    alert('Skill offered: ' + document.getElementById('offerSkill').value);
}

function initiateSession() {
    alert('Session initiated: ' + document.getElementById('sessionDetail').value);
}

function sendMessage() {
    alert('Message sent: ' + document.getElementById('message').value);
}

function submitFeedback() {
    alert('Feedback submitted: ' + document.getElementById('feedbackText').value);
}
