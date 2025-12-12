# Jira Dark Mode Chrome Extension

A Chrome extension that applies a custom dark mode theme to https://projects.netcentric.biz/

## Features

- 🌙 Toggle dark mode on/off with a single click
- 💾 Remembers your preference across browser sessions
- 🎨 Comprehensive dark theme for Jira interface
- ⚡ Automatically applies on page load when enabled

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right corner)
3. Click "Load unpacked"
4. Select the folder containing this extension
5. The extension is now installed

## Usage

### Toggle Dark Mode

Simply **click the extension icon** in your Chrome toolbar to toggle dark mode on or off. The tooltip will show the current state:
- "Dark Mode: ON (Click to disable)"
- "Dark Mode: OFF (Click to enable)"

### Automatic Application

When dark mode is enabled, the theme will automatically apply whenever you visit pages on projects.netcentric.biz. Your preference is saved and will persist across browser sessions.

### Customize Styles

To customize the dark theme:
1. Edit [custom.css](custom.css) with your desired CSS rules
2. Save the file
3. Reload the extension in `chrome://extensions/` (click the refresh icon)
4. Refresh any open tabs on projects.netcentric.biz to see your changes

## Project Structure

```
jira-dark-mode/
├── manifest.json    # Extension configuration and permissions
├── background.js    # Service worker for toggle logic and CSS injection
├── custom.css       # Dark mode theme styles
├── LICENSE          # Project license
└── README.md        # This file
```

## Technical Details

- **Manifest Version**: 3
- **Permissions**: activeTab, storage, scripting
- **Host Permissions**: https://projects.netcentric.biz/*
- *Troubleshooting

**Extension icon not showing?**
- Make sure you've loaded the extension in `chrome://extensions/`
- Check that "Developer mode" is enabled

**Dark mode not applying?**
- Click the extension icon to toggle it on
- Ensure you're on https://projects.netcentric.biz/
- Try refreshing the page after clicking the icon

**Changes to CSS not visible?**
- After editing custom.css, reload the extension in `chrome://extensions/`
- Refresh the Jira page to see the changes

## Notes

- Icon files (icon16.png, icon48.png, icon128.png) are referenced in manifest.json but optional
- The extension only works on the https://projects.netcentric.biz/ domain
- Dark mode is enabled by default on first installation

## License

See [LICENSE](LICENSE) file for details. but recommended
- The extension only works on https://projects.netcentric.biz/ domain
- Changes to custom.css require extension reload to take effect
