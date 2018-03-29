function scriptsRun() {

    function getButton() {
        var button = document.querySelector(".btn");
        if (button == null) {
            return;
        }

        var searchBlock = document.querySelector(".search-form");
        searchBlock.style.opacity = "0";
        searchBlock.style.top = "-65%";

        button.addEventListener("click", function (evt) {
            evt.preventDefault();
            searchBlock = document.querySelector(".search-form");
            var getFormStyles = getComputedStyle(searchBlock);
            var getFormOpacity = getFormStyles.opacity;

            if (getFormOpacity == 0) {
                setTimeout(function () {
                    searchBlock.style.opacity = "1";
                }, 450);
                searchBlock.style.top = "100%";
            } else {
                searchBlock.style.opacity = "0";
                searchBlock.style.transition = "all 0.7s ease-in";
                setTimeout(function () {
                    searchBlock.style.top = "-65%"
                }, 250);
            }
            return false;
        })
    };

    getButton();
}

window.onload = scriptsRun;
