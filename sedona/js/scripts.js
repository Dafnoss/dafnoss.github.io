
function scriptsRun () {

    function getButton () {
        var button = document.querySelector(".btn");
        if (button == null) {
            return;
        }

        button.onclick = function () {
            var searchBlock = document.querySelector('.search-form');
            var getFormStyles =  getComputedStyle(searchBlock);
            var getFormOpacity = getFormStyles.opacity;

            if (getFormOpacity == 0) {
                setTimeout(function () {searchBlock.style.opacity = "1";}, 450);
                searchBlock.style.top = "100%";
            } else {
                searchBlock.style.opacity = "0";
                searchBlock.style.transition = "all 0.7s ease-in"
                setTimeout(function () {searchBlock.style.top = "-65%"}, 250);
            }
            return false;
        }
    };

    function getSlider() {
        var elm = document.querySelector('.price-range-input');
        var container = elm.parentNode;
        var values = elm.getAttribute('data-values').split(' ');

        values.forEach(function (value, i, values) {
            var rangePart = elm.cloneNode();
            rangePart.type = 'range';
            rangePart.removeAttribute('data-values');
            rangePart.value = value;
            rangePart = container.insertBefore(rangePart, elm);
        });

        elm.remove();

    };

    getButton();
    getSlider();
}

window.onload = scriptsRun;
