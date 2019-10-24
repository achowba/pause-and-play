/*
    1. check how to run JS (done)
    2. check how to run in order tabs (done)
    3. get url of tabs
    4. make it run in the background
    5. inject script in the tabs that have youtube running
    6.
*/

// let pauseAndPlayButton = document.querySelector(".ytp-play-button");

/* function pauseVideo (status) {
    // if the tab is changed click the pauseAndPlayButton
    if (status.toLowerCase() == "hidden") {
        pauseAndPlayButton.click();
    } else {
        pauseAndPlayButton.click();
    }
} */

/* document.addEventListener("visibilitychange", function() {
    pauseAndPlayButton.click();
});

window.addEventListener('blur', function() {
    console.log(`document.hasFocus() is ${document.hasFocus()}`);
    pauseAndPlayButton.click();
});

window.addEventListener('focus', function() {
    console.log(`document.hasFocus() is ${document.hasFocus()}`);
    pauseAndPlayButton.click();
}); */

let pauseAndPlayButton = document.querySelector(".ytp-play-button");
let extensionStatus = true;
let videoStatus;

/* chrome.contextMenus.create({
    id: "toggle-extension",
    "title": "Enable Pause and Play",
    "contexts": ["all"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "toggle-extension") {
        toggleExtension();
    }
}); */

function toggleExtension () {
    if (extensionStatus == true) {
        extensionStatus = false;
    } else {
        extensionStatus = true;
    }
    return extensionStatus;
}

toggleExtension();

if (toggleExtension() == true) {
    function getVideoStatus(button) {
        return button.getAttribute('aria-label').toLowerCase();
    }

    // when the window is minimized
    window.addEventListener('blur', function() {
        // if the video is playing
        videoStatus = getVideoStatus(pauseAndPlayButton);
        if (videoStatus == "pause (k)") {
            pauseAndPlayButton.click();
            console.log(`document.hasFocus() is ${document.hasFocus()}`);
        } else {
            return;
        }
    });

    // when the window is focused
    window.addEventListener('focus', function() {
        // if the video is paused
        videoStatus = getVideoStatus(pauseAndPlayButton);
        if (videoStatus == "play (k)") {
            pauseAndPlayButton.click();
            console.log(`document.hasFocus() is ${document.hasFocus()}`);
        } else {
            return;
        }
    });
}
