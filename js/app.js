//Toogle para modo oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const iconTheme = themeToggle.querySelector('i');

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
        iconTheme.classList.add('fa/moon');
    }
})

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

