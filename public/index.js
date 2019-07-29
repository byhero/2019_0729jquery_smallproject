$(function () {
    $(".card-img-top").mouseover(function () {
        $(this).css("opacity", "0.5");
        console.log(this);
    });

    $(".card-img-top").mouseleave(function () {
        $(this).css("opacity", "1");
        console.log(this);
    });
})