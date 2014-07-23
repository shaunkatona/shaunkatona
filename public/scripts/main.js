/**
 * Created by shaunkatona on 7/21/14.
 */
$("li", $("#icons")).on("animationstart webkitAnimationStart", function () {
    $(this).removeClass("invisible");
});
