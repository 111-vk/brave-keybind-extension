
# Brave Keybind Extension

This guide will walk you through the creation of a simple Brave browser extension that allows you to open a specific website using a keybind.

## 1. Overview
The extension uses a background service worker to listen for a predefined keybind. When the keybind is triggered, the extension opens a new tab with the specified website.

---

## 2. File Structure

Create a folder named `brave-keybind-extension` and add the following files:

```
brave-keybind-extension/
├── manifest.json
├── background.js
```

---

## 3. Code Files

### 3.1. `manifest.json`
This file defines the extension's metadata and settings.

```json
{
  "manifest_version": 3,
  "name": "Brave Keybind to Open Site",
  "version": "1.0",
  "description": "Open a specific website with a keybind in Brave.",
  "permissions": ["tabs"],
  "background": {
    "service_worker": "background.js"
  },
  "commands": {
    "open-site": {
      "suggested_key": {
        "default": "Ctrl+Shift+O",
        "mac": "Command+Shift+O"
      },
      "description": "Open a specific site in Brave"
    }
  }
}
```

### 3.2. `background.js`
This file contains the logic to open the specified website when the keybind is triggered.

```javascript
chrome.commands.onCommand.addListener((command) => {
  if (command === "open-site") {
    const siteUrl = "https://www.example.com"; // Replace this with the desired URL
    chrome.tabs.create({ url: siteUrl });
  }
});
```

---

## 4. Loading the Extension in Brave

1. **Open Brave**:
   - Launch the Brave browser.

2. **Access the Extensions Page**:
   - Enter `brave://extensions/` in the address bar and press Enter.

3. **Enable Developer Mode**:
   - Toggle the **Developer mode** switch in the top-right corner.

4. **Load the Extension**:
   - Click on the **Load unpacked** button.
   - Select the `brave-keybind-extension` folder where you saved the files.

5. **Verify Installation**:
   - The extension should now appear in the list of installed extensions.

---

## 5. Testing the Keybind

1. **Trigger the Keybind**:
   - Press the keybind defined in `manifest.json`. By default, it is:
     - **Windows/Linux**: `Ctrl+Shift+O`
     - **Mac**: `Command+Shift+O`

2. **Observe the Behavior**:
   - The specified website (e.g., `https://www.example.com`) should open in a new tab.

---

## 6. Customizing the Keybind

1. **Access Shortcut Settings**:
   - Go to `brave://extensions/shortcuts` in the Brave browser.

2. **Update the Keybind**:
   - Locate your extension in the list.
   - Set a new keybind by clicking on the current shortcut and entering a new combination.

---

## 7. Notes

- **Replace the URL**: In `background.js`, replace `https://www.example.com` with the URL of your choice.
- **Keybind Conflicts**: Ensure that the keybind you choose does not conflict with existing Brave shortcuts.
- **Cross-Browser Compatibility**: This extension also works on other Chromium-based browsers like Chrome, Edge, and Opera.

---

## 8. Troubleshooting

- **Extension Not Loading**:
  - Verify that the `manifest.json` and `background.js` files are correctly placed and have valid syntax.
- **Keybind Not Working**:
  - Check the keybind settings at `brave://extensions/shortcuts`.
  - Ensure the extension is active.
- **Site Not Opening**:
  - Confirm that the URL in `background.js` is correct and accessible.

---

With this guide, you should be able to create and use a simple Brave browser extension to open any website with a keybind!
