// Language Management
let currentLanguage = 'en';

// Get browser language
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    const shortLang = lang.split('-')[0];

    // Check if we have exact match
    if (translations[lang]) {
        return lang;
    }

    // Check if we have short language code
    if (translations[shortLang]) {
        return shortLang;
    }

    // Default to English
    return 'en';
}

// Load language from localStorage or browser
function loadLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = getBrowserLanguage();
    }
    applyTranslations();
    updateLanguageDisplay();
}

// Apply translations to the page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Update language display in button
function updateLanguageDisplay() {
    const langDisplay = document.getElementById('currentLanguage');
    if (langDisplay) {
        langDisplay.textContent = currentLanguage.toUpperCase();
    }

    // Update active state in dropdown
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Change language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        applyTranslations();
        updateLanguageDisplay();
    }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Load language
    loadLanguage();

    // Language selector functionality
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageButton && languageDropdown) {
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
            languageButton.classList.toggle('active');
        });

        // Language option click
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                languageDropdown.classList.remove('active');
                languageButton.classList.remove('active');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
                languageButton.classList.remove('active');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animate risk gauge on scroll
    const riskGauge = document.querySelector('.gauge-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateRiskScore();
            }
        });
    });

    if (riskGauge) {
        observer.observe(riskGauge);
    }

    function animateRiskScore() {
        const scoreElement = document.querySelector('.risk-score');
        if (scoreElement) {
            let currentScore = 0;
            const targetScore = 7.2;
            const increment = targetScore / 50;

            const timer = setInterval(() => {
                currentScore += increment;
                if (currentScore >= targetScore) {
                    currentScore = targetScore;
                    clearInterval(timer);
                }
                scoreElement.textContent = currentScore.toFixed(1);
            }, 30);
        }
    }

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#667eea';
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e5e5e5';
        });
    });

    // Track download button clicks
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Download button clicked');
        });
    });

    // Add parallax effect to hero section (disabled on mobile for performance)
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroVisual = document.querySelector('.hero-visual');

            if (heroVisual && scrolled < window.innerHeight) {
                const rate = scrolled * -0.3;
                heroVisual.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Animate security rings
    const rings = document.querySelectorAll('.ring');
    rings.forEach((ring, index) => {
        ring.style.animationDelay = `${index}s`;
    });

    // Gallery functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const galleryImages = document.querySelectorAll('.gallery-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const index = this.getAttribute('data-index');

            // Remove active class from all thumbnails and images
            thumbnails.forEach(t => t.classList.remove('active'));
            galleryImages.forEach(img => img.classList.remove('active'));

            // Add active class to clicked thumbnail and corresponding image
            this.classList.add('active');
            const targetImage = document.querySelector(`.gallery-image[data-index="${index}"]`);
            if (targetImage) {
                targetImage.classList.add('active');
            }
        });
    });

    // Auto-rotate gallery (optional - uncomment to enable)
    /*
    let currentImageIndex = 0;
    const autoRotateGallery = () => {
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

            thumbnails.forEach(t => t.classList.remove('active'));
            galleryImages.forEach(img => img.classList.remove('active'));

            const activeThumbnail = document.querySelector(`.thumbnail[data-index="${currentImageIndex}"]`);
            const activeImage = document.querySelector(`.gallery-image[data-index="${currentImageIndex}"]`);

            if (activeThumbnail && activeImage) {
                activeThumbnail.classList.add('active');
                activeImage.classList.add('active');
            }
        }, 4000);
    };
    autoRotateGallery();
    */

    // Add touch-friendly interactions for iOS
    if ('ontouchstart' in window) {
        // Add active state on touch
        const interactiveElements = document.querySelectorAll('.feature-card, .category-item, .use-case, .thumbnail');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });

            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            });
        });
    }

    // Prevent pull-to-refresh on iOS when at top of page
    let lastTouchY = 0;
    let preventPullToRefresh = false;

    document.addEventListener('touchstart', function(e) {
        if (e.touches.length !== 1) return;
        lastTouchY = e.touches[0].clientY;
        preventPullToRefresh = window.pageYOffset === 0;
    }, { passive: false });

    document.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const touchYDelta = touchY - lastTouchY;
        lastTouchY = touchY;

        if (preventPullToRefresh) {
            if (touchYDelta > 0) {
                e.preventDefault();
                return;
            }
            preventPullToRefresh = false;
        }
    }, { passive: false });
});
