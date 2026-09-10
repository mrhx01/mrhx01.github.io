(function () {
    'use strict';

    // ─── TRANSLATIONS ───
    const translations = {
        fa: {
            loading: 'در حال بارگذاری منابع',
            title: 'روح‌اله حسینی · توسعه‌دهنده وب',
            nav: {
                about: 'درباره من',
                skills: 'مهارت‌ها',
                projects: 'پروژه‌ها',
                contact: 'ارتباط با من'
            },
            hero: {
                badge: 'آماده همکاری',
                greeting: 'سلام، من',
                name: 'روح‌اله حسینی',
                title: 'هستم<br />توسعه‌دهنده وب',
                description: 'با ۳ سال تجربه در طراحی و پیاده‌سازی سیستم‌های مقیاس‌پذیر، API‌ها، ربات‌های هوشمند و پنل‌های مدیریتی حرفه‌ای. همیشه در حال یادگیری و بهبود فرآیندها.',
                cta: {
                    work: 'مشاهده کارها',
                    contact: 'ارتباط با من'
                }
            },
            about: {
                label: 'درباره من',
                title: 'کیفیت کد، آینده پروژه است',
                p1: 'من روح‌اله حسینی هستم، توسعه‌دهنده وب با ۳ سال سابقه کاری. تخصص اصلی من در طراحی و پیاده‌سازی <strong>API</strong>های کارآمد، سیستم‌های <strong>اتوماسیون</strong>، <strong>ربات</strong>های تلگرامی و <strong>پنل‌های مدیریتی</strong> پیشرفته است.',
                p2: 'با تسلط بر <strong>C#</strong> و <strong>Python</strong> و فریم‌ورک‌های <strong>ASP.NET Core</strong> و <strong>Django</strong>، راه‌حل‌های مقیاس‌پذیر و بهینه برای چالش‌های کسب‌وکار طراحی می‌کنم. به Frontend نیز تسلط دارم و تجربه کار با <strong>HTML5</strong>، <strong>CSS3</strong>، <strong>Bootstrap</strong> و <strong>jQuery</strong> را دارم.',
                quote: '«یادگیری پایانی ندارد و هر روز فرصتی برای بهتر نوشتن است.»',
                stat1: 'سال سابقه',
                stat2: 'پروژه انجام‌شده',
                stat3: 'API پیاده‌سازی‌شده',
                stat4: 'عشق به کدنویسی'
            },
            skills: {
                label: 'مهارت‌ها',
                title: 'سطح تخصص',
                sub: 'میزان تسلط من بر زبان‌ها و ابزارهای مختلف.',
                level: {
                    pro: 'حرفه‌ای',
                    intermediate: 'متوسط'
                }
            },
            projects: {
                label: 'نمونه کارها',
                title: 'آخرین پروژه‌ها',
                items: [{
                    title: 'طراحی و راه‌اندازی کامل سایت فروشگاهی فروش سرورهای ابری',
                    desc: 'طراحی و توسعه پلتفرم فروش سرورهای ابری با معماری Full-Stack مبتنی بر Django، Django REST Framework و React. این سامانه شامل APIهای اختصاصی، پردازش خودکار سفارشات، اتصال به پروایدرهای بین‌المللی، درگاه پرداخت ایرانی، مدیریت کاربران و امکان خرید سرورهای ساعتی و ماهانه است.',
                    tags: ['Python', 'Django', 'DRF', 'React'],
                    images: [
                        './images/1-1.png',
                        './images/1-2.png'
                    ]
                }, {
                    title: 'طراحی فرانت و بک‌اند و راه‌اندازی سایت فروشگاهی اشتراک پریمیوم',
                    desc: 'توسعه کامل فرانت‌اند و بک‌اند سامانه فروش اشتراک‌های پریمیوم با Django و Bootstrap، شامل معماری ماژولار، مدیریت کاربران و سفارشات، درگاه پرداخت، پنل مدیریتی و سیستم تحویل خودکار محصولات دیجیتال.',
                    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'Bootstrap'],
                    images: [
                        './images/2-1.jpg',
                        './images/2-2.jpg'
                    ]
                }, {
                    title: 'طراحی سایت و اپلیکیشن مدیریت حساب کاربری',
                    desc: 'توسعه سامانه مدیریت سرور و کاربران با ASP.NET Core Web API، Next.js و Android شامل پنل مدیریتی، ساخت خودکار اکانت، اتصال به پنل‌های شبکه، API اختصاصی و اپلیکیشن مدیریت و اتصال به سرورها.',
                    tags: ['C#', 'ASP.NET Web API', 'Nextjs', 'Android'],
                    images: [
                        './images/3-1.jpg',
                        './images/3-2.jpg',
                        './images/3-3.jpg'
                    ]
                },
                {
                    title: 'ربات تلگرامی فروشگاهی همراه با پنل مدیریتی',
                    desc: 'توسعه ربات فروشگاهی تلگرام مبتنی بر Python و Django با معماری ماژولار، پنل مدیریت پیشرفته، مدیریت محصولات و کاربران، سیستم ارسال پیام همگانی، ثبت و مانیتورینگ خطاها، تنظیمات پویا برای دکمه‌ها و پیام‌ها، و امکانات شخصی‌سازی و نگهداری سرویس.',
                    tags: ['Python', 'Django', 'Telegram Bot'],
                    images: [
                        './images/4-1.png',
                        './images/4-2.png',
                        './images/4-3.png',
                        './images/4-4.png',
                    ]
                }


                ]
            },
            contact: {
                label: 'ارتباط با من',
                title: 'بیایید در ارتباط باشیم',
                desc: 'همیشه برای گفتگوهای جذاب، پروژه‌های فریلنسری یا فرصت‌های جدید شغلی آماده‌ام. از طریق راه‌های زیر با من در تماس باشید:'
            },
            footer: {
                made: 'روح‌اله حسینی. ساخته شده با',
                on: 'روی GitHub Pages.'
            }
        },
        en: {
            loading: 'Loading resources',
            title: 'Rouhollah Hosseini · Web Developer',
            nav: {
                about: 'About Me',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact'
            },
            hero: {
                badge: 'Open to Collaborate',
                greeting: "Hello, I'm",
                name: 'Rouhollah Hosseini',
                title: '<br />Web Developer',
                description: 'With 3 years of experience in designing and implementing scalable systems, APIs, intelligent bots, and professional admin panels. Always learning and improving processes.',
                cta: {
                    work: 'View Work',
                    contact: 'Contact Me'
                }
            },
            about: {
                label: 'About Me',
                title: 'Code Quality is the Future of the Project',
                p1: "I'm Rouhollah Hosseini, a web developer with 3 years of experience. My main expertise is in designing and implementing efficient <strong>API</strong>s, <strong>automation</strong> systems, Telegram <strong>bots</strong>, and advanced <strong>admin panels</strong>.",
                p2: 'With expertise in <strong>C#</strong> and <strong>Python</strong> and frameworks like <strong>ASP.NET Core</strong> and <strong>Django</strong>, I design scalable and optimized solutions for business challenges. I also have frontend skills with <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap</strong>, and <strong>jQuery</strong>.',
                quote: '"Learning never ends, and every day is an opportunity to write better code."',
                stat1: 'Years of Experience',
                stat2: 'Projects Completed',
                stat3: 'APIs Implemented',
                stat4: 'Love for Coding'
            },
            skills: {
                label: 'Skills',
                title: 'Expertise Level',
                sub: 'My proficiency in different languages and tools.',
                level: {
                    pro: 'Professional',
                    intermediate: 'Intermediate'
                }
            },
            projects: {
                label: 'Portfolio',
                title: 'Latest Projects',
                items: [{
                    title: 'Full E-Commerce Platform for Cloud Servers',
                    desc: 'Full-Stack platform built with Django, DRF, and React for selling cloud servers. Includes custom APIs, automated order processing, international provider integration, Iranian payment gateway, user management, and hourly/monthly server purchases.',
                    tags: ['Python', 'Django', 'DRF', 'React'],
                    images: [
                        './images/1-1.png',
                        './images/1-2.png'
                    ]
                }, {
                    title: 'Frontend & Backend for Premium Subscription Store',
                    desc: 'Full-stack development of a premium subscription store using Django and Bootstrap. Modular architecture, user & order management, payment gateway, admin panel, and automated digital product delivery.',
                    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'Bootstrap'],
                    images: [
                        './images/2-1.jpg',
                        './images/2-2.jpg'
                    ]
                }, {
                    title: 'Advanced Admin Panel',
                    desc: 'Analytical dashboard with real-time data visualization, interactive charts, and multi-level authentication system for large organizations.',
                    tags: ['C#', 'ASP.NET Web API', 'Bootstrap'],
                    images: [
                        'https://picsum.photos/seed/dash1/800/500',
                        'https://picsum.photos/seed/dash2/800/500',
                        'https://picsum.photos/seed/dash3/800/500'
                    ]
                }]
            },
            contact: {
                label: 'Contact',
                title: "Let's Connect",
                desc: 'Always open for interesting conversations, freelance projects, or new job opportunities. Reach out to me through the channels below:'
            },
            footer: {
                made: 'Rouhollah Hosseini. Made with',
                on: 'on GitHub Pages.'
            }
        }
    };

    let currentLang = 'fa';
    const langNames = { fa: 'فارسی', en: 'English' };
    const langFlags = { fa: '🇮🇷', en: '🇬🇧' };

    // ─── URL Language Detection ───
    function getLangFromURL() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang') || params.get('l');
        if (lang === 'fa' || lang === 'en') return lang;
        return null;
    }

    const urlLang = getLangFromURL();
    if (urlLang) currentLang = urlLang;

    // ─── Preloader (fixed: immediate progress update) ───
    const preloader = document.getElementById('preloader');
    const percentEl = document.getElementById('loaderPercent');
    const barEl = document.getElementById('loaderBar');
    let progress = 0;
    let interval = null;

    function startProgress() {
        progress = 1;
        updateUI(progress);

        interval = setInterval(function () {
            let increment = 0;
            if (progress < 50) increment = Math.floor(Math.random() * 3) + 2;
            else if (progress < 75) increment = Math.floor(Math.random() * 2) + 1;
            else if (progress < 90) increment = Math.random() < 0.3 ? 1 : 0;
            else {
                clearInterval(interval);
                interval = null;
                return;
            }
            progress = Math.min(progress + increment, 90);
            updateUI(progress);
        }, 120);
    }

    function updateUI(value) {
        const rounded = Math.floor(value);
        percentEl.textContent = rounded + '%';
        barEl.style.width = rounded + '%';
    }

    function finishLoading() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
        progress = 100;
        updateUI(100);
        setTimeout(function () { preloader.classList.add('hidden'); }, 400);
    }

    startProgress();
    if (document.readyState === 'complete') finishLoading();
    else window.addEventListener('load', finishLoading);
    setTimeout(function () {
        if (!preloader.classList.contains('hidden')) finishLoading();
    }, 5000);

    // ─── Theme ───
    const themeToggle = document.getElementById('themeToggle');
    let currentTheme = localStorage.getItem('theme') || 'light';

    function setTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    themeToggle.addEventListener('click', function () {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
    setTheme(currentTheme);

    // ─── Language Dropdown ───
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');

    dropdownBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.toggle('open');
        dropdownBtn.classList.toggle('active', isOpen);
    });
    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('open');
        dropdownBtn.classList.remove('active');
    });

    // ─── Lightbox ───
    const lbOverlay = document.getElementById('lightboxOverlay');
    const lbImage = document.getElementById('lbImage');
    const lbCounter = document.getElementById('lbCounter');
    const lbClose = document.getElementById('lbClose');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');
    const lbImageWrap = document.getElementById('lbImageWrap');
    const lbZoomHint = document.getElementById('lbZoomHint');

    let lightboxImages = [];
    let lbCurrentIndex = 0;
    let lbScale = 1;
    let lbTranslateX = 0;
    let lbTranslateY = 0;
    let isZoomed = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragOrigX = 0;
    let dragOrigY = 0;

    function openLightbox(images, index) {
        if (!images || images.length === 0) return;
        lightboxImages = images;
        lbCurrentIndex = Math.min(index, images.length - 1);
        lbScale = 1;
        lbTranslateX = 0;
        lbTranslateY = 0;
        isZoomed = false;
        updateLightboxImage();
        lbOverlay.classList.add('open');
        lbZoomHint.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        lbImage.style.transform = 'scale(1) translate(0px, 0px)';
        lbImage.classList.remove('zoomed');
    }

    function closeLightbox() {
        lbOverlay.classList.remove('open');
        document.body.style.overflow = '';
        lbImage.style.transform = 'scale(1) translate(0px, 0px)';
        lbImage.classList.remove('zoomed');
        isZoomed = false;
        lbScale = 1;
        lbTranslateX = 0;
        lbTranslateY = 0;
    }

    function updateLightboxImage() {
        const src = lightboxImages[lbCurrentIndex];
        lbImage.src = src;
        lbImage.alt = 'Image ' + (lbCurrentIndex + 1);
        lbCounter.textContent = (lbCurrentIndex + 1) + ' / ' + lightboxImages.length;
        lbScale = 1;
        lbTranslateX = 0;
        lbTranslateY = 0;
        isZoomed = false;
        lbImage.style.transform = 'scale(1) translate(0px, 0px)';
        lbImage.classList.remove('zoomed');
        lbZoomHint.classList.remove('hidden');
        setTimeout(() => { lbZoomHint.classList.add('hidden'); }, 3000);
    }

    function goToLightbox(index) {
        if (index < 0) index = lightboxImages.length - 1;
        if (index >= lightboxImages.length) index = 0;
        lbCurrentIndex = index;
        updateLightboxImage();
    }

    function toggleZoom() {
        if (!isZoomed) {
            lbScale = 2.2;
            isZoomed = true;
            lbImage.classList.add('zoomed');
            lbZoomHint.classList.add('hidden');
        } else {
            lbScale = 1;
            lbTranslateX = 0;
            lbTranslateY = 0;
            isZoomed = false;
            lbImage.classList.remove('zoomed');
            lbZoomHint.classList.remove('hidden');
            setTimeout(() => { lbZoomHint.classList.add('hidden'); }, 2000);
        }
        applyLightboxTransform();
    }

    function applyLightboxTransform() {
        lbImage.style.transform = 'scale(' + lbScale + ') translate(' + lbTranslateX + 'px, ' + lbTranslateY +
            'px)';
    }

    // Lightbox event listeners
    lbClose.addEventListener('click', closeLightbox);
    lbOverlay.addEventListener('click', function (e) {
        if (e.target === lbOverlay) closeLightbox();
    });
    lbPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        goToLightbox(lbCurrentIndex - 1);
    });
    lbNext.addEventListener('click', function (e) {
        e.stopPropagation();
        goToLightbox(lbCurrentIndex + 1);
    });
    lbImage.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleZoom();
    });

    document.addEventListener('keydown', function (e) {
        if (!lbOverlay.classList.contains('open')) return;
        if (e.key === 'Escape') { closeLightbox(); return; }
        if (e.key === 'ArrowLeft') { goToLightbox(lbCurrentIndex - 1); return; }
        if (e.key === 'ArrowRight') { goToLightbox(lbCurrentIndex + 1); return; }
    });

    lbImageWrap.addEventListener('wheel', function (e) {
        if (!lbOverlay.classList.contains('open')) return;
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.12 : 0.12;
        let newScale = lbScale + delta;
        newScale = Math.min(Math.max(newScale, 0.8), 4.5);
        lbScale = newScale;
        isZoomed = lbScale > 1.05;
        if (isZoomed) lbImage.classList.add('zoomed');
        else lbImage.classList.remove('zoomed');
        if (isZoomed) lbZoomHint.classList.add('hidden');
        applyLightboxTransform();
    }, { passive: false });

    // mouse drag
    lbImage.addEventListener('mousedown', function (e) {
        if (!isZoomed) return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        dragOrigX = lbTranslateX;
        dragOrigY = lbTranslateY;
        lbImage.style.cursor = 'grabbing';
        e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        lbTranslateX = dragOrigX + dx;
        lbTranslateY = dragOrigY + dy;
        applyLightboxTransform();
    });
    document.addEventListener('mouseup', function () {
        if (isDragging) {
            isDragging = false;
            lbImage.style.cursor = isZoomed ? 'grab' : 'zoom-in';
        }
    });

    // touch events
    let lbTouchStartX = 0,
        lbTouchStartY = 0;
    let lbTouchOrigX = 0,
        lbTouchOrigY = 0;
    let lbTouchStartDist = 0;
    let lbTouchStartScale = 1;

    lbImageWrap.addEventListener('touchstart', function (e) {
        if (!lbOverlay.classList.contains('open')) return;
        const touches = e.touches;
        if (touches.length === 1 && isZoomed) {
            lbTouchStartX = touches[0].clientX;
            lbTouchStartY = touches[0].clientY;
            lbTouchOrigX = lbTranslateX;
            lbTouchOrigY = lbTranslateY;
            isDragging = true;
        } else if (touches.length === 2) {
            const dx = touches[0].clientX - touches[1].clientX;
            const dy = touches[0].clientY - touches[1].clientY;
            lbTouchStartDist = Math.sqrt(dx * dx + dy * dy);
            lbTouchStartScale = lbScale;
            isDragging = false;
        }
    }, { passive: true });

    lbImageWrap.addEventListener('touchmove', function (e) {
        if (!lbOverlay.classList.contains('open')) return;
        const touches = e.touches;
        if (touches.length === 1 && isDragging && isZoomed) {
            const dx = touches[0].clientX - lbTouchStartX;
            const dy = touches[0].clientY - lbTouchStartY;
            lbTranslateX = lbTouchOrigX + dx;
            lbTranslateY = lbTouchOrigY + dy;
            applyLightboxTransform();
            e.preventDefault();
        } else if (touches.length === 2) {
            const dx = touches[0].clientX - touches[1].clientX;
            const dy = touches[0].clientY - touches[1].clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const scaleDelta = dist / lbTouchStartDist;
            let newScale = lbTouchStartScale * scaleDelta;
            newScale = Math.min(Math.max(newScale, 0.8), 4.5);
            lbScale = newScale;
            isZoomed = lbScale > 1.05;
            if (isZoomed) lbImage.classList.add('zoomed');
            else lbImage.classList.remove('zoomed');
            if (isZoomed) lbZoomHint.classList.add('hidden');
            applyLightboxTransform();
            e.preventDefault();
        }
    }, { passive: false });

    lbImageWrap.addEventListener('touchend', function (e) {
        isDragging = false;
        if (lbScale <= 1.05) {
            lbScale = 1;
            lbTranslateX = 0;
            lbTranslateY = 0;
            isZoomed = false;
            lbImage.classList.remove('zoomed');
            applyLightboxTransform();
        }
    }, { passive: true });

    // ─── Render Projects ───
    function renderProjects(lang) {
        const grid = document.getElementById('projectsGrid');
        const items = translations[lang].projects.items;

        grid.innerHTML = '';

        items.forEach(function (project, index) {
            const card = document.createElement('div');
            card.className = 'project-card animate-on-scroll scale-in';
            card.style.setProperty('--i', index);

            let slidesHTML = '';
            project.images.forEach(function (imgSrc, i) {
                slidesHTML += `
                                <div class="slide-image" data-imgindex="${i}">
                                    <img src="${imgSrc}" alt="${project.title} ${i + 1}" loading="lazy" />
                                    <div class="img-placeholder">📷</div>
                                </div>
                            `;
            });

            let tagsHTML = '';
            project.tags.forEach(function (tag) {
                tagsHTML += `<span>${tag}</span>`;
            });

            card.innerHTML = `
                            <div class="project-slider" data-slider="${index}">
                                <div class="slides">${slidesHTML}</div>
                                <button class="slider-btn prev" aria-label="قبلی"><i class="fas fa-chevron-right"></i></button>
                                <button class="slider-btn next" aria-label="بعدی"><i class="fas fa-chevron-left"></i></button>
                                <div class="dots"></div>
                            </div>
                            <div class="card-body">
                                <h3>${project.title}</h3>
                                <p>${project.desc}</p>
                                <div class="project-tags">${tagsHTML}</div>
                                <div class="gallery-hint">
                                    <i class="fas fa-images"></i>
                                    <span>${project.images.length} ${lang === 'fa' ? 'تصویر' : 'images'} · کلیک کنید</span>
                                </div>
                            </div>
                        `;

            grid.appendChild(card);
        });

        initProjectSliders();
        initLightboxTriggers();
        observeNewElements();
        setTimeout(initImageLoading, 100);
    }

    // ─── Lightbox Triggers ───
    function initLightboxTriggers() {
        document.querySelectorAll('.project-slider').forEach(function (slider, idx) {
            const slides = slider.querySelectorAll('.slide-image');
            const images = [];
            slides.forEach(function (slide) {
                const img = slide.querySelector('img');
                if (img && img.src) images.push(img.src);
            });
            if (images.length === 0) return;

            slides.forEach(function (slide, i) {
                slide.addEventListener('click', function (e) {
                    e.stopPropagation();
                    if (e.target.closest('.slider-btn') || e.target.closest('.dots')) return;
                    openLightbox(images, i);
                });
            });

            slider.addEventListener('click', function (e) {
                if (e.target.closest('.slider-btn') || e.target.closest('.dots')) return;
                if (e.target.closest('.slide-image')) return;
                const activeIdx = getActiveSlideIndex(slider);
                if (activeIdx >= 0 && activeIdx < images.length) {
                    openLightbox(images, activeIdx);
                } else {
                    openLightbox(images, 0);
                }
            });
        });
    }

    function getActiveSlideIndex(slider) {
        const slidesContainer = slider.querySelector('.slides');
        if (!slidesContainer) return 0;
        const transform = slidesContainer.style.transform;
        if (!transform) return 0;
        const match = transform.match(/translateX\(([^)]+)\)/);
        if (!match) return 0;
        const val = parseFloat(match[1]);
        const idx = Math.round(Math.abs(val) / 100);
        return idx;
    }

    // ─── Project Sliders (fixed: reset transform to 0) ───
    function initProjectSliders() {
        document.querySelectorAll('.project-slider').forEach(function (slider) {
            const slidesContainer = slider.querySelector('.slides');
            const slideImages = slidesContainer.querySelectorAll('.slide-image');
            const total = slideImages.length;
            if (total <= 1) {
                const btns = slider.querySelectorAll('.slider-btn');
                btns.forEach(b => b.style.display = 'none');
                const dots = slider.querySelector('.dots');
                if (dots) dots.style.display = 'none';
                return;
            }
            // Reset to first slide
            slidesContainer.style.transform = 'translateX(0%)';
            let currentIndex = 0;

            const dotsContainer = slider.querySelector('.dots');
            dotsContainer.innerHTML = '';
            for (let i = 0; i < total; i++) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.setAttribute('data-index', i);
                dot.addEventListener('click', function (e) {
                    e.stopPropagation();
                    goTo(parseInt(this.getAttribute('data-index')));
                });
                dotsContainer.appendChild(dot);
            }
            const dots = dotsContainer.querySelectorAll('.dot');

            function goTo(index) {
                if (index < 0) index = total - 1;
                if (index >= total) index = 0;
                currentIndex = index;
                slidesContainer.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
                dots.forEach(function (d, i) {
                    d.classList.toggle('active', i === currentIndex);
                });
            }

            const prevBtn = slider.querySelector('.prev');
            const nextBtn = slider.querySelector('.next');

            prevBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                goTo(currentIndex - 1);
            });
            nextBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                goTo(currentIndex + 1);
            });

            let touchStartX = 0;
            let touchEndX = 0;
            slider.addEventListener('touchstart', function (e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            slider.addEventListener('touchend', function (e) {
                touchEndX = e.changedTouches[0].screenX;
                const diff = touchStartX - touchEndX;
                if (Math.abs(diff) > 40) {
                    if (diff > 0) goTo(currentIndex + 1);
                    else goTo(currentIndex - 1);
                }
            }, { passive: true });

            let autoPlay = setInterval(function () { goTo(currentIndex + 1); }, 4500);
            slider.addEventListener('mouseenter', function () { clearInterval(autoPlay); });
            slider.addEventListener('mouseleave', function () {
                clearInterval(autoPlay);
                autoPlay = setInterval(function () { goTo(currentIndex + 1); }, 4500);
            });
        });
    }

    // ─── Image Loading ───
    function initImageLoading() {
        document.querySelectorAll('.slide-image img').forEach(function (img) {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function () { this.classList.add('loaded'); });
                img.addEventListener('error', function () {
                    this.classList.add('loaded');
                    const placeholder = this.closest('.slide-image').querySelector('.img-placeholder');
                    if (placeholder) placeholder.style.display = 'flex';
                });
            }
        });
    }

    // ─── i18n ───
    function setLanguage(lang) {
        currentLang = lang;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        document.body.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

        const titleEl = document.getElementById('pageTitle');
        if (translations[lang] && translations[lang].title) {
            titleEl.textContent = translations[lang].title;
        }

        currentLangLabel.textContent = langNames[lang] || lang;

        document.querySelectorAll('.lang-dropdown-menu button').forEach(function (btn) {
            btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === lang);
        });

        dropdownMenu.classList.remove('open');
        dropdownBtn.classList.remove('active');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];
            for (let k of keys) {
                if (value && value[k] !== undefined) value = value[k];
                else { value = null; break; }
            }
            if (value !== null && value !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = value;
                } else {
                    el.innerHTML = value;
                }
            }
        });

        renderProjects(lang);
        setTimeout(initImageLoading, 100);
    }

    document.querySelectorAll('.lang-dropdown-menu button').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                setLanguage(lang);
                const url = new URL(window.location);
                url.searchParams.set('lang', lang);
                window.history.replaceState({}, '', url);
            }
        });
    });

    // ─── Scroll Spy ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', function () {
        let current = '';
        const scrollPos = window.scrollY + 120;
        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--accent)';
            }
        });
    });

    // ─── Hamburger ───
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');
    hamburger.addEventListener('click', function () {
        const isOpen = navLinksContainer.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
    navLinksContainer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinksContainer.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // ─── Scroll Animation Observer ───
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

    function observeNewElements() {
        document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
            if (!el.classList.contains('visible')) observer.observe(el);
        });
    }
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        observer.observe(el);
    });

    // ─── Skill Bars ───
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(function () { bar.style.width = width + '%'; }, 300);
                barObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });
    skillBars.forEach(function (bar) { barObserver.observe(bar); });

    // ─── Stat Counter ───
    const statNumbers = document.querySelectorAll('.stat-card .number[data-count]');
    const statObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                if (!isNaN(target)) animateCounterSlow(el, target);
                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    function animateCounterSlow(el, target) {
        let current = 0;
        const totalSteps = 80;
        const duration = 3500;
        const stepTime = Math.floor(duration / totalSteps);
        const increment = target / totalSteps;
        const timer = setInterval(function () {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current) + '+';
        }, stepTime);
    }
    statNumbers.forEach(function (el) { statObserver.observe(el); });

    // ─── Init ───
    setLanguage(currentLang);

    window.addEventListener('popstate', function () {
        const lang = getLangFromURL();
        if (lang && lang !== currentLang) {
            setLanguage(lang);
        }
    });

    setTimeout(initImageLoading, 300);

})();
