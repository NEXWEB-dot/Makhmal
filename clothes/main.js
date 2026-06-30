document.addEventListener('DOMContentLoaded', () => {
  // ===== TOAST SYSTEM =====
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  toastContainer.className = 'fixed bottom-6 right-6 z-[90] flex flex-col space-y-3 pointer-events-none';
  document.body.appendChild(toastContainer);

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'bg-black text-brand-white px-6 py-4 text-xs font-bold tracking-widest uppercase shadow-2xl flex items-center space-x-3 pointer-events-auto';
    toast.style.animation = 'slideUpFade 0.3s ease-out forwards';
    let icon = 'ph-info';
    if (type === 'success') icon = 'ph-check-circle';
    if (type === 'error') icon = 'ph-warning-circle';
    toast.innerHTML = `<i class="ph ${icon} text-lg"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.querySelector('footer form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for subscribing!', 'success');
      newsletterForm.reset();
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const scrollElements = document.querySelectorAll('.scroll-animate');
  scrollElements.forEach((el, index) => {
    if(el.classList.contains('flex-col')) {
      el.style.transitionDelay = `${(index % 4) * 100}ms`;
    }
    observer.observe(el);
  });

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      if (answer) {
        answer.classList.toggle('hidden');
        if (icon) icon.innerText = answer.classList.contains('hidden') ? '+' : '−';
      }
    });
  });
});
