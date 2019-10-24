/*
    1. check how to run JS (done)
    2. check how to run in order tabs (done)
    3. get url of tabs
    4. make it run in the background
    5. inject script in the tabs that have youtube running
    6.
*/
/* var tabDiv = document.querySelector('#show-tabs');

chrome.tabs.query({currentWindow: true}, function (tabs) {
    filterItems(tabs, "youtube.com");
    // alert(tabs[0].url);
    // tabDiv.innerHTML(tabs);

    console.log(tabs);
    // var url = tabs[0].url;
});

function filterItems(array, query) {
    return array.filter(function(el) {
        var filteredItems = el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        alert(filterItems[0].url);
    })
}
 */

var x = document.querySelector(".ytp-play-button");

function pauseVideo (status) {
    if (status.toLowerCase() == "hidden") {
        x.click();
    } else {
        x.click();
    }
}

document.addEventListener("visibilitychange", function() {
    pauseVideo( document.visibilityState );
});

/* chrome.runtime.onMessage.addListener(
    function(message, callback) {
    if (message == "runContentScript"){
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });
    }
}); */