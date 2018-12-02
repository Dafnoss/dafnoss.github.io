$(document).ready(function() {
    $('.show-result').hide();

    $('.btn').on('click', function () {
        $('.input-worker').hide();
        $('.show-result').show()
    });

    $('.close-btn').on('click', function () {
        $('.show-result').hide();
        $('.input-worker').show();
    });

});

