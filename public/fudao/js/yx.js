$(function () {
	// 菜单导航
	$('.menu').click(function () {
		var $this = $(this);
		if ($this.hasClass('bg')) {
			$this.removeClass('bg');
			$('.nav').css({ transform: 'translate(100%,0px)' }, 500);
			$('.nav-left').css({ transform: 'translate(-100%,0px)' }, 500);
		} else {
			$this.addClass('bg');
			$('.nav').css({ transform: 'translate(0%,0px)' }, 500);
			$('.nav-left').css({ transform: 'translate(0%,0px)' }, 500);
		}
	});
	$('.nav-left').click(function () {
		$('.menu').removeClass('bg');
		$('.nav').css({ transform: 'translate(100%,0px)' }, 500);
		$('.nav-left').css({ transform: 'translate(-100%,0px)' }, 500);
	});
	$('.nav>ul>li.onli').click(function () {
		var $this = $(this);
		if ($this.hasClass('bg')) {
			$this.removeClass('bg').find('.levelu').slideToggle();
		} else {
			$this.addClass('bg').find('.levelu').slideToggle();
			$this.siblings().removeClass('bg').find('.levelu').slideUp();
		}
	});
	$('.pop_menu').click(function () {
		var $this = $(this);
		if ($this.hasClass('bg1')) {
			$this.removeClass('bg1');
			$('.pop').css({ transform: 'translate(0%,0px)' }, 500);
		} else {
			$this.addClass('bg1');
			$('.pop').css({ transform: 'translate(-100%,0px)' }, 500);
		}
	});
	$('.pop_close').click(function () {
		$('.pop_menu').addClass('bg1');
		$('.pop').css({ transform: 'translate(-100%,0px)' }, 500);
	});
	$('.ai_close').click(function () {
		$('.activity').fadeOut();
	});
	// 点击弹出视频
	// $(".ind1_tu").one('click',function(){
	//     var tyu=$(this).find("span").html();
	//     $(".ind1_tc").fadeIn();
	//     $(".ind1_tu img").css('display','none');
	//     // $(".ind1_tc").find("video").attr("src",tyu);
	// });
	// // $(".ind1_tu").click(function(){
	// //     var tyu1=$(this).find("span").html();

	// //     $(".ind1_tu").find("video").attr("src",tyu1);
	// // });
	// $(".ind1_video i").one('click',function(){
	//     $(".ind1_tc").fadeOut();
	//     $(".ind1_sp").find("video").attr("src",11);
	// });
	$('.ind1_tu').click(function () {
		var tyu = $(this).find('span').html();
		$('.ind1_tc').fadeIn();

		$('.ind1_tc').find('video').attr('src', tyu);
	});
	$('.ind1_tu').click(function () {
		var tyu1 = $(this).find('span').html();

		$('.ind1_tu').find('video').attr('src', tyu1);
	});
	$('.ind1_video i').click(function () {
		$('.ind1_tc').fadeOut();
		$('.ind1_tc').find('video').attr('src', 11);
	});
	// banner
	var swiper = new Swiper('.aa', {
		loop: true,
		// autoplay:true,
		autoplay: {
			delay: 6000,
		},
		pagination: {
			el: '.swiper-pagination-bullet1',
			clickable: true,
		},
		navigation: {
			nextEl: '.aa .aay',
			prevEl: '.aa .aaz',
		},
	});
	// 首页荣誉
	var swiper = new Swiper('.index8 .swiper-container', {
		// loop:true,
		autoplay: true,
		slidesPerView: 6,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			// 325: {
			// slidesPerGroup: 1,
			// slidesPerView: 1,
			// },
		},
	});
	// 获得荣誉
	var swiper = new Swiper('.bb', {
		// loop:true,
		autoplay: true,
		slidesPerGroup: 1,
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 15,
			},
			// 325: {
			// slidesPerGroup: 1,
			// slidesPerView: 1,
			// },
		},
	});
	// 红领巾大数据(数字递增)
	// $('.counter').countUp();
	// $('.counter1').countUp();
	// 我们的课程体系
	$('.course_lf a').click(function () {
		$('.course_lf a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.course_ri div.course_ul').eq(idx).show();
		$('.course_ri div.course_ul')
			.not($('.course_ri div.course_ul').eq(idx))
			.hide();
	});
	// 导师轮播
	var swiper = new Swiper('.cc', {
		loop: true,
		autoplay: true,
		slidesPerGroup: 1,
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination-bullet3',
			clickable: true,
		},
	});
	// 导师点击切换
	$('.ind9_nav1 a').click(function () {
		$('.ind9_nav1 a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.ind9_ul1>ul').eq(idx).show();
		$('.ind9_ul1>ul').not($('.ind9_ul1>ul').eq(idx)).hide();
	});

	$('.ind9_nav2 a').click(function () {
		$('.ind9_nav2 a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.ind9_ul2>ul').eq(idx).show();
		$('.ind9_ul2>ul').not($('.ind9_ul2>ul').eq(idx)).hide();
	});
	// 留学资讯点击切换
	$('.ind10_nav a').click(function () {
		$('.ind10_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.ind10_ul>ul').eq(idx).show();
		$('.ind10_ul>ul').not($('.ind10_ul>ul').eq(idx)).hide();
	});
	// 手机端服务流程轮播
	var swiper = new Swiper('.dd', {
		loop: true,
		autoplay: true,
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination-bullet2',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 12,
			},
			// 325: {
			// slidesPerGroup: 1,
			// slidesPerView: 1,
			// },
		},
	});
	// 学员反馈
	var swiper = new Swiper('.ff', {
		// loop:true,
		autoplay: true,
		navigation: {
			nextEl: '.coach4 .ffy',
			prevEl: '.coach4 .ffz',
		},
	});
	// 学员反馈点击弹出图片
	$(function () {
		$('.coach4_img').click(function () {
			var tyu = $(this).find('img.tan').attr('src');
			$('.coach4_tan').fadeIn();
			$('.coach4_cen').find('img').attr('src', tyu);
		});
		$('.coach4_tan').click(function () {
			$('.coach4_tan').fadeOut();
		});
	});

	// 香港
	// 部分热门辅导专业
	var swiper = new Swiper('.gg', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.coach6_con .ggy',
			prevEl: '.coach6_con .ggz',
		},
		breakpoints: {
			1280: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			830: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});

	// 部分辅导Tutor简介轮播
	var galleryThumbs = new Swiper('.lunbotu .gallery-thumbs', {
		spaceBetween: 45,
		slidesPerView: 5,
		// loop: true,
		freeMode: true,
		loopedSlides: 1, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			830: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			640: {
				spaceBetween: 10,
				slidesPerView: 3,
			},
		},
	});
	var galleryTop = new Swiper('.lunbotu .gallery-top', {
		spaceBetween: 10,
		// loop: true,
		loopedSlides: 3, //looped slides should be the same
		navigation: {
			nextEl: '.lunbotu .swiper-button-next',
			prevEl: '.lunbotu .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
	// 香港面试辅导成功案例展示
	var swiper = new Swiper('.hh', {
		// loop:true,
		autoplay: true,
		navigation: {
			nextEl: '.hk6_zy .hhy',
			prevEl: '.hk6_zy .hhz',
		},
	});

	// 部分学生辅导反馈
	var width_ = $(window).width();
	if (width_ > 640) {
		certifySwiper = new Swiper('#certify .swiper-container', {
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			loop: true,
			loopedSlides: 3,
			// autoplay: true,
			navigation: {
				nextEl: '#certify .swiper-button-next',
				prevEl: '#certify .swiper-button-prev',
			},
			on: {
				progress: function (progress) {
					for (i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						var slideProgress = this.slides[i].progress;
						modify = 1;
						if (Math.abs(slideProgress) > 1) {
							modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
						}
						translate = slideProgress * modify * 22 + '%';
						scale = 1 - Math.abs(slideProgress) / 3;
						zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
						slide.transform(
							'translateX(' + translate + ') scale(' + scale + ')'
						);
						slide.css('zIndex', zIndex);
						slide.css('opacity', 1);
						if (Math.abs(slideProgress) > 3) {
							slide.css('opacity', 0);
						}
					}
				},

				setTransition: function (transition) {
					for (var i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						slide.transition(transition);
					}
				},
			},
		});
	} else {
		var swiper = new Swiper('#certify .swiper-container', {
			// loop:true,
			autoplay: true,
			spaceBetween: 10,
			navigation: {
				nextEl: '#certify .swiper-button-next',
				prevEl: '#certify .swiper-button-prev',
			},
		});
	}

	// 同学点击弹出图片
	$(function () {
		$('.hk6_img').click(function () {
			var tyu = $(this).find('img.tan').attr('src');
			$('.coach4_tan').fadeIn();
			$('.coach4_cen').find('img').attr('src', tyu);
		});
		$('.coach4_tan').click(function () {
			$('.coach4_tan').fadeOut();
		});
	});
	// 选课报告点击弹出图片
	$(function () {
		$('.zhan ul li').click(function () {
			var tyu = $(this).find('img.tan').attr('src');
			$('.coach4_tan').fadeIn();
			$('.coach4_cen').find('img').attr('src', tyu);
		});
		$('.zhan .swiper-slide').click(function () {
			var tyu = $(this).find('img.tan').attr('src');
			$('.coach4_tan').fadeIn();
			$('.coach4_cen').find('img').attr('src', tyu);
		});
		$('.coach4_tan').click(function () {
			$('.coach4_tan').fadeOut();
		});
	});

	// 考试辅导学员反馈
	var galleryThumbs = new Swiper('.test5_lunbo .test5-thumbs', {
		spaceBetween: 5,
		slidesPerView: 3,
		// loop: true,
		freeMode: true,
		loopedSlides: 3, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.test5_lunbo .test5-top', {
		spaceBetween: 5,
		// loop: true,
		loopedSlides: 3, //looped slides should be the same
		navigation: {
			nextEl: '.test5_lunbo .swiper-button-next',
			prevEl: '.test5_lunbo .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	// 学术能力-课件展示
	var width_ = $(window).width();
	if (width_ > 640) {
		certifySwiper = new Swiper('#lea5 .swiper-container', {
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 30,
			loop: true,
			loopedSlides: 3,
			// autoplay: true,
			navigation: {
				nextEl: '#lea5 .swiper-button-next',
				prevEl: '#lea5 .swiper-button-prev',
			},
			on: {
				progress: function (progress) {
					for (i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						var slideProgress = this.slides[i].progress;
						modify = 1;
						if (Math.abs(slideProgress) > 1) {
							modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
						}
						translate = slideProgress * modify * 55 + '%';
						scale = 1 - Math.abs(slideProgress) / 3;
						zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
						slide.transform(
							'translateX(' + translate + ') scale(' + scale + ')'
						);
						slide.css('zIndex', zIndex);
						slide.css('opacity', 1);
						if (Math.abs(slideProgress) > 3) {
							slide.css('opacity', 0);
						}
					}
				},

				setTransition: function (transition) {
					for (var i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						slide.transition(transition);
					}
				},
			},
		});
	} else {
		var swiper = new Swiper('#lea5 .swiper-container', {
			// loop:true,
			autoplay: true,
			spaceBetween: 20,
			navigation: {
				nextEl: '#lea5 .swiper-button-next',
				prevEl: '#lea5 .swiper-button-prev',
			},
		});
	}

	// A-Level手风琴
	$('.xinxi_solution_main ul li:eq(0)').addClass('on');
	$('.xinxi_solution_main ul li:eq(1)').addClass('b2');
	$('.xinxi_solution_main ul li:eq(2)').addClass('b3');
	$('.xinxi_solution_main ul li:eq(3)').addClass('b4');
	$('.xinxi_solution_main ul li:eq(4)').addClass('b5');
	$('.xinxi_solution_main ul li:eq(5)').addClass('b6');
	// $('.xinxi_solution_main ul li:gt(3)').hide();
	//当三级分类大于7个的是，成两排显示
	$('.xinxi_solution_main ul li').each(function () {
		var len = $(this).find('.right dl a').length;
		if (len > 6) {
			$(this).find('.right dl a').addClass('yichu');
		}
	});

	//解决方案效果
	$('.xinxi_solution_main ul li').each(function () {
		var left_h = $(this).find('.left_top').height();

		var dl_h = $(this).find('.right dl').height();
		$(this)
			.find('.right dl')
			.css({
				'margin-top': -dl_h / 2,
			});
	});
	$('.xinxi_solution_main ul li').mouseover(function () {
		$(this).addClass('on').siblings().removeClass('on');
	});
	$('.xinxi_solution_main_mobile ul li:first-child').addClass('on');

	$('.xinxi_solution_main_mobile ul li').mouseover(function () {
		$(this).addClass('on').siblings().removeClass('on');
	});

	$('.gongkai_main ul li:eq(0)').addClass('on');
	$('.gongkai_main ul li:eq(1)').addClass('b2');
	$('.gongkai_main ul li:eq(2)').addClass('b3');
	$('.gongkai_main ul li:eq(3)').addClass('b4');
	$('.gongkai_main ul li:eq(4)').addClass('b5');
	$('.gongkai_main ul li:eq(5)').addClass('b6');
	$('.gongkai_main ul li').mouseover(function () {
		$(this).addClass('on').siblings().removeClass('on');
	});

	$('.solu-category .solu-description').each(function () {
		var maxwidth = 60;
		if ($(this).text().length > maxwidth) {
			$(this).text($(this).text().substring(0, maxwidth));
			$(this).html($(this).html() + '...');
		}
	});

	// 学好AP课程的重要性点击切换
	$('.tutor1_tit a').click(function () {
		$('.tutor1_tit a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.tutor1_ul>div.content').eq(idx).show();
		$('.tutor1_ul>div.content').not($('.tutor1_ul>div.content').eq(idx)).hide();
	});
	// 部分外籍学霸导师展示
	var swiper = new Swiper('.tutor2_zy .swiper-container', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 50,
		navigation: {
			nextEl: '.tutor2_zy .swiper-button-next',
			prevEl: '.tutor2_zy .swiper-button-prev',
		},
		breakpoints: {
			900: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			640: {
				spaceBetween: 10,
				slidesPerView: 1,
			},
		},
	});

	// 学生好评反馈
	var width_ = $(window).width();
	if (width_ > 260) {
		certifySwiper = new Swiper('.tutor4_ri .swiper-container', {
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 20,
			loop: true,
			loopedSlides: 3,
			// autoplay: true,
			navigation: {
				nextEl: '.tutor4_ri .swiper-button-next',
				prevEl: '.tutor4_ri .swiper-button-prev',
			},
			on: {
				progress: function (progress) {
					for (i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						var slideProgress = this.slides[i].progress;
						modify = 1;
						if (Math.abs(slideProgress) > 1) {
							modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
						}
						translate = slideProgress * modify * 52 + '%';
						scale = 1 - Math.abs(slideProgress) / 5;
						zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
						slide.transform(
							'translateX(' + translate + ') scale(' + scale + ')'
						);
						slide.css('zIndex', zIndex);
						slide.css('opacity', 1);
						if (Math.abs(slideProgress) > 3) {
							slide.css('opacity', 0);
						}
					}
				},

				setTransition: function (transition) {
					for (var i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						slide.transition(transition);
					}
				},
			},
		});
	} else {
		var swiper = new Swiper('.tutor4_ri .swiper-container', {
			// loop:true,
			autoplay: true,
			spaceBetween: 30,
			navigation: {
				nextEl: '.tutor4_ri .swiper-button-next',
				prevEl: '.tutor4_ri .swiper-button-prev',
			},
		});
	}
	// 学生好评反馈弹出图片
	$(function () {
		$('.tutor4_ri .swiper-slide').click(function () {
			var tyu = $(this).find('img.tan').attr('src');
			$('.coach4_tan').fadeIn();
			$('.coach4_cen').find('img').attr('src', tyu);
		});
		$('.coach4_tan').click(function () {
			$('.coach4_tan').fadeOut();
		});
	});

	// 关于我们
	// 点击弹出视频
	$('.about1_ri').click(function () {
		$('.ind1_tc').fadeIn();
	});
	$('.ind1_video i').click(function () {
		$('.ind1_tc').fadeOut();
	});
	// 红领巾课堂成长历程
	var swiper = new Swiper('.ab3', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 50,
		navigation: {
			nextEl: '.ab3_zy .swiper-button-next',
			prevEl: '.ab3_zy .swiper-button-prev',
		},
		breakpoints: {
			1024: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			640: {
				spaceBetween: 10,
				slidesPerView: 1,
			},
		},
	});

	// 艺术覆盖专业点击切换
	$('.ind31 .art3_nav a').click(function () {
		$('.ind31 .art3_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.ind31 .art3_ul>ul').eq(idx).show();
		$('.ind31 .art3_ul>ul').not($('.ind31 .art3_ul>ul').eq(idx)).hide();
	});
	$('.ind32 .art3_nav a').click(function () {
		$('.ind32 .art3_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.ind32 .art3_ul>ul').eq(idx).show();
		$('.ind32 .art3_ul>ul').not($('.ind32 .art3_ul>ul').eq(idx)).hide();
	});
	$('.ind33 .art3_nav a').click(function () {
		$('.ind33 .art3_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.ind33 .art3_ul>ul').eq(idx).show();
		$('.ind33 .art3_ul>ul').not($('.ind33 .art3_ul>ul').eq(idx)).hide();
	});

	// 覆盖专业
	var swiper = new Swiper('.art3_po .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 3,
		spaceBetween: 0,
		navigation: {
			nextEl: '.art3_po .aay',
			prevEl: '.art3_po .aaz',
		},
		breakpoints: {
			1366: {
				slidesPerView: 2,
			},
			830: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 1,
			},
		},
	});

	// 艺术学员反馈
	var swiper = new Swiper('.art6_po .swiper-container', {
		// loop:true,
		// autoplay:true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.art6_po .art6y',
			prevEl: '.art6_po .art6z',
		},
	});

	// 加入我们
	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};

			this.multiple = multiple || false;

			// Variables privadas

			var links = this.el.find('.link');

			// Evento

			links.on(
				'click',
				{ el: this.el, multiple: this.multiple },
				this.dropdown
			);
		};

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;

			$this = $(this);

			$next = $this.next();

			$next.slideToggle();

			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			}
		};

		var accordion = new Accordion($('#accordion'), false);

		$('.submenu li').click(function () {
			$(this).addClass('current').siblings('li').removeClass('current');
		});
	});
	// 红领巾生活
	var swiper = new Swiper('.join3_one .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 1.4,
		spaceBetween: 35,
		navigation: {
			nextEl: '.join3_one .swiper-button-next',
			prevEl: '.join3_one .swiper-button-prev',
		},
		breakpoints: {
			820: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
	});
	var swiper = new Swiper('.join3_two .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 2,
		spaceBetween: 35,
		navigation: {
			nextEl: '.join3_two .swiper-button-next',
			prevEl: '.join3_two .swiper-button-prev',
		},
		breakpoints: {
			830: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
	});

	// 求职
	$('.banner_video').click(function () {
		$('.ind1_tc').fadeIn();
	});
	$('.ind1_video i').click(function () {
		$('.ind1_tc').fadeOut();
	});
	// 数字增加
	$('.count').each(function () {
		$(this)
			.prop('Counter', 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 3000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					},
				}
			);
	});
	// 导师团队简介
	var swiper = new Swiper('.job5_swiper .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 4,
		spaceBetween: 14,
		navigation: {
			nextEl: '.job5_swiper .swiper-button-next',
			prevEl: '.job5_swiper .swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			820: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			460: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		},
	});
	// 96.4%的学员成功获得Offer
	var swiper = new Swiper('.job7 .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.job7 .ffy',
			prevEl: '.job7 .ffz',
		},
	});
	// MAT备考资料库
	var swiper = new Swiper('.mat5_swiper .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 3,
		spaceBetween: 35,
		navigation: {
			nextEl: '.mat5_swiper .swiper-button-next',
			prevEl: '.mat5_swiper .swiper-button-prev',
		},
		breakpoints: {
			820: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			460: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});
	// MAT教研团队简介
	var swiper = new Swiper('.mat6 .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.mat6 .swiper-button-next',
			prevEl: '.mat6 .swiper-button-prev',
		},
		spaceBetween: 10,
	});
	// 新闻加载更多
	$('.moreaaa').hide();
	var currentnum = 5; //当前个数
	var increasenum = 5; //增加个数
	var allnum = $('.new_zuo ul li').length; //总个数
	$('.morebbb').click(function () {
		if (currentnum + increasenum < allnum) {
			currentnum += increasenum;
		} else {
			currentnum = allnum;
			$('.morebbb').hide();
		}
		console.log(currentnum);
		for (i = 0; i < currentnum; i++) {
			$('.new_zuo ul li').eq(i).show();
		}
	});
	// 返回顶部
	$('#gototop').click(function () {
		$('body,html').animate({ scrollTop: '0px' }, 800);
	});
	// 点击锚点
	$(function () {
		//锚点跳转滑动效果

		$('a[href*=#],area[href*=#]').click(function () {
			console.log(this.pathname);

			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var $target = $(this.hash);

				$target =
					($target.length && $target) || $('[name=' + this.hash.slice(1) + ']');

				if ($target.length) {
					var targetOffset = $target.offset().top;

					$('html,body').animate(
						{
							scrollTop: targetOffset,
						},

						500
					);

					return false;
				}
			}
		});
	});
	// 课堂展示左侧悬浮
	$(document).scroll(function () {
		var scroH = $(document).scrollTop(); //滚动高度
		// var aa=$(".header").height();
		var bb = $('.class_con').height();
		var cc = bb + 20 + 25;
		// alert(cc);
		if (scroH > cc) {
			//距离底部高度小于100px
			$('.kt_dl').addClass('aacc');
		} else {
			$('.kt_dl').removeClass('aacc');
		}
	});
	// 学习体验
	var swiper = new Swiper('.experience .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.experience .swiper-button-next',
			prevEl: '.experience .swiper-button-prev',
		},
		spaceBetween: 20,
	});
	// A-LEVEL导师点击切换
	$('.level7_nav a').click(function () {
		$('.level7_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.level7_ul>dl').eq(idx).show();
		$('.level7_ul>dl').not($('.level7_ul>dl').eq(idx)).hide();
	});
	// 部分外籍Proofreader简介
	var swiper = new Swiper('.Proofreader .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.Proofreader .swiper-button-next',
			prevEl: '.Proofreader .swiper-button-prev',
		},
		spaceBetween: 20,
	});
	// Proofreading服务反馈轮播
	var swiper = new Swiper('.feed_swp .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: '.feed_swp .swiper-button-next',
			prevEl: '.feed_swp .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		},
	});
	var swiper = new Swiper('.feed_flex .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.feed_flex .swiper-button-next',
			prevEl: '.feed_flex .swiper-button-prev',
		},
		spaceBetween: 20,
	});

	// 申诉团队简介轮播
	var galleryThumbs = new Swiper('.appeal_swiper .appeal-thumbs', {
		spaceBetween: 18,
		slidesPerView: 2,
		// loop: true,
		freeMode: true,
		loopedSlides: 1, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			830: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			640: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
	});
	var galleryTop = new Swiper('.appeal_swiper .appeal-top', {
		spaceBetween: 10,
		// loop: true,
		loopedSlides: 1, //looped slides should be the same
		navigation: {
			nextEl: '.appeal_swiper .swiper-button-next',
			prevEl: '.appeal_swiper .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	// 选课报告部分内容展示
	var swiper = new Swiper('.zhan .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 2,
		spaceBetween: 50,
		navigation: {
			nextEl: '.zhan .swiper-button-next',
			prevEl: '.zhan .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});

	// 背景提升项目
	var galleryThumbs = new Swiper('.bey3 .bey3_one', {
		slidesPerView: 5,
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		loopedSlides: 2, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			830: {
				spaceBetween: 10,
				slidesPerView: 3,
				centeredSlides: false,
				loop: false,
				loopedSlides: 1,
			},
			640: {
				spaceBetween: 0,
				slidesPerView: 3,
			},
		},
	});
	var galleryTop = new Swiper('.bey3 .bey3_two', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,

		navigation: {
			nextEl: '.bey3 .swiper-button-next',
			prevEl: '.bey3 .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
		breakpoints: {
			820: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			640: {
				spaceBetween: 20,
				slidesPerView: 1,
			},
		},
	});
	var swiper = new Swiper('.bey4 .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 3,
		spaceBetween: 15,
		pagination: {
			el: '.bey4 .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.bey4 .swiper-button-next',
			prevEl: '.bey4 .swiper-button-prev',
		},
		breakpoints: {
			820: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			// 325: {
			// slidesPerGroup: 1,
			// slidesPerView: 1,
			// },
		},
	});
	var swiper = new Swiper('.bey6 .swiper-container', {
		loop: true,

		slidesPerView: 2,
		spaceBetween: 64,
		navigation: {
			nextEl: '.bey6 .swiper-button-next',
			prevEl: '.bey6 .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			660: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		},
	});

	// 语言培训
	var swiper = new Swiper('.language_swiper .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: '.language_swiper .swiper-button-next',
			prevEl: '.language_swiper .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});

	// 部分国际课程导师展示
	var swiper = new Swiper('.teacher_swiper .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 2,
		spaceBetween: 50,
		navigation: {
			nextEl: '.teacher_swiper .swiper-button-next',
			prevEl: '.teacher_swiper .swiper-button-prev',
		},
		breakpoints: {
			1152: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			900: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
	});
	// 申诉规划师简介
	var swiper = new Swiper('.app6_one .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.app6_one .swiper-button-next',
			prevEl: '.app6_one .swiper-button-prev',
		},
	});
	var swiper = new Swiper('.app6_two .swiper-container', {
		// loop:true,
		// autoplay:true,
		navigation: {
			nextEl: '.app6_two .swiper-button-next',
			prevEl: '.app6_two .swiper-button-prev',
		},
	});
	// 教育经历
	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};

			this.multiple = multiple || false;

			// Variables privadas

			var links = this.el.find('.input_zk');

			// Evento

			links.on(
				'click',
				{ el: this.el, multiple: this.multiple },
				this.dropdown
			);
		};

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;

			$this = $(this);

			$next = $this.next();

			$next.slideToggle();

			$this.parent().toggleClass('open1');
			if (!e.data.multiple) {
				$el.find('.jiaoyu').not($next).slideUp().parent().removeClass('open1');
				$el
					.find('.zk_img')
					.html('<img src="https://www.highmarktutor.com/images/zk.png">展开');
			}
			if ($this.parent().hasClass('open1')) {
				$this
					.find('.zk_img')
					.html('<img src="https://www.highmarktutor.com/images/zk1.png">收起');
			} else {
				$this
					.find('.zk_img')
					.html('<img src="https://www.highmarktutor.com/images/zk.png">展开');
			}
		};

		var accordion = new Accordion($('#jiaoyu'), false);
	});
	// 工作经历
	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};

			this.multiple = multiple || false;

			// Variables privadas

			var links = this.el.find('.input_jl');

			// Evento

			links.on(
				'click',
				{ el: this.el, multiple: this.multiple },
				this.dropdown
			);
		};

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;

			$this = $(this);

			$next = $this.next();

			$next.slideToggle();

			$this.parent().toggleClass('open1');
			if (!e.data.multiple) {
				$el.find('.jingli').not($next).slideUp().parent().removeClass('open1');
				$el.find('.zk_img').html('<img src="images/zk.png">展开');
			}
			if ($this.parent().hasClass('open1')) {
				$this.find('.zk_img').html('<img src="images/zk1.png">收起');
			} else {
				$this.find('.zk_img').html('<img src="images/zk.png">展开');
			}
		};

		var accordion = new Accordion($('#jingli'), false);
	});

	$('button#sub2').click(function () {
		var search = $('input#q').val();

		if (search == '') {
			alert('搜索内容不能为空');
			return false;
		}
	});

	$('.school_more img').click(function () {
		var thi = $(this).parent().prev();
		if (thi.hasClass('h200')) {
			$(this).addClass('rotate180').parent().prev().removeClass('h200');
		} else {
			$(this).removeClass('rotate180').parent().prev().addClass('h200');
		}
	});
	// 资讯轮播
	var swiper = new Swiper('.information_one .swiper-container', {
		loop: true,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination-bullet6',
			clickable: true,
		},
	});

	// rp
	var swiper = new Swiper('.rp6_swiper .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.rp6_swiper .swiper-button-next',
			prevEl: '.rp6_swiper .swiper-button-prev',
		},
		breakpoints: {
			1152: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			900: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
	});

	$('.tutoring_one a').click(function () {
		$('.tutoring_one a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.tutoring_two ul').eq(idx).show();
		$('.tutoring_two ul').not($('.tutoring_two ul').eq(idx)).hide();
	});

	var swiper = new Swiper('.anli .swiper-container', {
		// loop:true,
		// autoplay:true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		navigation: {
			nextEl: '.anli .swiper-button-next',
			prevEl: '.anli .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 2,
			},
			520: {
				slidesPerView: 2,
				spaceBetween: 5,
				slidesPerGroup: 2,
			},
		},
	});

	$('.teaching_z a').click(function () {
		$('.teaching_z a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.teaching_ri>ul').eq(idx).show();
		$('.teaching_ri>ul').not($('.teaching_ri>ul').eq(idx)).hide();
	});

	// 视频轮播
	var swiper = new Swiper('.anli_video .swiper-container', {
		// loop:true,
		// autoplay:true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerGroup: 2,
		slidesPerView: 2,
		spaceBetween: 20,
		navigation: {
			nextEl: '.anli_video .swiper-button-next',
			prevEl: '.anli_video .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerGroup: 2,
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
			640: {
				slidesPerGroup: 1,
				slidesPerView: 1,
				slidesPerColumn: 0,
			},
		},
	});

	// 专业栏目切换
	$('.field_lf ul li').click(function () {
		var $this = $(this);
		if ($this.hasClass('bg2')) {
			$this.addClass('bg2').find('.field_dl').slideToggle();
		} else {
			$this.removeClass('bg2').find('.field_dl').slideToggle();
			$this.siblings().removeClass('bg2').find('.field_dl').slideUp();
		}
	});
	// 相关导师
	var swiper = new Swiper('.supervisor .swiper-container', {
		loop: true,
		// autoplay:true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.supervisor .swiper-button-next',
			prevEl: '.supervisor .swiper-button-prev',
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});
	// 相关学生案例
	var swiper = new Swiper('.student_cases .swiper-container', {
		loop: true,
		// autoplay:true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 3,
		spaceBetween: 10,
		slidesPerGroup: 3,
		pagination: {
			el: '.student_cases .student_swiper',
			clickable: true,
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 2,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 2,
			},
		},
	});

	// 大学轮播
	var swiper = new Swiper('.advert .swiper-container', {
		loop: true,
		autoplay: true,
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.advert .swiper-pagination',
			clickable: true,
		},
	});

	// SAT&ACT考试特点
	$('.sat1_nav a').click(function () {
		$('.sat1_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.sat_ul ul').eq(idx).show();
		$('.sat_ul ul').not($('.sat_ul ul').eq(idx)).hide();
	});
	$('.sat1_top1 a').click(function () {
		$('.sat1_top1 a').removeClass('curs');
		$(this).addClass('curs');
		idx = $(this).index();
		$('.sat1_con1 dl').eq(idx).show();
		$('.sat1_con1 dl').not($('.sat1_con1 dl').eq(idx)).hide();
	});
	$('.sat1_top2 a').click(function () {
		$('.sat1_top2 a').removeClass('curs');
		$(this).addClass('curs');
		idx = $(this).index();
		$('.sat1_con2 dl').eq(idx).show();
		$('.sat1_con2 dl').not($('.sat1_con2 dl').eq(idx)).hide();
	});
	// PTE辅导服务流程
	$('.sat3_nav a').click(function () {
		$('.sat3_nav a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.sat3_dl ul').eq(idx).show();
		$('.sat3_dl ul').not($('.sat3_dl ul').eq(idx)).hide();
	});
	// 标化考试导师团队
	$('.sat5_lf a').click(function () {
		$('.sat5_lf a').removeClass('cur');
		$(this).addClass('cur');
		idx = $(this).index();
		$('.sat5_ri ul').eq(idx).show();
		$('.sat5_ri ul').not($('.sat5_ri ul').eq(idx)).hide();
	});

	// 手风琴
	$('.xin_solution_main ul li:eq(0)').addClass('on');
	$('.xin_solution_main ul li:eq(1)').addClass('b2');
	$('.xin_solution_main ul li:eq(2)').addClass('b3');
	$('.xin_solution_main ul li:eq(3)').addClass('b4');
	$('.xin_solution_main ul li:eq(4)').addClass('b5');
	$('.xin_solution_main ul li:eq(5)').addClass('b6');
	$('.xin_solution_main ul li:eq(6)').addClass('b7');
	$('.xin_solution_main ul li:eq(7)').addClass('b8');
	$('.xin_solution_main ul li:eq(8)').addClass('b9');
	// $('.xinxi_solution_main ul li:gt(3)').hide();
	//当三级分类大于7个的是，成两排显示
	$('.xin_solution_main ul li').each(function () {
		var len = $(this).find('.right dl a').length;
		if (len > 6) {
			$(this).find('.right dl a').addClass('yichu');
		}
	});
	//解决方案效果
	$('.xin_solution_main ul li').each(function () {
		var left_h = $(this).find('.left_top1').height();

		var dl_h = $(this).find('.right dl').height();
		$(this)
			.find('.right dl')
			.css({
				'margin-top': -dl_h / 2,
			});
	});
	$('.xin_solution_main ul li').mouseover(function () {
		$(this).addClass('on').siblings().removeClass('on');
	});
	$('.xin_solution_main_mobile ul li:first-child').addClass('on');

	$('.xin_solution_main_mobile ul li').mouseover(function () {
		$(this).addClass('on').siblings().removeClass('on');
	});

	var galleryThumbs = new Swiper('.gre1_flex .gallery-thumb2', {
		spaceBetween: 25,
		slidesPerView: 2,
		// loop: true,
		freeMode: true,
		loopedSlides: 1, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gre1_flex .gallery-top2', {
		spaceBetween: 10,
		// loop: true,
		navigation: {
			nextEl: '.gre1_flex .swiper-button-next',
			prevEl: '.gre1_flex .swiper-button-prev',
		},
		loopedSlides: 1, //looped slides should be the same
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	var swiper = new Swiper('.book6_flex .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.book6_flex .swiper-button-next',
			prevEl: '.book6_flex .swiper-button-prev',
		},
	});

	var swiper = new Swiper('.personal_flex .swiper-container', {
		// loop:true,
		// autoplay:true,
		slidesPerView: 4,
		spaceBetween: 25,
		pagination: {
			el: '.personal_flex .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1152: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			860: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			// 325: {
			// slidesPerGroup: 1,
			// slidesPerView: 1,
			// },
		},
	});
});

