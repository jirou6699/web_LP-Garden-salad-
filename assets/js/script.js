"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $(".to-top");
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 300, "swing");
    return false;
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  }); // formの入力確認

  var $submit = $("#js-submit");
  $("#js-form input").on("change", function () {
    if ($('#js-form input[type="text"]').val() !== "" && $('#js-form input[type="email"]').val() !== "" && $('#js-form input[type="textarea"]').val() !== "" && $('#js-form input[type="checkbox"]').prop("checked") === true) {
      $submit.prop("disabled", false);
      $submit.addClass("-active");
    } else {
      $submit.removeClass("-active");
    }
  }); //モーダル

  $("#js-modal-open").on("click", function (e) {
    e.preventDefault();
    $("#target-modal").fadeToggle("");
    return false;
  });
  $(".js-modal-close").on("click", function (e) {
    e.preventDefault();
    $("#target-modal").fadeToggle("");
    return false;
  }); // parallax

  var image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image, {
    delay: 0.3,
    orientation: 'down'
  });
});