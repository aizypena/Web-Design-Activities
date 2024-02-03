document.addEventListener("DOMContentLoaded", function () {
    // Function to change the color
    function changeColor() {
        var button = document.querySelector('.change-btn');
        var body = document.body;
        var mainContainer = document.querySelector('.main-container');

        // btn-dark and btn-light classes on the button
        button.classList.toggle('btn-dark');
        button.classList.toggle('btn-light');

        // light-theme-clr and dark-theme-clr classes on the body
        body.classList.toggle('light-theme-clr');
        body.classList.toggle('dark-theme-clr');

        // .main-container
        mainContainer.classList.toggle('main-container-dark');
    }

    // click event listener to the button
    var changeColorBtn = document.querySelector('.change-btn');
    changeColorBtn.addEventListener("click", changeColor);
});