
    // Obtener el botón hamburguesa y el menú
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    // Agregar el evento de clic para abrir/cerrar el menú
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // Gestionar la visibilidad del submenú en dispositivos pequeños
    const submenuItems = document.querySelectorAll('.submenu');

    submenuItems.forEach(submenu => {
        submenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic en el submenú cierre el menú
            submenu.classList.toggle('open');
        });
    });

