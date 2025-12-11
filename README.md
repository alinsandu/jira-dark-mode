# Jira Dark Mode Custom CSS Extension

A Chrome extension that injects custom CSS into https://projects.netcentric.biz/ pages.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right corner)
3. Click "Load unpacked"
4. Select the folder containing this extension
5. The extension is now installed and active

## Usage

The extension automatically injects styles from [custom.css](custom.css) when you visit any page on https://projects.netcentric.biz/

To customize the styles:
1. Edit [custom.css](custom.css) with your desired CSS rules
2. Save the file
3. Reload the extension in `chrome://extensions/` (click the refresh icon)
4. Refresh any open tabs on projects.netcentric.biz

## Files

- [manifest.json](manifest.json) - Chrome extension configuration
- [custom.css](custom.css) - Your custom CSS styles
- README.md - This file

## Notes

- The extension requires icons (16x16, 48x48, 128x128 pixels) named icon16.png, icon48.png, and icon128.png. These are optional but recommended for a polished look.
- CSS is injected at `document_start` for early application before page render.
Chrome Extension to force dark mode on jira
