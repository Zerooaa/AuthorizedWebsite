let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => 
        {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
        });
}


document.getElementById('noauth').addEventListener('click', function() {
    // Create a new anchor element
    var downloadLink = document.createElement('a');
    // Set the href attribute to the link of the HTML file you want to download
    downloadLink.href = 'pupwebsite.htm';
    // Set the download attribute to specify the filename
    downloadLink.download = 'pup.html';
    // Click the anchor element to trigger the download
    downloadLink.click();
});

document.getElementById('withauth').addEventListener('click', function() {
    // Display the password modal
    document.getElementById('passwordModal').style.display = 'block';
});

// Close the modal if the user clicks on the close button
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('passwordModal').style.display = 'none';
});

// Confirm password
document.getElementById('confirmPassword').addEventListener('click', function() {
    var enteredPassword = document.getElementById('passwordInput').value;
    // Check if the entered password matches the correct password
    if (enteredPassword === 'cybersecurity') {
        // Create a new anchor element
        var downloadLink = document.createElement('a');
        // Set the href attribute to the link of the HTML file you want to download
        downloadLink.href = 'pupwebsite.htm';
        // Set the download attribute to specify the filename
        downloadLink.download = 'pup.html';
        // Click the anchor element to trigger the download
        downloadLink.click();
        // Close the modal
        document.getElementById('passwordModal').style.display = 'none';
    } else {
        alert('Incorrect password. Please try again.');
        // Clear the password input field
        document.getElementById('passwordInput').value = '';
    }
});