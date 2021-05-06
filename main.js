$(document).ready(function () {
    var subcalc = '';
    var symbol  = '';
    var trigger = ''
    var calctrigger = '';
    var calc = '';

    $('th').click(function () {
        trigger = $(this).attr('data-value');
        $('#Output').append(trigger);

        if ($(this).attr('id') === '+' || $(this).attr('id') === '-' || $(this).attr('id') === '/' || $(this).attr('id') === '*') {
            subcalc = $('#Output').html();
            symbol  = $(this).attr('id');
            $('#Output').append(symbol );
        }
        if ($(this).attr('data-value') && subcalc !== '') {
            calctrigger += trigger;
            (symbol  === '+') ? calc = Number(subcalc) + Number(calctrigger) :

            (symbol  === '-') ? calc = subcalc - calctrigger :

            (symbol  === '*') ? calc = subcalc * calctrigger :

            (symbol  === '/') ? calc = subcalc / calctrigger : '';
        }
        if ($(this).attr('id') === '=') {
            $('#Output').html(calc)
            subcalc = ''
            symbol  = ''
            trigger = '';
            calc = '';
            calctrigger = '';
        }

        if ($(this).attr('id') === 'Entf') {
            $('#Output').html($('#Output').html().substr(0, $('#Output').html().length - 1));
        }

        if ($(this).attr('id') === 'C') {
            $('#Output').html('');
            subcalc = ''
            symbol  = ''
            trigger = ''
            calctrigger = ''
            calc = '';
        }

    });
});
