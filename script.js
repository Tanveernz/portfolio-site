 const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '20px';
  darkModeToggle.style.right = '20px';
  darkModeToggle.style.padding = '10px 15px';
  darkModeToggle.style.borderRadius = '8px';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.backgroundColor = '#333';
  darkModeToggle.style.color = '#fff';
  darkModeToggle.style.cursor = 'pointer';
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Basic Form Validation Feedback (Client-Side)
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
      alert('Please fill out all fields.');
      return;
    }

    alert('Message sent successfully!');
    form.reset();
  });

