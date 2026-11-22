/**
 * Aura Café & Roastery - Interactive Script
 * Premium interactivity, filtering, modal management, and smooth UX
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const reservationModal = document.getElementById('reservationModal');
  const openModalBtns = document.querySelectorAll('.open-reservation-modal');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const toastContainer = document.getElementById('toastContainer');

  /* ==========================================================================
     1. Sticky Header & Scroll Spy
     ========================================================================== */
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy for active nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  /* ==========================================================================
     2. Mobile Drawer Navigation
     ========================================================================== */
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================================
     3. Menu Filtering
     ========================================================================== */
  const menuCatBtns = document.querySelectorAll('.menu-cat-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  menuCatBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      menuCatBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      menuCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  /* ==========================================================================
     4. Gallery Filtering & Lightbox Modal
     ========================================================================== */
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-gallery-filter');

      galleryItems.forEach((item) => {
        const itemCat = item.getAttribute('data-gallery-cat');
        if (filterValue === 'all' || itemCat === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Open
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-img');
      const title = item.querySelector('.gallery-title')?.innerText || 'Aura Café & Roastery';
      const category = item.querySelector('.gallery-category')?.innerText || '';

      if (lightboxImg && lightboxCaption && lightboxModal) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.innerHTML = `<strong>${title}</strong> — ${category}`;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Lightbox Close
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================================
     5. Table Reservation Modal
     ========================================================================== */
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (reservationModal) {
        reservationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (reservationModal) {
        reservationModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  if (reservationModal) {
    reservationModal.addEventListener('click', (e) => {
      if (e.target === reservationModal) {
        reservationModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (reservationModal && reservationModal.classList.contains('active')) {
        reservationModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (lightboxModal && lightboxModal.classList.contains('active')) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  /* ==========================================================================
     6. Promo Code Copy
     ========================================================================== */
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          const originalText = btn.innerText;
          btn.innerText = 'Copied!';
          btn.style.background = 'var(--color-gold)';
          btn.style.color = 'var(--color-primary-dark)';
          showToast(`Coupon code "${code}" copied to clipboard! ☕`);

          setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.color = '';
          }, 2500);
        });
      }
    });
  });

  /* ==========================================================================
     7. Add to Order / Quick Action feedback
     ========================================================================== */
  const addItemBtns = document.querySelectorAll('.btn-add-item');
  addItemBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.menu-card');
      const itemName = card.querySelector('.menu-item-name')?.innerText || 'Item';
      showToast(`Added 1x ${itemName} to your order preview! ✨`);
    });
  });

  /* ==========================================================================
     8. Forms: Reservation & Contact Form Handling
     ========================================================================== */
  const modalForm = document.getElementById('modalReservationForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = modalForm.querySelector('[name="name"]').value;
      const guests = modalForm.querySelector('[name="guests"]').value;
      const date = modalForm.querySelector('[name="date"]').value;

      showToast(`Thank you, ${name}! Your table for ${guests} guests on ${date} is reserved.`);
      modalForm.reset();
      reservationModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value;
      showToast(`Thank you, ${name}! Your message has been sent. We will get back to you shortly.`);
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('.newsletter-input');
      if (emailInput && emailInput.value) {
        showToast(`Subscribed! Enjoy 10% off your next visit with your welcome email.`);
        newsletterForm.reset();
      }
    });
  }

  /* ==========================================================================
     9. Toast Notification Utility
     ========================================================================== */
  function showToast(message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#c59b27">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'all 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 3500);
  }

  /* ==========================================================================
     10. Animated Counters for Stats
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const animateStats = () => {
    const statsSection = document.querySelector('.about-badge-exp');
    if (!statsSection || statsAnimated) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      statNumbers.forEach((stat) => {
        const target = +stat.getAttribute('data-target');
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.innerText = target;
          }
        };
        updateCounter();
      });
      statsAnimated = true;
    }
  };

  window.addEventListener('scroll', animateStats);
  animateStats();
});
