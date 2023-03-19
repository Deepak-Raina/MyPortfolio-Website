// Smooth scrolling
const scroll = new SmoothScroll('.nav-menu a[href*="#"]', {
    speed: 800,
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle input');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('slide');
  });
  
  // Change active link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  });

  const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // Send the message via email using an API or backend service
  // You can also display a success message or redirect the user to a confirmation page
});

  
  // Lightbox Gallery
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      lightbox.style.display = 'flex';
      const imgSrc = this.querySelector('img').getAttribute('src');
      lightboxImg.src = imgSrc;
    });
  });
  
  lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
  
  lightboxClose.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
  