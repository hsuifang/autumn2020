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

  // serach resault
  const searchResultSortId = 'js-sort'
  $('.searchResult').click(function(e) {
    if (e.target.id === searchResultSortId || e.target.parentElement.id === searchResultSortId) {
      $('.searchResult-sort').toggleClass('show')
    } else {
      $('.searchResult-sort').removeClass('show')
    }
  })

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
  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
      }
    }
  });
});