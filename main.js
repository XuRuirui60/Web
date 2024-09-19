document.addEventListener('scroll', function () {
    var header = document.querySelector('header');

    // Change background color on scroll
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});
