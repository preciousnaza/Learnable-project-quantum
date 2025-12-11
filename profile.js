document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user data from sessionStorage
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString) {
        try {
            const userData = JSON.parse(userDataString);
            // Update the elements in pro-details
            document.querySelector('.pro-details .username').textContent = userData.username || 'User';
            document.querySelector('.pro-details .email').textContent = userData.email || 'user@example.com';
            document.querySelector('.pro-details .gender').textContent = userData.gender || 'Male';
            document.querySelector('.pro-details .birthday').textContent = userData.birthday || '2025-12-9';
        } catch (error) {
            console.error('Error parsing user data from sessionStorage:', error);
        }
    } else {
        console.log('No user data found in sessionStorage');
    }
});
