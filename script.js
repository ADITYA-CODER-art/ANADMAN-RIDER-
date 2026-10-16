// DOMContentLoaded - सुनिश्चित करता है कि पूरा पेज लोड होने के बाद ही स्क्रिप्ट चले
document.addEventListener('DOMContentLoaded', () => {

  // 1. Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // अगर लिंक एंकर टैग (#) से शुरू होता है
      if(this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 2. Scroll Reveal Animation (सेक्शन स्क्रॉल करते समय धीरे-धीरे दिखाई देंगे)
  const sections = document.querySelectorAll('section');

  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15 // जब सेक्शन 15% दिखाई दे
  });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    sectionObserver.observe(section);
  });

  // 3. Dynamic Footer Year (ऑटोमैटिक करंट ईयर अपडेट करेगा)
  const copyrightEl = document.querySelector('.copyright');
  if(copyrightEl) {
    const currentYear = new Date().getFullYear();
    copyrightEl.innerHTML = `&copy; ${currentYear} Andaman & Nicobar Tourism Guide. All Rights Reserved.`;
  }

});