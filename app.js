document.addEventListener("DOMContentLoaded", function () {
    // Function to change the color
    function changeColor() {
        var icon = document.querySelector('.fa-moon-stars');
        var body = document.body;

        // Toggle the dark-theme class on the body
        body.classList.toggle('dark-theme-clr');

        // Toggle the color of the icon
        if (body.classList.contains('dark-theme-clr')) {
            icon.style.color = "#fff";
        } else {
            icon.style.color = "#000";
        }
    }

    // Add click event listener to the icon
    var icon = document.querySelector('.fa-moon-stars');
    icon.addEventListener("click", changeColor);
});
