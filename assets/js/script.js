let pauseAndPlayButton = document.querySelector(".ytp-play-button");
let toggleExtensionCheckbox = document.querySelector("#toggleExtension");
let displayStatus = document.querySelector("#displayStatus");
let extensionStatus = true;
let videoStatus;

toggleExtensionCheckbox.checked = true;

function toggleExtension (status) {
    if (status.toLowerCase() === "enabled") {
        toggleExtensionCheckbox.checked = true;
    } else {
        toggleExtensionCheckbox.checked = false;
    }
}
// check if the checkbox is checked
// set the value in localStorage based on the check status 
// run the extension based on that check status

/* toggleExtensionCheckbox.addEventListener('click', function () {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("status", "enabled");
        // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}); */

function getVideoStatus(button) {
    return button.getAttribute('aria-label').toLowerCase();
}

if (window.location.hostname === "www.youtube.com") {

    // when the window is minimized
    window.addEventListener('blur', function() {
        // if the video is playing, pause it
        videoStatus = getVideoStatus(pauseAndPlayButton);
        if (videoStatus == "pause (k)") {
            pauseAndPlayButton.click();
            console.log(`document.hasFocus() is ${document.hasFocus()}`);
        }
        return;
    });

    // when the window is focused
    window.addEventListener('focus', function() {
        // if the video is paused, play it
        videoStatus = getVideoStatus(pauseAndPlayButton);
        if (videoStatus == "play (k)") {
            pauseAndPlayButton.click();
            console.log(`document.hasFocus() is ${document.hasFocus()}`);
        }
        return;
    });
}
