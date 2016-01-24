var bgs = [ 'aerial.jpg', 'karencat.png', 'aerial2.jpg', 'aerial3.jpg' ];
var bgIndex = 0;
var animating = false;

var inAnimation = 'zoomIn';
var outAnimation = 'zoomOut';

$(function() {
    var wheelEl = $('#img-wheel');
    var wheelBufferEl = $('#img-wheel-buffer');
    wheelEl.click(function() {
        if (animating) {
            return false;
        }
        animating = true;
        bgIndex = (bgIndex + 1) % bgs.length;
        var bufferBgIndex = (bgIndex + 1) % bgs.length;

        wheelEl.toggleClass('animated ' + outAnimation);
        wheelBufferEl.toggleClass('animated ' + inAnimation);
        wheelBufferEl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            wheelEl.css('background-image', 'url(images/' + bgs[bgIndex] + ')');
            wheelEl.toggleClass('animated ' + outAnimation);

            wheelBufferEl.css('background-image', 'url(images/' + bgs[bufferBgIndex] + ')');
            wheelBufferEl.toggleClass('animated ' + inAnimation);
            animating = false;
        });
    });
});
