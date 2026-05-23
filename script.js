// Función para detectar el scroll y activar animaciones
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Distancia antes de que aparezca

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Escuchar el evento de scroll
window.addEventListener("scroll", reveal);

// Ejecutar una vez al cargar por si hay elementos visibles al inicio
window.addEventListener("load", reveal);

// Efecto sutil en el logo al pasar el mouse
const logo = document.querySelector('.brand-icon');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1) rotate(5deg)';
    logo.style.transition = 'transform 0.3s ease';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1) rotate(0deg)';
});