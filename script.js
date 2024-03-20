const header = document.querySelector('h1');

header.addEventListener('click', function() {
    const nav = document.querySelector('nav');
    
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});