// 年月日
function ymd() {
	// 获取id=yyyy,mm,dd的控件
	var yyyy = document.getElementById('yyyy');
	var mm = document.getElementById('mm');
	var dd = document.getElementById('dd');
	// 获取当前日期的年份，将生日的结束年设为当前年份
	var date = new Date();
	var year = parseInt(date.getFullYear());
	// 设置生日中年月日的起始年份与结束年份
	initSelect(yyyy, 1980, year);
	initSelect(mm, 1, 12);
	initSelect(dd, 1, 31);
	// 获取列表框长度，默认设置为中间值
	var n = yyyy.length;
	yyyy.selectedIndex = Math.round(n / 2);
}
// 通过函数简化年月日获取所需的3个循环
function initSelect(obj, start, end) {
	for (var i = start; i <= end; i++) {
		// options.add()给列表框添加选项
		obj.options.add(new Option(i, i));
	}
}

// 实现年月日的三级联动（如大小月，闰年的2月）
function selectYmd() {
	var yyyy = document.getElementById('yyyy');
	var mm = document.getElementById('mm');
	var dd = document.getElementById('dd');
	var m = parseInt(mm.value);
	var dayEnd;
	// 设置大小月对应的天
	if (m == 4 || m == 6 || m == 9 || m == 11) {
		dayEnd = 30;
	} else if (m == 2) {
		dayEnd = 28;
		y = parseInt(yyyy.value);
		// 设置闰年（非整百年：能被4整除的为闰年。整百年：能被400整除的是闰年。）
		if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
			dayEnd = 29;
		}
	} else {
		dayEnd = 31;
	}
	dd.options.length = 0;
	initSelect(dd, 1, dayEnd);
}

