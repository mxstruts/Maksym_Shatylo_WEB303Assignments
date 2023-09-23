// WEB303 Assignment 2


document.addEventListener("DOMContentLoaded", function () {
    var contentDiv = document.getElementById("content");
    var contentWrapper = document.getElementById("content-wrapper");

    function loadContent(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Animate the content with a fade-in effect
                contentDiv.style.opacity = "0";
                contentDiv.innerHTML = xhr.responseText;

                setTimeout(function () {
                    contentDiv.style.opacity = "1";
                }, 100);

            } else {
                console.error("Failed to load content.");
            }
        };

        xhr.send();
    }

    contentWrapper.addEventListener("click", function (e) {
        e.preventDefault();
        var target = e.target;

        if (target.tagName === "A") {
            var contentId = target.id;

            // Hide the content with a fade-out effect
            contentDiv.style.opacity = "0";

            setTimeout(function () {
                // Clear the content
                contentDiv.innerHTML = "";

                // Determine the URL based on the link clicked
                var url = contentId + ".html";

                // Load the new content
                loadContent(url);

                // Animate the content with a fade-in effect
                setTimeout(function () {
                    contentDiv.style.opacity = "1";
                }, 100);
            }, 300);
        }
    });

    // Load the initial content (e.g., "prospect.html")
    loadContent("prospect.html");
});
/***************************************** */
