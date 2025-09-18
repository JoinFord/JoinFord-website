// Highlight active nav link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Contact form handler with fade-in message
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const result = document.getElementById('formResult');
      result.textContent = '✅ Thank you for contacting us!';
      result.classList.add('visible');
      form.reset();
      setTimeout(() => {
        result.classList.remove('visible');
        result.textContent = '';
      }, 3500);
    });
  }
});