function disableDebug(){

// 禁止拖拽图片
['dragstart'].forEach(function (ev) {
	document.addEventListener(ev, function (ev) {
		ev.preventDefault();
		ev.returnValue = false;
	});
});

window.document.oncontextmenu = function () {
	return false;
};
document.onkeydown =
	document.onkeyup =
	document.onkeypress =
		function (event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if (e && e.keyCode == 123) {
				e.returnValue = false;
				return false;
			}
		};

// 禁止保存，拖拽图片
for (i in document.images) {
	document.images[i].ondragstart = function () {
		return false;
	};
}

//当键盘按下时
document.onkeydown = function () {
	//禁止F12
	if (window.event && window.event.keyCode == 123) {
		// alert("F12调试功能已被禁用");
		window.event.keyCode = 0;
		window.event.returnValue = false;
	}
	//禁止Ctrl+U查看源代码
	if (event.ctrlKey && window.event.keyCode == 85) {
		window.event.returnValue = false;
	}
	//禁止Ctrl+S网页另存为
	if (event.ctrlKey && window.event.keyCode == 83) {
		window.event.returnValue = false;
	}
	if (window.event && window.event.keyCode == 8) {
		alert(str + '\n请使用Del键进行字符的删除操作！');
		window.event.returnValue = false;
	}
};
//屏蔽右键菜单
document.oncontextmenu = disable;
//屏蔽复制
// document.oncopy = disable;
//屏蔽粘贴
document.onpaste = disable;
//屏蔽剪切
document.oncut = disable;
//屏蔽选中（选择文字）
document.onselectstart = disable;

function disable(event) {
	if (window.event) {
		event = window.event;
	}
	try {
		var the = event.srcElement;
		if (
			!(
				(the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') ||
				the.tagName == 'TEXTAREA'
			)
		) {
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}

}

// disableDebug()
