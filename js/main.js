$(function () {

  // ハンバーガーを押したとき（開く / 閉じる）
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("open");  // 自分を×に
    $("nav").toggleClass("open"); // nav に open 付け外し
  });

  // メニューのリンクをクリックしたとき（全部閉じる）
  $(".nav-menu a").on("click", function () {
    $(".hamburger").removeClass("open");
    $("nav").removeClass("open");
  });

});









    // meta-point card
    $(function() {
    var $targetSection = $('.meta-point-cards');
    var $pointCards = $targetSection.find('.point-card');
    function checkVisibility() {
        if ($targetSection.length === 0) {
            return;
        }

        var scrollPos = $(window).scrollTop();
        
        var windowHeight = $(window).height();
        
        var sectionOffsetTop = $targetSection.offset().top;
        
        var sectionOffsetBottom = sectionOffsetTop + $targetSection.outerHeight();

        var triggerPoint = scrollPos + windowHeight - (windowHeight * 0.2);

        if (triggerPoint > sectionOffsetTop && scrollPos < sectionOffsetBottom) {
            $pointCards.each(function(index, element) {
                var $card = $(element);
                if (!$card.hasClass('is-animated')) {
                    $card.addClass('is-animated');
                }
            });
        }
    }

    $(window).on('load', checkVisibility);
    $(window).on('scroll', checkVisibility);
});






// offline-meetup slider

$(function () {
    $(".js-slick01").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: 'linear',
        slidesToShow: 3,
        swipe: false,
        pauseOnFocus: false, 
        pauseOnHover: false,
        arrows: false,

 responsive: [
      {
        breakpoint: 1024, // 画面幅1024px以下
        settings: {
          slidesToShow: 2, // 3枚表示
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // 画面幅768px以下
        settings: {
          slidesToShow: 2, // 2枚表示
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,  // 画面幅480px以下
        settings: {
          slidesToShow: 1, // 1枚表示
          slidesToScroll: 1
        }
      }
    ]
    });


    $(".js-slick02").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: 'linear',
        slidesToShow: 3,
        swipe: false,
        pauseOnFocus: false, 
        pauseOnHover: false,
        arrows: false,
        rtl: true,

            responsive: [
      {
        breakpoint: 1024, // 画面幅1024px以下
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // 画面幅768px以下
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,  // 画面幅480px以下
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });

$(function () {

  // アコーディオン本体（中身のみ slide）
  $(".accordion_header_type1").on("click", function () {

    if ($(this).hasClass("accordion-hidden")) return; // 非表示モードは無効

    $(this).next(".accordion_inner_type1").slideToggle(300);
    $(this).toggleClass("open");
  });


  /* ---------- 最初の4つだけ残して5つ目以降を非表示 ---------- */
  const headers = $(".accordion_header_type1");
  const inners  = $(".accordion_inner_type1");

  headers.each(function (i) {
    if (i >= 4) {
      $(this).addClass("accordion-hidden").hide();   // header は hide() のみ
      inners.eq(i).addClass("accordion-hidden").hide(); // inner も hide()
    }
  });


  /* ---------- もっと見る ---------- */
  $(".faq-more-btn").on("click", function () {

    $(this).toggleClass("open");

    if ($(this).hasClass("open")) {

      // 開く → 5つ目以降の「ヘッダーは show()」「中身はそのまま閉じた状態」
      headers.slice(4).removeClass("accordion-hidden").show();
      inners.slice(4).removeClass("accordion-hidden");

    } else {

      // 閉じる → 5つ目以降の「中身 slideUp」「ヘッダー hide()」
      inners.slice(4).slideUp(300, function(){
        headers.slice(4).addClass("accordion-hidden").hide();
        inners.slice(4).addClass("accordion-hidden");
      });

    }
  });

});



    /*麦とホップfadeIn*/ 
    var $targetSection = $('.about-items');
    var $pointCards = $targetSection.find('.about-item');
    function checkVisibility() {
        if ($targetSection.length === 0) {
            return;
        }

        var scrollPos = $(window).scrollTop();
        
        var windowHeight = $(window).height();
        
        var sectionOffsetTop = $targetSection.offset().top;
        
        var sectionOffsetBottom = sectionOffsetTop + $targetSection.outerHeight();

        var triggerPoint = scrollPos + windowHeight - (windowHeight * 0.2);

        if (triggerPoint > sectionOffsetTop && scrollPos < sectionOffsetBottom) {
            $pointCards.each(function(index, element) {
                var $card = $(element);
                if (!$card.hasClass('is-animated')) {
                    $card.addClass('is-animated');
                }
            });
        }
    }

    $(window).on('load', checkVisibility);
    $(window).on('scroll', checkVisibility);


$(function(){
    $('.accordion_type1 .accordion_header_type1').click(function(){
        $(this).next('.accordion_inner_type1').slideToggle();
        $(this).toggleClass("open");
});

});

});
