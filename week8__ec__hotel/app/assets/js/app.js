$(function() {
  // index
  // --------------
  // 選擇時間
  $('#js-datepicker').daterangepicker({
    "autoApply": true
  },function(start, end) {
    document.getElementById("js-datepicker-content").innerText = `${start.format('YYYY-MM-DD')} - ${end.format('YYYY-MM-DD') }`
  });
  // index end --
});