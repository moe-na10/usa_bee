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