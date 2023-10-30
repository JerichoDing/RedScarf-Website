(function () {
	'use strict';

	// init tooltip
	const tooltipTriggerList = document.querySelectorAll(
		'[data-bs-toggle="tooltip"]'
	);
	const tooltipList = [...tooltipTriggerList].map(
		(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
	);

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

	// const navbarlinksActive = () => {
	// 	let position = window.scrollY + 200;
	// 	navbarlinks.forEach((navbarlink) => {
	// 		if (!navbarlink.hash) return;
	// 		let section = select(navbarlink.hash);
	// 		if (!section) return;
	// 		if (
	// 			position >= section.offsetTop &&
	// 			position <= section.offsetTop + section.offsetHeight
	// 		) {
	// 			navbarlink.classList.add('active');
	// 		} else {
	// 			navbarlink.classList.remove('active');
	// 		}
	// 	});
	// };
	// window.addEventListener('load', navbarlinksActive);
	// onscroll(document, navbarlinksActive);

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
		let headerOffset = selectHeader.offsetTop;
		let nextElement = selectHeader.nextElementSibling;
		const headerFixed = () => {
			if (headerOffset - window.scrollY <= 0) {
				console.log();
				selectHeader.classList.add('fixed-top');
				nextElement.classList.add('scrolled-offset');
			} else {
				selectHeader.classList.remove('fixed-top');
				nextElement.classList.remove('scrolled-offset');
			}
		};
		window.addEventListener('load', headerFixed);
		onscroll(document, headerFixed);
	}
	/**
	 * Header fixed top on scroll
	 */

	/**
	 * Back to top button
	 */

	if (backtotop) {
		on('click', '.back-to-top', function (e) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		});

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
		window.addEventListener('DOMContentLoaded', () => {
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
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
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

	/**
	 * translate.js start
	 */
	translate.language.setLocal('chinese_simplified');
	translate.execute();


	on('click', '.language-icon', function (e) {
		const languageLocal = translate.language.getLocal() || 'chinese_simplified';
		languageLocal === 'english'
			? translate.language.setLocal('chinese_simplified')
			: translate.language.setLocal('english');
		console.log(122222, languageLocal);
		translate.execute();
	});

	let policyItems = select('.policy-tabs .policy-tab-item', true);
	on('click','.policy-tabs',function(e){
		let val = e.target.getAttribute('data-val')
		let resultObj={
			'特殊情况':'Extenuating Circumstances/ Special Circumstances/Mitigating Circumstances/Good Cause/ Special Consideration，这些都是属于特殊情况的指代。学校叫法可能不同，例如澳洲就叫SC,而英国多称它为MC/EC，实际上它们都是同一种申诉方式，中文原意都叫做特殊情况。简称EC/SC/MC/GC。',
			'补考挂科':'出国留学，一遇上期末考试，每年都不乏有挂科的学生，国内挂科其实还算好解决，只要你好好准备，还是很好通过的，但是不同于国内，海外院校对于学生的学业要求会更高且更严格，如果补考出现挂科的情况，极有可能会被学校给予退学的处分。当遇到这种情况时，及时找到红领巾留学申诉，可以挽救同学们的学业，争取再一次的机会。',
			'无上限补考':'通常情况下，大多数学校原本给予的补考机会都是有分数上限的，即最高分数为及格分。这是因为补考通常是为了让学生能够及时补救挂科课程至及格线，从而让学生能够顺利毕业。有些学校可能会给予学生一些特殊情况下的额外机会，例如在学生提供特定的证明文件或者在一些特殊的课程中。这种补考机会通常是没有分数上限的，也就是说，学生可以在这些特殊的补考中获得更高的分数，而不仅仅是及格分。',
			'毕业论文挂科':'毕业论文/设计在海外留学过程中，是最重要的一个环节，直接关系到学生是否能顺利拿到学位证的一个评判标准，那么如果同学们不幸Fail掉毕业论文/设计，就是无法正常毕业获取学位证的状态了，之前付出的金钱以及精力就算白费了。不过不用担心，找到红领巾留学申诉团队，依然能帮挂科的你们争取到新的递交机会，助同学们可以顺利毕业。',
			'学位申诉':'GPA达不到学校的基本要求，出勤率不够，同一门科目反复挂科等，这些情况情况的发生对于留学生正常毕业获取学位证来说都是尤其不利的，海外院校都是出了名的“宽进严出”。每年都会有一大批的留学生因这样或那样的原因导致被学校劝退，这种时候，需要做的就是学位申诉，帮助同学获取继续学业的机会，争取拿到degree。',

			'澳大利亚(Ombusman)':'澳大利亚的监察专员 (Ombudsman)是一个独立的公共机构，负责调查、解决和提供关于公共服务和某些私营部门服务的投诉的建议。 以下是澳大利亚监察专员的主要职能和服务范围',
			'北爱尔兰 (NIPSO)':'北爱尔兰公共服务监察专员办公室（NIPSO）是一个独立的公共机构，负责调查北爱尔兰公共服务提供方的程序不当投诉',
			'苏格兰 (SPSO)':'苏格兰公共服务监察专员（SPSO）是一个涵盖三个主要功能的机构，致力于确保苏格兰公共服务的透明度和公正性。',
			'英格兰/威尔士 (OIA)':'英国的办公室独立调解人（OIA，Office of the Independent Adjudicator）是一家独立的机构，负责审查英国高等教育机构的学生申诉。OIA的主要目的是提供公正、透明的申诉处理程序，以解决学生与大学之间的纠纷。 OIA不是法院或法律机构，但它的决定通常被认为是具有约束力的。OIA处理的申诉类型可能涉及学术成绩、学生福利、歧视、学费和资金等问题',
		}
		if(val && resultObj[val]){
			select('.policy-detail').innerHTML = resultObj[val];
			policyItems.forEach(function (el) {
				el.classList.remove('hover-text');
			});
			e.target.classList.add('hover-text');
		}
	})




	/**
	 * translate.js end
	 */

	/**
	 * switch language
	 */
	// const currentLang = localStorage.getItem('lang') || 'zh-cn'; // 默认中文
	// document.documentElement.lang = currentLang;
	// console.log('language', currentLang, translations);
	// translatePage();

	// on('click', '.language-icon', function (e) {
	// 	const lang = document.documentElement.lang === 'en' ? 'zh-cn' : 'en';
	// 	localStorage.setItem('lang', lang);
	// 	translatePage();
	// 	location.reload();
	// });



// 特殊情况的切换









	/**
	 * Initiate Pure Counter
	 */
	
	new PureCounter({
		separator: ',',
	});
})();
