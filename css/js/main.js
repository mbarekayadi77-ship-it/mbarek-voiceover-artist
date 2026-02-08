/* ==================================================
   Main JS for Professional Voice Over Website
================================================== */

/* =============== Smooth Scroll =============== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =============== Navbar Shrink on Scroll =============== */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 0';
    navbar.style.background = 'rgba(13, 15, 25, 0.99)';
    navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.background = 'rgba(13, 15, 25, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

/* =============== Language Toggle EN/AR =============== */
const langBtn = document.getElementById('langToggle');
langBtn.addEventListener('click', () => {
  const htmlTag = document.querySelector('html');
  const isArabic = htmlTag.getAttribute('dir') === 'rtl';

  if (isArabic) {
    htmlTag.setAttribute('dir', 'ltr');
    htmlTag.setAttribute('lang', 'en');
    langBtn.textContent = 'AR';
  } else {
    htmlTag.setAttribute('dir', 'rtl');
    htmlTag.setAttribute('lang', 'ar');
    langBtn.textContent = 'EN';
  }
});

/* =============== Hero Button Hover Effects =============== */
const heroButtons = document.querySelectorAll('.hero-buttons .btn');
heroButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

/* =============== Demo Card Animation on Scroll =============== */
const demoCards = document.querySelectorAll('.demo-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

demoCards.forEach(card => observer.observe(card));

/* =============== Service Box Hover Effects =============== */
const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-5px)';
    box.style.boxShadow = '0 10px 20px rgba(255,215,0,0.3)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = 'none';
  });
});

/* =============== Footer Dynamic Year =============== */
const footer = document.querySelector('.footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = © ${currentYear} Mbarek Ayadi. All Rights Reserved.;

/* =============== Optional: Scroll to Top Button =============== */
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '2rem';
scrollTopBtn.style.right = '2rem';
scrollTopBtn.style.padding = '0.6rem 1rem';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '5px';
scrollTopBtn.style.background = '#00bfff';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

/* ==================================================
   End of JS
================================================== */
