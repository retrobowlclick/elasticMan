chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'https://ubg365.github.io/games/elastic-man/'
  });
  chrome.runtime.setUninstallURL('https://ubg365.github.io/games/elastic-man/')
});

chrome.action.onClicked.addListener((_reason) => {
  chrome.tabs.create({
      url: 'index.html'
  });
});