$(document).ready(function () {
  $('.accordion-label').click(function () {
    const accordion = $(this).parent();
    accordion.siblings().find('.accordion-panel').slideUp();
    accordion.find('.accordion-panel').slideToggle();
  });

  $('.tab-label').click(function () {
    const selectedTab = $(this).data('tab');
    $('.tab-panel').hide();
    $('#' + selectedTab).show();
  });
});
