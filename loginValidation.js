function validateLogin(event) {
    event.preventDefault();

    let mail = document.getElementById("mail");
    let passwords = document.getElementById("passwords");

    let bug = document.getElementById("bug");
    let bug1 = document.getElementById("bug1");

    // Username validation
    if (mail.value === "admin") {
        // Valid username
        bug.innerHTML = "Username is Valid";
        bug.style.color = "green";
    } else {
        // Invalid username
        bug.innerHTML = "Invalid Username.";
        bug.style.color = "red";
        return false;
    }

    // Password validation
    if (passwords.value === "12345") {
        bug1.innerHTML = "Password is Valid";
        bug1.style.color = "green";
    } else {
        bug1.innerHTML = "Invalid Password.";
        bug1.style.color = "red";
        return false;
    }


    toMainPage();
    return true;
}

function toMainPage() {
    window.location.href = "main.html";
}

function openGoogleSignIn() {
    var redirectUri = encodeURIComponent('https://your-domain.com/google-auth-callback'); // Replace with your redirect URI
    var clientId = 'your-client-id'; // Replace with your client ID
    var scope = 'profile email'; // Replace with desired scopes
    var authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    window.open(authUrl, '_blank', 'width=600,height=600');
}


