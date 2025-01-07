// Developer Note: This is a dummy form handler that doesn't actually send emails
    // It's just for demonstration purposes
    function handleSubmit(event) {
        event.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Log to console for developers
        console.log('Form submitted with:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        return false;
    }