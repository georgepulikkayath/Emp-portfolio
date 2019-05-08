$(document).ready(function () {
    $('.header').height($(window).height());

    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    })
})
$(".btn-lg").on("click",".btn",function () {
    debugger
    window.location ="https://github.com/georgepulikkayath";

        
});