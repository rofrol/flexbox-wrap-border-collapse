// http://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript
var handler = document.querySelector('.handler');
var up = document.querySelector('.up');

handler.addEventListener('mousedown', initDrag, false);

var startX, startY, startWidth, startHeight, upRect;

function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
	upRect = up.getBoundingClientRect();
    startWidth = parseInt(upRect.width, 10);
    startHeight = parseInt(upRect.height, 10);
    window.addEventListener('mousemove', doDrag, false);
	window.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    up.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
	window.removeEventListener('mousemove', doDrag, false);
	window.removeEventListener('mouseup', stopDrag, false);
}
