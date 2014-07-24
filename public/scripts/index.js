/**
 * Created by shaunkatona on 7/21/14.
 */
$("li", $("#menu")).on("animationstart webkitAnimationStart", function () {
    $(this).removeClass("invisible");
});
