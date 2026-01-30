
// Main.js - Interaction Logic

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Fade Up Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.fade-up');
  hiddenElements.forEach(el => observer.observe(el));

  // Smooth Scroll for Navigation Links (Fallback for older browsers if needed, but CSS scroll-behavior usually handles it)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if we had one (placeholder for future)
        // window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' }); // Adjust for header offset
        
        targetElement.scrollIntoView({
           behavior: 'smooth',
           block: 'start'
        });
      }
    });
  });
  
  // Header blur effect on scroll optimization
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.style.background = 'rgba(2, 6, 23, 0.95)';
          header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
      } else {
          header.style.background = 'rgba(2, 6, 23, 0.8)';
          header.style.boxShadow = 'none';
      }
  });
});
