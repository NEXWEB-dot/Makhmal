document.addEventListener('DOMContentLoaded', () => {
  // ===== TOAST SYSTEM =====
  const toastContainer = document.getElementById('toast-container');
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'bg-black text-brand-white px-6 py-4 text-xs font-bold tracking-widest uppercase shadow-2xl flex items-center space-x-3 pointer-events-auto';
    toast.style.animation = 'fadeIn 0.3s ease-out forwards';
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

  // ===== PRODUCT DATABASE =====
  const products = {
    1: { title: "EMBROIDERED COTTON VISCOSE SHIRT", price: "Rs.4,990", image: "../clothes/images/product-1.png", sku: "MK-RTW-24-001" },
    2: { title: "PRINTED SATIN SHIRT", price: "Rs.10,990", image: "../clothes/images/product-2.png", sku: "MK-RTW-24-002" },
    3: { title: "EMBROIDERED COTTON VISCOSE SHIRT", price: "Rs.6,990", image: "../clothes/images/product-3.png", sku: "MK-RTW-24-003" },
    4: { title: "2 PIECE - PRINTED LAWN SUIT", price: "Rs.4,990", image: "../clothes/images/product-4.png", sku: "MK-RTW-24-004" },
    5: { title: "3 PIECE - EMBROIDERED DOBBY SUIT", price: "Rs.12,990", image: "../clothes/images/product-5.png", sku: "MK-RTW-24-005" },
    6: { title: "2 PIECE - EMBROIDERED LAWN SUIT", price: "Rs.10,990", image: "../clothes/images/product-6.png", sku: "MK-RTW-24-006" },
    7: { title: "EMBROIDERED LAWN SHIRT", price: "Rs.8,990", image: "../clothes/images/woman.jpg", sku: "MK-RTW-24-007" },
    8: { title: "EMBROIDERED DOBBY SHIRT", price: "Rs.5,590", image: "../clothes/images/woman (2).jpg", sku: "MK-RTW-24-008" },
    9: { title: "3 PIECE - SOLID CROSSHATCH SUIT", price: "Rs.10,990", image: "../clothes/images/woman (3).jpg", sku: "MK-RTW-24-009" },
    10: { title: "3 PIECE - SOLID DOBBY SUIT", price: "Rs.9,990", image: "../clothes/images/woman (4).jpg", sku: "MK-RTW-24-010" },
    11: { title: "2 PIECE - EMBROIDERED LAWN SUIT", price: "Rs.10,990", image: "../clothes/images/woman (6).jpg", sku: "MK-RTW-24-011" },
    12: { title: "3 PIECE - EMBROIDERED JACQUARD SUIT", price: "Rs.13,990", image: "../clothes/images/woman (7).jpg", sku: "MK-RTW-24-012" }
  };

  // ===== DYNAMIC PRODUCT RENDERING =====
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 2;
  const product = products[productId];

  let currentProduct = product || products[2];

  if (product) {
    const titleEl = document.getElementById('product-title');
    const priceEl = document.getElementById('product-price');
    const skuEl = document.getElementById('product-sku');
    const breadcrumbEl = document.getElementById('breadcrumb-name');
    const img1 = document.getElementById('product-image-1');

    if (titleEl) titleEl.innerText = product.title;
    if (priceEl) priceEl.innerText = product.price;
    if (skuEl) skuEl.innerText = "SKU: " + product.sku;
    
    if (breadcrumbEl) {
      breadcrumbEl.innerText = product.title.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    if (img1) img1.src = product.image;

    // Update page title
    document.title = product.title + ' - MAKHMAL';

    // Update installment price
    const numPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
    const installment = Math.round(numPrice / 3);
    const installmentEl = document.getElementById('installment-price');
    if (installmentEl) installmentEl.innerText = `Rs.${installment.toLocaleString()}`;
  }

  // ===== QUANTITY SELECTOR =====
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyInput = document.getElementById('qty-input');

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      let currentVal = parseInt(qtyInput.value) || 1;
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
      }
    });
    
    qtyPlus.addEventListener('click', () => {
      let currentVal = parseInt(qtyInput.value) || 1;
      if (currentVal < 10) {
        qtyInput.value = currentVal + 1;
      } else {
        showToast('Maximum quantity is 10', 'error');
      }
    });
  }

  // ===== TABS LOGIC =====
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      const targetId = button.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // ===== SIZE SELECTOR =====
  let selectedSize = 'S'; // Default
  const sizeButtons = document.querySelectorAll('.size-btn:not(:disabled)');
  const sizeWarning = document.getElementById('size-warning');

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => {
        b.classList.remove('border-black', 'text-black');
        b.classList.add('border-grey-3', 'text-grey-6');
      });
      btn.classList.remove('border-grey-3', 'text-grey-6');
      btn.classList.add('border-black', 'text-black');
      selectedSize = btn.getAttribute('data-size');
      if (sizeWarning) sizeWarning.classList.add('hidden');
    });
  });

  // ===== BUY NOW BUTTON =====
  const buyNowBtn = document.getElementById('buy-now-btn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!selectedSize) {
        if (sizeWarning) sizeWarning.classList.remove('hidden');
        showToast('Please select a size', 'error');
        return;
      }

      const qty = parseInt(qtyInput.value) || 1;
      const title = encodeURIComponent(currentProduct.title);
      const price = encodeURIComponent(currentProduct.price);
      const image = encodeURIComponent(currentProduct.image);
      const size = encodeURIComponent(selectedSize);

      window.location.href = `../checkout/checkout.html?title=${title}&price=${price}&image=${image}&qty=${qty}&size=${size}`;
    });
  }

  // ===== ADD TO WISHLIST =====
  const wishlistBtn = document.getElementById('add-to-cart-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
      const icon = wishlistBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('ph-heart');
        icon.classList.add('ph-fill', 'ph-heart', 'text-danger');
      }
      wishlistBtn.innerHTML = '<i class="ph-fill ph-heart text-base text-danger"></i> ADDED TO WISHLIST';
      showToast('Added to your wishlist!', 'success');
    });
  }

  // ===== COPY LINK =====
  const copyLinkBtn = document.getElementById('copy-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Could not copy link', 'error');
      });
    });
  }

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.getElementById('newsletter-form');
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
    if(el.classList.contains('delay-stagger')) {
      el.style.transitionDelay = `${(index % 4) * 100}ms`;
    }
    observer.observe(el);
  });
});
