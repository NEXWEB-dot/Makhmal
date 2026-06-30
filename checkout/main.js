document.addEventListener('DOMContentLoaded', () => {
  // ===== TOAST SYSTEM =====
  const toastContainer = document.getElementById('toast-container');
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'bg-black text-brand-white px-6 py-4 text-xs font-bold tracking-widest uppercase shadow-2xl flex items-center space-x-3 toast-enter pointer-events-auto';
    let icon = 'ph-info';
    if (type === 'success') icon = 'ph-check-circle';
    if (type === 'error') icon = 'ph-warning-circle';
    toast.innerHTML = `<i class="ph ${icon} text-lg"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('toast-enter');
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ===== READ PRODUCT DATA FROM URL =====
  const urlParams = new URLSearchParams(window.location.search);
  const productTitle = urlParams.get('title') || 'PRINTED SATIN SHIRT';
  const productPrice = urlParams.get('price') || 'Rs.10,990';
  const productImage = urlParams.get('image') || '../clothes/images/product-2.png';
  const productQty = parseInt(urlParams.get('qty')) || 1;
  const productSize = urlParams.get('size') || 'S';

  // Parse numeric price
  const numericPrice = parseInt(productPrice.replace(/[^0-9]/g, '')) || 10990;
  const totalPrice = numericPrice * productQty;

  // Update order summary sidebar
  document.getElementById('checkout-title').innerText = productTitle;
  document.getElementById('checkout-price').innerText = `Rs.${totalPrice.toLocaleString()}`;
  document.getElementById('checkout-qty').innerText = productQty;
  document.getElementById('checkout-size').innerText = productSize;
  document.getElementById('subtotal').innerText = `Rs.${totalPrice.toLocaleString()}`;
  document.getElementById('total').innerText = `Rs.${totalPrice.toLocaleString()}`;

  // Fix image path (from product page context, images are relative to ../clothes/)
  const imgEl = document.getElementById('checkout-image');
  if (imgEl) imgEl.src = productImage;

  // ===== COUPON CODE =====
  let discountApplied = false;
  const couponInput = document.getElementById('coupon-input');
  const applyCouponBtn = document.getElementById('apply-coupon');
  const couponMessage = document.getElementById('coupon-message');
  const discountRow = document.getElementById('discount-row');
  const discountAmountEl = document.getElementById('discount-amount');
  const totalEl = document.getElementById('total');

  applyCouponBtn.addEventListener('click', () => {
    const code = couponInput.value.trim().toUpperCase();
    couponMessage.classList.remove('hidden');

    if (code === 'MAKHMAL10' && !discountApplied) {
      discountApplied = true;
      const discount = Math.round(totalPrice * 0.10);
      const newTotal = totalPrice - discount;
      discountRow.classList.remove('hidden');
      discountRow.classList.add('flex');
      discountAmountEl.innerText = `-Rs.${discount.toLocaleString()}`;
      totalEl.innerText = `Rs.${newTotal.toLocaleString()}`;
      couponMessage.innerText = '✓ Coupon applied successfully!';
      couponMessage.className = 'text-[0.6rem] mt-2 tracking-wide text-success font-medium';
      showToast('10% discount applied!', 'success');
    } else if (discountApplied) {
      couponMessage.innerText = 'Coupon already applied.';
      couponMessage.className = 'text-[0.6rem] mt-2 tracking-wide text-grey-5';
    } else {
      couponMessage.innerText = 'Invalid coupon code. Try MAKHMAL10';
      couponMessage.className = 'text-[0.6rem] mt-2 tracking-wide text-danger';
    }
  });

  // ===== STEP NAVIGATION =====
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const step1Circle = document.getElementById('step-1-circle');
  const step2Circle = document.getElementById('step-2-circle');
  const step3Circle = document.getElementById('step-3-circle');
  const stepLine1 = document.getElementById('step-line-1');
  const stepLine2 = document.getElementById('step-line-2');

  function goToStep(stepNum) {
    // Hide all steps
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');

    if (stepNum === 1) {
      step1.classList.remove('hidden');
      step1Circle.className = 'step-circle active';
      step2Circle.className = 'step-circle inactive';
      step3Circle.className = 'step-circle inactive';
      stepLine1.className = 'step-line';
      stepLine2.className = 'step-line';
    } else if (stepNum === 2) {
      step2.classList.remove('hidden');
      step1Circle.className = 'step-circle completed';
      step1Circle.innerHTML = '<i class="ph ph-check"></i>';
      step2Circle.className = 'step-circle active';
      step3Circle.className = 'step-circle inactive';
      stepLine1.className = 'step-line completed';
      stepLine2.className = 'step-line';
    } else if (stepNum === 3) {
      step3.classList.remove('hidden');
      step1Circle.className = 'step-circle completed';
      step1Circle.innerHTML = '<i class="ph ph-check"></i>';
      step2Circle.className = 'step-circle completed';
      step2Circle.innerHTML = '<i class="ph ph-check"></i>';
      step3Circle.className = 'step-circle completed';
      step3Circle.innerHTML = '<i class="ph ph-check"></i>';
      stepLine1.className = 'step-line completed';
      stepLine2.className = 'step-line completed';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== SHIPPING FORM =====
  const shippingForm = document.getElementById('shipping-form');
  shippingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const zip = document.getElementById('zip').value.trim();

    if (!firstName || !lastName || !email || !phone || !address || !city || !zip) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    showToast('Shipping info saved', 'success');
    goToStep(2);
  });

  // ===== PAYMENT FORM =====
  const paymentForm = document.getElementById('payment-form');
  const cardDetails = document.getElementById('card-details');
  const paymentRadios = document.querySelectorAll('input[name="payment"]');

  // Toggle card details visibility
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'card') {
        cardDetails.classList.remove('hidden');
      } else {
        cardDetails.classList.add('hidden');
      }
    });
  });

  // Card number formatting
  const cardNumberInput = document.getElementById('card-number');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = value;
    });
  }

  // Expiry formatting
  const cardExpiryInput = document.getElementById('card-expiry');
  if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
      }
      e.target.value = value;
    });
  }

  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

    if (selectedPayment === 'card') {
      const cardNum = document.getElementById('card-number').value.trim();
      const expiry = document.getElementById('card-expiry').value.trim();
      const cvv = document.getElementById('card-cvv').value.trim();
      if (!cardNum || !expiry || !cvv) {
        showToast('Please fill in card details', 'error');
        return;
      }
    }

    // Generate order number
    const orderNum = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('order-number').innerText = orderNum;

    // Fill confirmation details
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const confirmationDetails = document.getElementById('confirmation-details');
    const paymentLabel = selectedPayment === 'cod' ? 'Cash on Delivery' : selectedPayment === 'card' ? 'Credit/Debit Card' : 'Easypaisa/JazzCash';

    confirmationDetails.innerHTML = `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Shipping:</strong> ${address}, ${city}</p>
      <p><strong>Payment:</strong> ${paymentLabel}</p>
      <p><strong>Item:</strong> ${productTitle}</p>
      <p><strong>Qty:</strong> ${productQty} × Size ${productSize}</p>
      <p class="pt-2 border-t border-grey-3 mt-2"><strong>Total Paid:</strong> ${totalEl.innerText}</p>
    `;

    showToast('Order placed successfully!', 'success');
    goToStep(3);
  });

  // Back button
  document.getElementById('back-to-shipping').addEventListener('click', () => {
    goToStep(1);
  });

  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});
