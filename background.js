chrome.commands.onCommand.addListener((command) => {
    if (command === "open-site") {
      const siteUrl ="https://www.youtube.com/" ; // Replace this with the desired URL
      chrome.tabs.create({ url: siteUrl });
    }
  });
  