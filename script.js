// Dream Trip - Interactive JavaScript
// Language: Czech (default) / English

class DreamTripApp {
    constructor() {
        this.currentLanguage = 'cs';
        this.currentTheme = 'light';
        this.isScrolling = false;
        this.init();
    }

    init() {
        this.detectLanguage();
        this.detectTheme();
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupSmoothScrolling();
        this.setupNavigation();
        this.setupLanguageToggle();
        this.setupThemeToggle();
        this.setupFormHandling();
        this.setupLazyLoading();
        this.setupAccessibility();
        this.handleInitialHash();
    }

    // Language Detection and Management
    detectLanguage() {
        // Check URL for language parameter
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const isEnglish = browserLang.startsWith('en') || langParam === 'en';
        
        // Check if we're on /en route
        const isEnRoute = window.location.pathname.includes('/en');
        
        if (isEnglish || isEnRoute) {
            this.currentLanguage = 'en';
            this.switchLanguage('en');
        } else {
            this.currentLanguage = 'cs';
            this.switchLanguage('cs');
        }
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        
        // Get current hash if exists
        const currentHash = window.location.hash;
        
        // Redirect to the appropriate page while preserving hash
        if (lang === 'en' && !window.location.pathname.includes('/en')) {
            window.location.href = '/en.html' + currentHash;
        } else if (lang === 'cs' && window.location.pathname.includes('/en')) {
            window.location.href = '/index.html' + currentHash;
        }
        
        // Store preference
        localStorage.setItem('dreamTripLanguage', lang);
    }

    getLanguageContent(lang) {
        const content = {
            cs: {
                title: "Dream Trip - Vaše dobrodružství, naplánované pro vás",
                description: "Personalizované cestovní itineráře pro rodiny, páry a dobrodruhy. Autentická dobrodružství bez stresu z plánování.",
                hero: {
                    title: "Vaše dobrodružství, naplánované pro vás",
                    subtitle: "Personalizované cestovní itineráře pro rodiny, páry a dobrodruhy, kteří chtějí autentická dobrodružství bez stresu z plánování.",
                    cta: "Získejte svůj první plán"
                },
                nav: {
                    about: "O nás",
                    howItWorks: "Jak to funguje",
                    showcase: "Ukázka",
                    packages: "Balíčky",
                    contact: "Kontakt"
                },
                about: {
                    title: "O nás",
                    content: "Jsme Pavel a Lenka – vášniví cestovatelé, kteří strávili roky objevováním světa na vlastní pěst. Prošli jsme kolem 8000m himálajského vrcholu, přešli Šalamounovy ostrovy, projeli Jižní Ameriku a Oceánii, a nyní objevujeme přírodu se svým malým synem pod hvězdami, ve stanech nebo v jedinečných penzionech."
                },
                cta: {
                    title: "Připraveni na své další dobrodružství?",
                    subtitle: "Začněte svou cestu ještě dnes a získejte itinerář na míru",
                    button: "Získejte svůj itinerář"
                }
            },
            en: {
                title: "Dream Trip - Your Adventure, Planned for You",
                description: "Personalized travel itineraries for families, couples, and explorers who want authentic adventures without the stress of planning.",
                hero: {
                    title: "Your Adventure, Planned for You",
                    subtitle: "Personalized travel itineraries for families, couples, and explorers who want authentic adventures without the stress of planning.",
                    cta: "Get Your First Plan"
                },
                nav: {
                    about: "About Us",
                    howItWorks: "How It Works",
                    showcase: "Showcase",
                    packages: "Packages",
                    contact: "Contact"
                },
                about: {
                    title: "About Us",
                    content: "We are Pavel and Lenka – passionate travelers who spent years exploring the world on our own. We've hiked around an 8,000m Himalayan peak, crossed the Solomon Islands, road-tripped through South America and Oceania, and now explore nature with our little son under the stars, in tents, or in unique guesthouses."
                },
                cta: {
                    title: "Ready for your next adventure?",
                    subtitle: "Start your journey today and get a custom itinerary",
                    button: "Get Your Itinerary"
                }
            }
        };
        
        return content[lang] || content.cs;
    }

