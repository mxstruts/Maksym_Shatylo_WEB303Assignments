function getTeamJSON() {
  $.getJSON('team.json', function (data) {
    $.each(data.members, function (index, member) {
      var nameElement = $('<h2>').text(member.name);
      var positionElement = $('<h5>').text(member.position);
      var bioElement = $('<p>').text(member.bio);

      $('#team').append(nameElement, positionElement, bioElement);
    });
  });
}

function getTeamDataWithAjax() {
  $('#team').text('Loading...');

  $.ajax({
    url: 'team.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      $('#team').empty();

      $.each(data.members, function (index, member) {
        var nameElement = $('<h2>').text(member.name);
        var positionElement = $('<h5>').text(member.position);
        var bioElement = $('<p>').text(member.bio);

        $('#team').append(nameElement, positionElement, bioElement);
      });
    },
    error: function () {
      $('#team').text('Error: Content could not be retrieved.');
    },
  });
}

$(document).ready(function () {
  getTeamJSON();
  getTeamDataWithAjax();
});
