$(document).ready(function () {
  let charactersData;
  let sortedColumn = null;
  let ascending = true;

  function renderCharacters(data) {
    const tbody = $('#charactersTable tbody');
    tbody.empty();
    data.forEach((character) => {
      const row = $('<tr></tr>');
      row.append(`<td>${character.firstName}</td>`);
      row.append(`<td>${character.lastName}</td>`);
      row.append(`<td>${character.age}</td>`);
      row.append(`<td>${character.occupation}</td>`);
      row.append(`<td>${character.date}</td>`);
      tbody.append(row);
    });
  }

  function sortCharacters(column) {
    if (sortedColumn === column) {
      ascending = !ascending;
    } else {
      sortedColumn = column;
      ascending = true;
    }

    charactersData.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      if (valueA < valueB) return ascending ? -1 : 1;
      if (valueA > valueB) return ascending ? 1 : -1;
      return 0;
    });

    renderCharacters(charactersData);

    $('th[data-sort]').find('.chevron').text('');
    const currentChevron = $('th[data-sort="' + column + '"]').find('.chevron');
    currentChevron.text(ascending ? '▲' : '▼');
  }

  $.ajax({
    url: 'characters.json',
    dataType: 'json',
    success: function (data) {
      charactersData = data;
      renderCharacters(charactersData);

      $('th[data-sort]').click(function () {
        const column = $(this).data('sort');
        sortCharacters(column);
      });
    },
    error: function () {
      console.error('Error fetching data.');
    },
  });
});
