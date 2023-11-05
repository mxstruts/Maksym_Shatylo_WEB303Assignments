(function ($) {
  $.fn.photoViewer = function () {
    // Your photo viewer plugin code here

    // Handle thumbnail click
    this.find('.thumbnail').on('click', function () {
      var photoBox = $(this).closest('.photo-box');
      photoBox.attr('href', $(this).attr('href'));
    });

    return this;
  };
})(jQuery);