    updatePageContent(content) {
        // Update title
        document.title = content.title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', content.description);
        }
        
        // Update hero section
        const heroTitle = document.querySelector('.hero-title .title-text');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroCta = document.querySelector('.hero-content .cta-button');
        
        if (heroTitle) heroTitle.textContent = content.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
        if (heroCta) heroCta.innerHTML = `<i class="fas fa-map-marked-alt"></i> ${content.hero.cta}`;
        
        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const navTexts = [
            content.nav.about,
            content.nav.howItWorks,
            content.nav.showcase,
            content.nav.packages,
            content.nav.contact
        ];
        
        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = navTexts[index];
            }
        });
        
        // Update CTA section
        const ctaTitle = document.querySelector('#cta h2');
        const ctaSubtitle = document.querySelector('#cta p');
        const ctaButton = document.querySelector('#cta .cta-button');
        
        if (ctaTitle) ctaTitle.textContent = content.cta.title;
        if (ctaSubtitle) ctaSubtitle.textContent = content.cta.subtitle;
        if (ctaButton) ctaButton.innerHTML = `<i class="fas fa-paper-plane"></i> ${content.cta.button}`;
    }

    updateNavigation(lang) {
        // Update navigation links based on language
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Keep the same anchor links, just update text content
        });
    }

    updateMetaTags(lang) {
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        
        const content = this.getLanguageContent(lang);
        
        if (ogTitle) ogTitle.setAttribute('content', content.title);
        if (ogDescription) ogDescription.setAttribute('content', content.description);
        if (twitterTitle) twitterTitle.setAttribute('content', content.title);
        if (twitterDescription) twitterDescription.setAttribute('content', content.description);
    }

    updateURL(lang) {
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        
        if (lang === 'en' && !currentPath.includes('/en')) {
            // Switch to English
            const newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
            window.history.pushState({}, '', newPath + currentSearch);
        } else if (lang === 'cs' && currentPath.includes('/en')) {
            // Switch to Czech
            const newPath = currentPath.replace('/en', '') || '/';
            window.history.pushState({}, '', newPath + currentSearch);
        }
    }

    updateLanguageToggle(lang) {
        const toggle = document.getElementById('lang-toggle');
        const mobileToggle = document.getElementById('mobile-lang-toggle');
        
        if (toggle) {
            const nextLang = lang === 'cs' ? 'EN' : 'CS';
            toggle.innerHTML = `<i class="fas fa-globe"></i> ${nextLang}`;
        }
        
        if (mobileToggle) {
            const nextLang = lang === 'cs' ? 'EN' : 'CS';
            mobileToggle.innerHTML = `<i class="fas fa-globe"></i> ${nextLang}`;
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Language toggle
        const langToggle = document.getElementById('lang-toggle');
        const mobileLangToggle = document.getElementById('mobile-lang-toggle');
        
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                const newLang = this.currentLanguage === 'cs' ? 'en' : 'cs';
                this.switchLanguage(newLang);
            });
        }
        
        if (mobileLangToggle) {
            mobileLangToggle.addEventListener('click', () => {
                const newLang = this.currentLanguage === 'cs' ? 'en' : 'cs';
                this.switchLanguage(newLang);
                this.closeMobileMenu();
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => {
                this.toggleTheme();
                this.closeMobileMenu();
            });
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                this.openMobileMenu();
            });
        }
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        }
        
        if (mobileMenu) {
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    this.closeMobileMenu();
                }
            });
        }

        // Mobile menu navigation links
        const mobileNavLinks = document.querySelectorAll('.mobile-menu-nav a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // CTA buttons
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.getAttribute('onclick')) {
                    return; // Let onclick handle it
                }
                this.handleCTAClick(e);
            });
        });

        // Package selection
        const packages = document.querySelectorAll('.package');
        packages.forEach(packageElement => {
            packageElement.addEventListener('click', (e) => {
                this.handlePackageClick(e, packageElement);
            });
        });

        // Form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                this.handleFormSubmit(e);
            });
        });

        // Window events
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 16));

        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash
                    window.history.pushState(null, null, `#${targetId}`);
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                }
            });
        });
    }

    // Navigation Management
    setupNavigation() {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileNavLinks = document.querySelectorAll('.mobile-menu-nav .nav-link');
        
        // Highlight active section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    
                    // Update desktop navigation
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                    
                    // Update mobile navigation
                    mobileNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
        });

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Handle hash changes for language switching
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            if (hash) {
                // Update active states based on current hash
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === hash) {
                        link.classList.add('active');
                    }
                });
                
                mobileNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === hash) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.step, .package, .benefit, .testimonial, .feature, .day'
        );
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Theme Detection and Management
    detectTheme() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('dreamTripTheme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.currentTheme = savedTheme;
        } else {
            this.currentTheme = prefersDark ? 'dark' : 'light';
        }
        
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeToggle(theme);
        localStorage.setItem('dreamTripTheme', theme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
    }

    updateThemeToggle(theme) {
        const toggle = document.getElementById('theme-toggle');
        const mobileToggle = document.getElementById('mobile-theme-toggle');
        
        if (toggle) {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        
        if (mobileToggle) {
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // Language Toggle Setup
    setupLanguageToggle() {
        // Load saved language preference
        const savedLang = localStorage.getItem('dreamTripLanguage');
        if (savedLang && savedLang !== this.currentLanguage) {
            this.switchLanguage(savedLang);
        }
    }

    // Theme Toggle Setup
    setupThemeToggle() {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('dreamTripTheme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            this.applyTheme(savedTheme);
        }
    }

    // Handle Initial Hash
    handleInitialHash() {
        const hash = window.location.hash;
        if (hash) {
            // Wait for page to load, then scroll to section
            setTimeout(() => {
                const targetElement = document.getElementById(hash.substring(1));
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }

    // Form Handling
    setupFormHandling() {
        // Contact form handling
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e);
            });
        }

        // Package inquiry form
        const inquiryForms = document.querySelectorAll('.package-inquiry');
        inquiryForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handlePackageInquiry(e);
            });
        });
    }

    // Lazy Loading
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Accessibility
    setupAccessibility() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Přeskočit na hlavní obsah';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content ID
        const mainContent = document.querySelector('main') || document.querySelector('.hero-section');
        if (mainContent) {
            mainContent.id = 'main-content';
        }

        // ARIA labels for interactive elements
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            if (!button.textContent.trim()) {
                button.setAttribute('aria-label', 'Tlačítko');
            }
        });

        // Focus management for modals/dropdowns
        this.setupFocusManagement();
    }

    setupFocusManagement() {
        // Trap focus in modals when they open
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });
    }

    // Mobile Menu Functions
    openMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Event Handlers
    handleScroll() {
        if (this.isScrolling) return;
        
        this.isScrolling = true;
        requestAnimationFrame(() => {
            // Enhanced parallax effect for hero section
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-section');
            const heroBackground = document.querySelector('.hero-background img');
            const parallaxElements = document.querySelectorAll('.hero-parallax');
            
            if (hero && heroBackground) {
                // Background parallax
                const parallax = scrolled * 0.3;
                heroBackground.style.transform = `scale(1.1) translateY(${parallax}px)`;
                
                // Floating elements parallax
                parallaxElements.forEach((element, index) => {
                    const speed = 0.1 + (index * 0.05);
                    const yPos = scrolled * speed;
                    element.style.transform = `translateY(${yPos}px)`;
                });
            }
            
            this.isScrolling = false;
        });
    }

    handleResize() {
        // Recalculate layouts on resize
        this.setupScrollAnimations();
    }

    handleKeyboard(e) {
        // Keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'k':
                    e.preventDefault();
                    this.focusSearch();
                    break;
                case '/':
                    e.preventDefault();
                    this.toggleLanguage();
                    break;
            }
        }
    }

    handleCTAClick(e) {
        const button = e.currentTarget;
        const targetSection = button.dataset.target || 'packages';
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Scroll to target or show contact form
        if (targetSection === 'contact') {
            this.showContactForm();
        } else {
            this.scrollToSection(targetSection);
        }
    }

    handlePackageClick(e, packageElement) {
        // Add selection animation
        packageElement.style.transform = 'scale(0.98)';
        setTimeout(() => {
            packageElement.style.transform = '';
        }, 150);
        
        // Show package details or inquiry form
        const packageType = packageElement.querySelector('h3').textContent;
        this.showPackageInquiry(packageType);
    }

    handleFormSubmit(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        // Add loading state
        form.classList.add('loading');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            form.classList.remove('loading');
            this.showSuccessMessage('Formulář byl úspěšně odeslán!');
            form.reset();
        }, 2000);
    }

    handleContactForm(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        // Validate form
        if (!this.validateForm(form)) {
            return;
        }
        
        // Submit form (replace with actual API call)
        this.submitForm(formData, 'contact');
    }

    handlePackageInquiry(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        // Validate form
        if (!this.validateForm(form)) {
            return;
        }
        
        // Submit form (replace with actual API call)
        this.submitForm(formData, 'package-inquiry');
    }

    // Utility Functions
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    showContactForm() {
        // Create and show contact form modal
        const modal = this.createModal('contact-form');
        document.body.appendChild(modal);
        this.showModal(modal);
    }

    showPackageInquiry(packageType) {
        // Create and show package inquiry modal
        const modal = this.createModal('package-inquiry', { packageType });
        document.body.appendChild(modal);
        this.showModal(modal);
    }

    createModal(type, data = {}) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = this.getModalContent(type, data);
        
        // Add event listeners
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
        
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal(modal);
            });
        }
        
        return modal;
    }

    getModalContent(type, data) {
        const content = {
            'contact-form': `
                <div class="modal">
                    <button class="modal-close" aria-label="Zavřít">&times;</button>
                    <h2>Kontaktujte nás</h2>
                    <form id="contact-form-modal">
                        <div class="form-group">
                            <label for="name">Jméno *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Zpráva *</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="cta-button primary">Odeslat</button>
                    </form>
                </div>
            `,
            'package-inquiry': `
                <div class="modal">
                    <button class="modal-close" aria-label="Zavřít">&times;</button>
                    <h2>Dotaz na balíček: ${data.packageType || 'Vybraný balíček'}</h2>
                    <form id="package-inquiry-modal">
                        <div class="form-group">
                            <label for="inquiry-name">Jméno *</label>
                            <input type="text" id="inquiry-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="inquiry-email">Email *</label>
                            <input type="email" id="inquiry-email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="travel-dates">Předpokládané datum cesty</label>
                            <input type="date" id="travel-dates" name="travel_dates">
                        </div>
                        <div class="form-group">
                            <label for="travelers">Počet cestujících</label>
                            <select id="travelers" name="travelers">
                                <option value="1">1 osoba</option>
                                <option value="2">2 osoby</option>
                                <option value="3">3 osoby</option>
                                <option value="4">4 osoby</option>
                                <option value="5+">5+ osob</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inquiry-message">Další informace</label>
                            <textarea id="inquiry-message" name="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="cta-button primary">Odeslat dotaz</button>
                    </form>
                </div>
            `
        };
        
        return content[type] || content['contact-form'];
    }

    showModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        const firstInput = modal.querySelector('input, textarea, select');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }

    closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modal.remove();
    }

    closeModals() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => this.closeModal(modal));
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }

    submitForm(formData, type) {
        // Simulate API call
        console.log(`Submitting ${type} form:`, Object.fromEntries(formData));
        
        // Show success message
        this.showSuccessMessage('Děkujeme! Brzy vás budeme kontaktovat.');
        
        // Close any open modals
        this.closeModals();
    }

    showSuccessMessage(message) {
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    focusSearch() {
        // Focus search input if it exists
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.focus();
        }
    }

    toggleLanguage() {
        const newLang = this.currentLanguage === 'cs' ? 'en' : 'cs';
        this.switchLanguage(newLang);
    }

    // Utility functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dreamTripApp = new DreamTripApp();
});

// Global functions for onclick handlers
function scrollToSection(sectionId) {
    if (window.dreamTripApp) {
        window.dreamTripApp.scrollToSection(sectionId);
    }
}

// Service Worker registration for PWA capabilities (disabled for now)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
// }
