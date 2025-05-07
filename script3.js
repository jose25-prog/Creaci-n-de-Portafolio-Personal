document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const formData = new FormData(this);
            const action = this.getAttribute('action');

            formResponse.textContent = 'Enviando mensaje...';

            fetch(action, {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    formResponse.textContent = 'Mensaje enviado exitosamente!';
                    formResponse.className = 'form-response success';
                    contactForm.reset();
                } else {
                    return response.json();
                }
            })
            .then(data => {
                if (data && data.errors) {
                    let errorMessage = 'Hubo un error al enviar el mensaje:';
                    data.errors.forEach(error => {
                        errorMessage += `\n- ${error.message}`;
                    });
                    formResponse.textContent = errorMessage;
                    formResponse.className = 'form-response error';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formResponse.textContent = 'Ocurrió un error inesperado al enviar el mensaje.';
                formResponse.className = 'form-response error';
            });
        });
    }
});