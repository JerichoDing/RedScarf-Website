$(function(){
    // 菜单导航
    $(".menu").click(function(){
        var $this = $(this);
        if($this.hasClass("bg")){
            $this.removeClass("bg"); 
            $(".nav").css({"transform":"translate(100%,0px)"},500);
            $(".nav-left").css({"transform":"translate(-100%,0px)"},500);
          }else{
            $this.addClass("bg"); 
            $(".nav").css({"transform":"translate(0%,0px)"},500);
            $(".nav-left").css({"transform":"translate(0%,0px)"},500);
          }
        });
        $(".nav-left").click(function(){
            $(".menu").removeClass("bg");
            $(".nav").css({"transform":"translate(100%,0px)"},500);
            $(".nav-left").css({"transform":"translate(-100%,0px)"},500);

        });
        $(".nav>ul>li.onli").click(function() {
          var $this = $(this);
          if($this.hasClass("bg")){
            $this.removeClass("bg").find('.levelu').slideToggle(); 
          }else{
            $this.addClass("bg").find('.levelu').slideToggle(); 
            $this.siblings().removeClass("bg").find('.levelu').slideUp();
          }
        });
        $(".pop_menu").click(function(){
        var $this = $(this);
        if($this.hasClass("bg1")){
            $this.removeClass("bg1"); 
            $(".pop").css({"transform":"translate(0%,0px)"},500);
          }else{
            $this.addClass("bg1"); 
            $(".pop").css({"transform":"translate(-100%,0px)"},500);
          }
        });
        $(".pop_close").click(function(){
            $(".pop_menu").addClass("bg1");
            $(".pop").css({"transform":"translate(-100%,0px)"},500);
        });
    $(".ai_close").click(function(){
        $(".activity").fadeOut();
    });
        $(".ind1_tu").click(function(){
        var tyu=$(this).find("span").html();
        $(".ind1_tc").fadeIn();
        
        $(".ind1_tc").find("video").attr("src",tyu);     
    });
    $(".ind1_tu").click(function(){
        var tyu1=$(this).find("span").html();
        
        $(".ind1_tu").find("video").attr("src",tyu1);     
    });
    $(".ind1_video i").click(function(){
        $(".ind1_tc").fadeOut();
        $(".ind1_tc").find("video").attr("src",11);  
    });
    // banner
      var swiper = new Swiper('.aa', {
          loop:true,
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
          autoplay:true,
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
      }
      });
      // 获得荣誉
    var swiper = new Swiper('.bb', {
          // loop:true,
          autoplay:true,
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
      }
      });
    // 我们的课程体系
    $(".course_lf a").click(function(){
            $(".course_lf a").removeClass("cur");
            $(this).addClass("cur");
            idx = $(this).index();
            $(".course_ri div.course_ul").eq(idx).show();
            $(".course_ri div.course_ul").not($(".course_ri div.course_ul").eq(idx)).hide();

        });
    // 导师轮播
    var swiper = new Swiper('.cc', {
          loop:true,
          autoplay:true,
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination-bullet3',
            clickable: true,
          },
      });
        // 导师点击切换
        $(".ind9_nav1 a").click(function(){
            $(".ind9_nav1 a").removeClass("cur");
            $(this).addClass("cur");
            idx = $(this).index();
            $(".ind9_ul1>ul").eq(idx).show();
            $(".ind9_ul1>ul").not($(".ind9_ul1>ul").eq(idx)).hide();

        });

         $(".ind9_nav2 a").click(function(){
            $(".ind9_nav2 a").removeClass("cur");
            $(this).addClass("cur");
            idx = $(this).index();
            $(".ind9_ul2>ul").eq(idx).show();
            $(".ind9_ul2>ul").not($(".ind9_ul2>ul").eq(idx)).hide();

        });
        // 留学资讯点击切换
        $(".ind10_nav a").click(function(){
            $(".ind10_nav a").removeClass("cur");
            $(this).addClass("cur");
            idx = $(this).index();
            $(".ind10_ul>ul").eq(idx).show();
            $(".ind10_ul>ul").not($(".ind10_ul>ul").eq(idx)).hide();

        })
        // 手机端服务流程轮播
        var swiper = new Swiper('.dd', {
          loop:true,
          autoplay:true,
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
      }
      });



});