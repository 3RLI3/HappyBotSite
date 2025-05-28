// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scrolling for any in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Fade-in reveal on scroll for feature cards, how-to, and FAQ sections
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Elements to animate
  document.querySelectorAll('.feature-card, .how-to, .faq').forEach(el => {
    el.classList.add('hidden-on-scroll');
    revealObserver.observe(el);
  });

  // 3. Optional: back-to-top button behavior (if you add one)
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    });
    backToTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
