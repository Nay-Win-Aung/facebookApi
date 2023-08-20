document.getElementById('login-button').addEventListener('click', function () {
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', { fields: 'id,name,email' }, function(response) {
                const userInfo = document.getElementById('user-info');
                userInfo.innerHTML = `
                    <p>Name: ${response.name}</p>
                    <p>Email: ${response.email}</p>
                    <p>ID: ${response.id}</p>
                `;
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { scope: 'public_profile,email' });
});
