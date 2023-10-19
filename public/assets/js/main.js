
(function () {
	'use strict';

	// init tooltip
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

	
	const loadJS = (src) => {
		return new Promise((resolve, reject) => {
			let head = document.querySelector('head');
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = src;
			head.appendChild(script);

			script.onload = () => {
				resolve('加载成功');
			};
			script.onerror = () => {
				reject('加载失败');
			};
		});
	};

	

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all);
		if (selectEl) {
			if (all) {
				selectEl.forEach((e) => e.addEventListener(type, listener));
			} else {
				selectEl.addEventListener(type, listener);
			}
		}
	};

	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener);
	};

	
	let backtotop = select('.back-to-top');
	let navbarlinks = select('#navbar .scrollto', true);
	let preloader = select('#preloader');
	let selectHeader = select('#header');

	/**
	 * Navbar links active state on scroll
	 */

	const navbarlinksActive = () => {
		let position = window.scrollY + 200;
		navbarlinks.forEach((navbarlink) => {
			if (!navbarlink.hash) return;
			let section = select(navbarlink.hash);
			if (!section) return;
			if (
				position >= section.offsetTop &&
				position <= section.offsetTop + section.offsetHeight
			) {
				navbarlink.classList.add('active');
			} else {
				navbarlink.classList.remove('active');
			}
		});
	};
	window.addEventListener('load', navbarlinksActive);
	onscroll(document, navbarlinksActive);

	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
		let header = select('#header');
		let offset = header.offsetHeight;

		if (!header.classList.contains('header-scrolled')) {
			offset -= 16;
		}

		let elementPos = select(el).offsetTop;
		window.scrollTo({
			top: elementPos - offset,
			behavior: 'smooth',
		});
	};

	/**
	 * Toggle .header-scrolled class to #header when page is scrolled
	 */

	if (selectHeader) {
		let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        console.log();
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
	}
  /**
   * Header fixed top on scroll
   */
 
	/**
	 * Back to top button
	 */
	
	if (backtotop) {
    on('click','.back-to-top',function(e){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })


		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add('active');
			} else {
				backtotop.classList.remove('active');
			}
		};
		window.addEventListener('load', toggleBacktotop);
		onscroll(document, toggleBacktotop);
	}

	/**
	 * Mobile nav toggle
	 */
	on('click', '.mobile-nav-toggle', function (e) {
		select('#navbar').classList.toggle('navbar-mobile');
		this.classList.toggle('bi-list');
		this.classList.toggle('bi-x');
	});

	/**
	 * Mobile nav dropdowns activate
	 */
	on(
		'click',
		'.navbar .dropdown > a',
		function (e) {
			if (select('#navbar').classList.contains('navbar-mobile')) {
				e.preventDefault();
				this.nextElementSibling.classList.toggle('dropdown-active');
			}
		},
		true
	);

	/**
	 * Scrool with ofset on links with a class name .scrollto
	 */
	on(
		'click',
		'.scrollto',
		function (e) {
			if (this.hash && select(this.hash)) {
				e.preventDefault();

				let navbar = select('#navbar');
				if (navbar.classList.contains('navbar-mobile')) {
					navbar.classList.remove('navbar-mobile');
					let navbarToggle = select('.mobile-nav-toggle');
					navbarToggle.classList.toggle('bi-list');
					navbarToggle.classList.toggle('bi-x');
				}
				scrollto(this.hash);
			}
		},
		true
	);

	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener('load', () => {
		if (window.location.hash) {
			if (select(window.location.hash)) {
				scrollto(window.location.hash);
			}
		}
	});

	/**
	 * Preloader
	 */

	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}

	/**
	 * Testimonials slider
	 */
	new Swiper('.banner-slider', {
		speed: 600,
		loop: true,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		slidesPerView: 'auto',
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
	
	});

	/**
	 * Porfolio isotope and filter
	 */
	window.addEventListener('load', () => {
		let portfolioContainer = select('.portfolio-container');
		if (portfolioContainer) {
			let portfolioIsotope = new Isotope(portfolioContainer, {
				itemSelector: '.portfolio-item',
			});

			let portfolioFilters = select('#portfolio-flters li', true);

			on(
				'click',
				'#portfolio-flters li',
				function (e) {
					e.preventDefault();
					portfolioFilters.forEach(function (el) {
						el.classList.remove('filter-active');
					});
					this.classList.add('filter-active');

					portfolioIsotope.arrange({
						filter: this.getAttribute('data-filter'),
					});
					portfolioIsotope.on('arrangeComplete', function () {
						AOS.refresh();
					});
				},
				true
			);
		}
	});

	/**
	 * Initiate portfolio lightbox
	 */
	const portfolioLightbox = GLightbox({
		selector: '.portfolio-lightbox',
	});

	/**
	 * Portfolio details slider
	 */
	new Swiper('.portfolio-details-slider', {
		speed: 400,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	/**
	 * Animation on scroll
	 */
	window.addEventListener('load', () => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		});
	});
	
	const translatePage = () => {
		const elements = document.getElementsByClassName('translate');
		for (let i = 0; i < elements.length; i++) {
			const key = elements[i].getAttribute('data-key');
			if (translations[currentLang] && translations[currentLang][key]) {
				elements[i].textContent = translations[currentLang][key];
			}
		}
	};
	// 获取当前语言
	const currentLang = localStorage.getItem('lang') || 'zh-cn'; // 默认中文
	document.documentElement.lang = currentLang;
	console.log('language', currentLang,translations);
	translatePage()
	/**
	 * switch language
	 */
	on('click', '.language-icon', function (e) {
		const lang = document.documentElement.lang === 'en' ? 'zh-cn' : 'en';
		localStorage.setItem('lang', lang);
		translatePage()
		location.reload();
	});



	

	/**
	 * Initiate Pure Counter
	 */
	new PureCounter();
})();