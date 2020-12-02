$(function() {
  // toggle menu
  $('#js-mobileMenuToggle').on('click', function() { 
    $('#mobileMenu').toggle('slow')
    $('.navigation__toggle').toggleClass('navigation__toggle--close')
  })

  // Modal
  //
  $('.js-wishlist').on('click', function(e) {
    e.preventDefault()
    alertInfoModal('已加入我的收藏')
  })

  $('.js-addCart').on('click', function(e) {
    e.preventDefault()
    alertInfoModal('已加入購物車')
  })
  // 顯示彈跳視窗 - alert
  function alertInfoModal(alertText = '') {
    $('#alertInfoModal').modal('show')
    document.getElementById("alertText").innerText = alertText
    setTimeout(function() { $('#alertInfoModal').modal('hide') }, 3000)
  }
  
});

