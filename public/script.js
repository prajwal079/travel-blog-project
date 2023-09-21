const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('emails').value;
  
    fetch('https://anivery.onrender.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data)
        alert('Subscribed to newsletter!');
        event.target.reset();
    })
    .catch((error) => console.error('Error:', error));
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('text').value;
  
    fetch('https://anivery.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Contact Form submitted!');
        event.target.reset();
    })
    .catch((error) => console.error('Error:', error));
});