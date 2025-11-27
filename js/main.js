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
