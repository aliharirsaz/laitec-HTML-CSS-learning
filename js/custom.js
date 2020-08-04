$(document).ready(function () {
    $('#main-menu').on('show.bs.collapse', function () {
        $('#main-menu').addClass('h');

    })
    $('#main-menu').on('hide.bs.collapse', function () {
        $('#main-menu').removeClass('h');

    })
    $('.subscribe-btn').click(function (event) { 
        event.preventDefault();
        var subscribeInput = $(".subscribe-input").val();
        console.log("Email:" + subscribeInput);
    });
});
