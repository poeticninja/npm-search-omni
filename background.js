/*global chrome*/
chrome.omnibox.onInputCancelled.addListener(function() {
    chrome.omnibox.setDefaultSuggestion({
        description: 'npm: Search NPM for %s'
    });
});

chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.update(tab.id, {url: 'https://www.google.com/?#q=https://www.npmjs.com/ ' + text});
    });

});
