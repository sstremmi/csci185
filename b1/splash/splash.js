document.addEventListener('DOMContentLoaded', function() {
    var fadeIn = document.getElementById('fadein');

    // Trigger the fade-in effect after a short delay (you can adjust this)
    setTimeout(function() {
        fadeIn.style.opacity = '1';
    }, 500);
});