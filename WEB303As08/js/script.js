$(document).ready(function() {
    // Load characters data from JSON file
    $.ajax({
        url: 'characters.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Add characters to the table
            populateTable(data);

            // Attach event listener for search input
            $('#search').on('input', function() {
                highlightRows($(this).val());
            });

            // Attach event listener for filter buttons
            $('#filterAtoM').on('click', function() {
                filterByLastName('A', 'M');
            });

            $('#filterNtoZ').on('click', function() {
                filterByLastName('N', 'Z');
            });
        },
        error: function(error) {
            console.error('Error loading characters data:', error);
        }
    });

    function populateTable(characters) {
        var table = $('#charactersTable');
        table.empty(); // Clear existing table content

        // Add table headers
        table.append('<tr><th>First Name</th><th>Last Name</th><th>Info 1</th><th>Info 2</th><th>Info 3</th><th>Info 4</th><th>Info 5</th></tr>');

        // Add characters to the table
        $.each(characters, function(index, character) {
            table.append('<tr><td>' + character.firstName + '</td><td>' + character.lastName + '</td><td>' + character.info1 + '</td><td>' + character.info2 + '</td><td>' + character.info3 + '</td><td>' + character.info4 + '</td><td>' + character.info5 + '</td></tr>');
        });
    }

    function highlightRows(searchTerm) {
        var table = $('#charactersTable');
        table.find('tr').removeClass('highlight');

        if (searchTerm !== '') {
            table.find('td:first-child:contains("' + searchTerm + '")').closest('tr').addClass('highlight');
        }
    }

    function filterByLastName(startRange, endRange) {
        var table = $('#charactersTable');
        var count = 0;

        table.find('tr').each(function() {
            var lastName = $(this).find('td:eq(1)').text();
            if (lastName >= startRange && lastName <= endRange) {
                $(this).show();
                count++;
            } else {
                $(this).hide();
            }
        });

        // Update the filter button count
        $('#filterAtoM').text('A - M (' + (startRange === 'A' ? count : 0) + ')');
        $('#filterNtoZ').text('N - Z (' + (startRange === 'N' ? count : 0) + ')');
    }
});
