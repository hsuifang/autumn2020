$(function() {
  // index
  // --------------
  // carousel
  $('.carousel').carousel({
    interval: 10000
  })
  // 選擇時間
  $('#js-datepicker').daterangepicker({
    "autoApply": true
  },function(start, end) {
    document.getElementById("js-datepicker-content").innerText = `${start.format('YYYY-MM-DD')} - ${end.format('YYYY-MM-DD') }`
  });
  // index end --

  // reservationDetail
  $('#collapseRoomDetail').on('show.bs.collapse', function () {
    $('.reservationDetail-collapse__toggle .material-icons').text('keyboard_arrow_up')
    $('.js-detailPrize').css('color', 'transparent')
    $('.js-detailPrize span').css('display', 'none')
  })
  $('#collapseRoomDetail').on('hide.bs.collapse', function () {
    $('.reservationDetail-collapse__toggle .material-icons').text('keyboard_arrow_down')
    $('.js-detailPrize').css('display', 'block')
    $('.js-detailPrize').css('color', '#000')
    $('.js-detailPrize span').css('display', 'inline')
  })
});