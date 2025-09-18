//Toogle para modo oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const iconTheme = themeToggle.querySelector('i');

// Toggle para menú móvil
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

//verificar preferencia del usuario
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    iconTheme.classList.remove('fa-moon');
    iconTheme.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        iconTheme.classList.remove('fa-moon');
        iconTheme.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        iconTheme.classList.remove('fa-sun');
        iconTheme.classList.add('fa-moon');
    }
})

// Abrir/cerrar menú móvil
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });


//smooth scroll para navegacion
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

