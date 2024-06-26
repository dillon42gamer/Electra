// Check if the user has logged in this session
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'index.html'; // Redirect to the login page if not logged in
}
