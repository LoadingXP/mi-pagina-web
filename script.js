function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const logo = document.querySelector('.brand-icon');

logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1) rotate(5deg)';
    logo.style.transition = 'transform 0.3s ease';
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1) rotate(0deg)';
});