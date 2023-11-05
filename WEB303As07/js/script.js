$(function () {
  $('#photo-viewer')
    .customPhotoViewer()
    .show()
    .on('click', '.photo-box', function (e) {
      var $content = $(this).clone().find('img').css({
        marginLeft: 0,
        marginTop: 0,
        width: '100%',
        height: 'auto',
      });
      //modal code goes here
    });
});

$('#photo-viewer a.photo-box').on('click', function (e) {
  e.preventDefault();
  var clonedImage = $(this).find('img').clone();
  var modal = function () {
    var $window = $(window);
    var $modal = $('<div class="modal"/>');
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role=“button" class="modal-close">close</button>');

    $modal.append($content, $close);
  };
});
