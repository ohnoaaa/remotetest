// inview.js
// https://github.com/protonet/jquery.inview /で対応
$('.cta').on('inview', function(event, isInView)  { // .sxrollが表示されたら
  // $('#sp_btn').addClass('close'); //処理を記述
  // if (isInView) {
  //   $('#sp_btn').addClass('close');
  //   $('.contact_header').addClass('close');
  // } else {
  //   $('#sp_btn').removeClass('close');
  //   $('.contact_header').removeClass('close');
  // }
});

//一文字ずつでてくる
$('.updown').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('active'); //処理を記述
});

$('.fadeInText').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('upText'); //処理を記述
});
$('.fadeInText-Y').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('upText-Y'); //処理を記述
});

$('.fadeUpTrigger').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('fadeUp');
  //処理を記述
});
$('.fadeLeftTrigger').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('fadeLeft');
  //処理を記述
});
$('.fadeRightTrigger').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('fadeRight');
  //処理を記述
});
$('.fadeInTrigger').on('inview', function () { // .sxrollが表示されたら
  $(this).addClass('fadeIn');
  //処理を記述
});
