document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.getElementById('project-modal');
    const closeButton = modal.querySelector('.close-button');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDescription = modal.querySelector('#modal-description');
    const modalDetails = modal.querySelector('#modal-details');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    projectItems.forEach(item => {
        const viewDetailsButton = item.querySelector('.view-details');
        viewDetailsButton.addEventListener('click', function() {
            const project = item.dataset.project;
            let title = '';
            let description = '';
            let detailsContent = '';

            switch (project) {
                case 'eda-basico':
                    title = 'EDA Básico de un Dataset Pequeño';
                    description = 'Análisis exploratorio inicial de un conjunto de datos simple para comprender sus características principales.';
                    detailsContent = '<p><strong>Tecnologías:</strong> Python, Pandas, Matplotlib, Seaborn.</p>';
                    break;
                case 'visualizacion-simple':
                    title = 'Visualización Simple de Tendencias';
                    description = 'Creación de gráficos básicos para identificar patrones y tendencias en los datos.';
                    detailsContent = '<p><strong>Tecnologías:</strong> Python, Matplotlib, Seaborn.</p>';
                    break;
                case 'prediccion-lineal':
                    title = 'Modelo de Predicción Lineal Simple';
                    description = 'Implementación de un modelo de regresión lineal para predecir una variable basada en otra.';
                    detailsContent = '<p><strong>Tecnologías:</strong> Python, Scikit-learn.</p>';
                    break;
                default:
                    title = 'Detalles del Proyecto';
                    description = 'Información detallada sobre el proyecto.';
                    detailsContent = '<p>Tecnologías utilizadas y descripción detallada.</p>';
                    break;
            }

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalDetails.innerHTML = detailsContent;
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});