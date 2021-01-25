console.log(chrome);
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: 'window.localStorage.removeItem("state"); window.location.reload();'
    });
});