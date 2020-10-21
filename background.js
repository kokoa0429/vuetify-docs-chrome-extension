chrome.tabs.onUpdated.addListener(function (tabId, changeinfo) {
    if (changeinfo.status === 'complete') {
        try {
            chrome.tabs.executeScript(null, {file: 'main.js'}, () => {});
        } catch (e) {

        }
    }
});