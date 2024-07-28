document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            fetch('https://formspree.io/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    const confirmationMessage = document.getElementById('confirmationMessage');
                    confirmationMessage.style.display = 'block';
                    document.getElementById('contactForm').reset();

                    confirmationMessage.addEventListener('click', function() {
                        confirmationMessage.style.display = 'none';
                    });
                } else {
                    alert('An error occurred. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
