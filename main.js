const navLink = document.querySelectorAll('.nav-link');
const section = document.querySelectorAll('.main-section');




navLink.forEach(link => {
    if (link.textContent == 'Numbers') {
        const numbers = document.querySelector('#Numbers');
        link.addEventListener('mouseover', function() {
            numbers.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', function() {
            numbers.style.transform = 'scale(1)';
        });
    }
});