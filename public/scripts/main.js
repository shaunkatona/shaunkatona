/**
 * Created by shaunkatona on 7/21/14.
 */
$(".disappearAfterAnimation").on("animationend webkitAnimationEnd", function () {
    $(this).addClass("none");
});

$("li", $("#icons")).on("animationstart webkitAnimationStart", function () {
    $(this).removeClass("invisible");
});
