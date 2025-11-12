// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
    } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
        e.preventDefault();
            const target = document.querySelector(href);
        if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
            });
        }
    });
});

    // Show/hide floating CTA based on scroll
    const floatingCTA = document.getElementById('floatingCTA');
    const chatBubble = document.getElementById('chatBubble');
    const contactForm = document.getElementById('contact-form');
    
    if (floatingCTA && contactForm) {
        window.addEventListener('scroll', function() {
            const contactPosition = contactForm.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            
            // Hide floating elements when user is at or past the contact form
            if (scrollPosition >= contactPosition + 200) {
                floatingCTA.style.opacity = '0';
                floatingCTA.style.pointerEvents = 'none';
                if (chatBubble) {
                    chatBubble.style.opacity = '0';
                    chatBubble.style.pointerEvents = 'none';
                }
            } else {
                floatingCTA.style.opacity = '1';
                floatingCTA.style.pointerEvents = 'all';
                if (chatBubble) {
                    chatBubble.style.opacity = '1';
                    chatBubble.style.pointerEvents = 'all';
                }
            }
        });
    }

    // Header remains consistent - no scroll effects

    // Form validation and enhancement
    const leadForm = document.querySelector('.lead-form-optimized');
    if (leadForm) {
        // Phone number formatting as user types
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 10) value = value.substr(0, 10);
                
                if (value.length >= 6) {
                    e.target.value = `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6)}`;
                } else if (value.length >= 3) {
                    e.target.value = `(${value.substr(0, 3)}) ${value.substr(3)}`;
                } else {
                    e.target.value = value;
                }
            });
        }
        
        // Form submission tracking
        leadForm.addEventListener('submit', function(e) {
            // Disable submit button to prevent double submission
            const submitBtn = leadForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.6';
                submitBtn.querySelector('.button-text').textContent = 'Submitting...';
            }
        });
        
        // Basic validation feedback
        const inputs = leadForm.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                this.style.borderColor = '#ef4444';
            });
            
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.style.borderColor = '';
                }
            });
        });
    }

    // Check if form was submitted successfully
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        // Trigger confetti!
        createConfetti();
        
        // Remove the query parameter from URL
        const url = new URL(window.location);
        url.searchParams.delete('submitted');
        window.history.replaceState({}, '', url);
    }

    // Add animation on scroll for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe testimonials and service items
    const animatedElements = document.querySelectorAll('.testimonial, .service-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Chat bubble functionality
    const chatIcon = document.getElementById('chatIcon');
    const chatCard = document.getElementById('chatCard');
    const chatClose = document.getElementById('chatClose');
    const quickMessageForm = document.getElementById('quickMessageForm');
    
    if (chatIcon && chatCard) {
        chatIcon.addEventListener('click', function() {
            chatCard.classList.add('active');
        });
        
        if (chatClose) {
            chatClose.addEventListener('click', function(e) {
                e.stopPropagation();
                chatCard.classList.remove('active');
            });
        }
    }
    
    if (quickMessageForm) {
        quickMessageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('quickPhone').value;
            const message = document.getElementById('quickMessage').value;
            
            // Send to backend (you can modify this)
            fetch('/quick-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone: phone, message: message })
            })
            .then(response => response.json())
            .then(data => {
                // Show success message
                chatCard.innerHTML = `
                    <div class="chat-card-header">
                        <div>
                            <i class="fas fa-check-circle"></i>
                            <span>Message Sent!</span>
                        </div>
                    </div>
                    <div class="chat-card-body">
                        <p style="text-align: center; color: var(--success-green); font-weight: 600;">
                            Thanks! We'll text you back within the hour.
                        </p>
                    </div>
                `;
                
                setTimeout(() => {
                    chatCard.classList.remove('active');
                    setTimeout(() => {
                        quickMessageForm.reset();
                        location.reload(); // Reload to reset the form
                    }, 500);
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Message sent! We\'ll text you back soon.');
                chatCard.classList.remove('active');
                quickMessageForm.reset();
            });
        });
    }
    
    // Confetti animation function
    function createConfetti() {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            // Create confetti from different origins
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            }));
        }, 250);
    }
    
    // Before/After Slideshow Functionality
    const slideshowContainer = document.getElementById('slideshowContainer');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const indicators = document.querySelectorAll('.indicator');
    const slides = slideshowContainer ? slideshowContainer.querySelectorAll('.slide') : [];
    
    let currentSlide = 0;
    let autoSlideInterval;
    
    function showSlide(index) {
        if (!slideshowContainer || slides.length === 0) return;
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Ensure index is within bounds
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Add active class to current slide and indicator
        slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) {
            indicators[currentSlide].classList.add('active');
        }
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startAutoSlide() {
        // Auto-advance slides every 5 seconds
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }
    
    // Initialize slideshow
    if (slideshowContainer && slides.length > 0) {
        // Set up navigation buttons
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        }
        
        // Set up indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                stopAutoSlide();
                startAutoSlide();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (slideshowContainer.getBoundingClientRect().top < window.innerHeight && 
                slideshowContainer.getBoundingClientRect().bottom > 0) {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    stopAutoSlide();
                    startAutoSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                }
            }
        });
        
        // Pause auto-slide on hover
        slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
        slideshowContainer.addEventListener('mouseleave', startAutoSlide);
        
        // Start auto-slide
        startAutoSlide();
    }
});
