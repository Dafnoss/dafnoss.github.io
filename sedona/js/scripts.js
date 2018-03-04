
function scriptsRun () {

    function getButton () {
        var button = document.querySelector(".btn");

        button.onclick = function () {
            var searchBlock = document.querySelector('.search-form');
            if (searchBlock.classList.contains('hide')) {
                searchBlock.classList.remove('hide')
            } else
            searchBlock.classList.add('hide')
        }
    };

    getButton();

}

window.onload = scriptsRun;