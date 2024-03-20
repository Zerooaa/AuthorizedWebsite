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
    var downloadLink = document.createElement('a');
    downloadLink.href = 'pupwebsite.html';
    downloadLink.download = 'pup.html';
    downloadLink.click();
});

document.getElementById('withauth').addEventListener('click', function() {
    document.getElementById('passwordModal').style.display = 'block';
});


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('passwordModal').style.display = 'none';
});

document.getElementById('confirmPassword').addEventListener('click', function() {
    var enteredPassword = document.getElementById('passwordInput').value;
    if (enteredPassword === 'cybersecurity') {
        var downloadLink = document.createElement('a');
        downloadLink.href = 'pupwebsite.html';
        downloadLink.download = 'pup.html';
        downloadLink.click();
        document.getElementById('passwordModal').style.display = 'none';
    } else {
        alert('Incorrect Password. Please try again.');
        document.getElementById('passwordInput').value = '';
    }
});