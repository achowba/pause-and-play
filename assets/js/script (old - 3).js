let pauseAndPlayButton = document.querySelector(".ytp-play-button.ytp-button");
let extensionStatus = true;
let videoStatus;

function toggleExtension () {
    if (extensionStatus === true) {
        extensionStatus = false;
    } else {
        extensionStatus = true;
    }
    return extensionStatus;
}

chrome.contextMenus.create({
    id: "toggle-extension",
    "title": "Enable Pause and Play",
    "contexts": ["all"],
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "toggle-extension") {
        if (extensionStatus === true) {
            extensionStatus = false;
        } else {
            extensionStatus = true;
        }
        alert(extensionStatus);
        doSomething1();
        return extensionStatus;
    }
});

function doSomething1 () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
        });
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        alert(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
    if (request.greeting == "hello") {
        sendResponse({farewell: "goodbye"});
    }
});

if (extensionStatus == true) {
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
        alert(extensionStatus);
        videoStatus = getVideoStatus(pauseAndPlayButton);
        if (videoStatus == "play (k)") {
            pauseAndPlayButton.click();
            console.log(`document.hasFocus() is ${document.hasFocus()}`);
        } else {
            return;
        }
    });
}
