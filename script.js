// Select the h1 element
const header = document.querySelector('h1');

// Add a click event listener to the h1 element
header.addEventListener('click', function() {
    // Select the nav element
    const nav = document.querySelector('nav');
    
    // Toggle the display style between 'none' and 'flex'
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});