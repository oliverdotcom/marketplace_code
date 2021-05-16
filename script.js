$(document).ready(function () {

    $('#filters :checkbox').click(function () {
        if ($('input:checkbox:checked').length) {
            $('.p-class').hide();
            $('input:checkbox:checked').each(function () {
                $('.p-class[data-' + $(this).prop('name') + '*="' + $(this).val() + '"]').show();
            });
        } else {
            $(".p-class").show();
        }
    });

});