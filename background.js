// Listen for extension icon clicks
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url && tab.url.includes('projects.netcentric.biz')) {
    // Get current state and toggle it
    chrome.storage.sync.get(['darkModeEnabled'], function(result) {
      const currentState = result.darkModeEnabled !== false; // Default to true
      const newState = !currentState;
      
      // Save new state
      chrome.storage.sync.set({ darkModeEnabled: newState }, function() {
        // Apply the change
        if (newState) {
          injectCSS(tab.id);
        } else {
          removeCSS(tab.id);
        }
        
        // Update icon to show state
        updateIcon(newState);
      });
    });
  }
});

// Inject or remove CSS when tabs are updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading' && tab.url && tab.url.includes('projects.netcentric.biz')) {
    chrome.storage.sync.get(['darkModeEnabled'], function(result) {
      const isEnabled = result.darkModeEnabled !== false; // Default to true
      
      if (isEnabled) {
        injectCSS(tabId);
      }
      
      // Update icon to match current state
      updateIcon(isEnabled);
    });
  }
});

function injectCSS(tabId) {
  chrome.scripting.insertCSS({
    target: { tabId: tabId },
    files: ['custom.css']
  }).catch(err => console.error('Failed to inject CSS:', err));
}

function removeCSS(tabId) {
  chrome.scripting.removeCSS({
    target: { tabId: tabId },
    files: ['custom.css']
  }).catch(err => console.error('Failed to remove CSS:', err));
}


function updateIcon(enabled) {
  const path = enabled ? {
    "16": "icon16.png",
    "48": "icon48.png", 
    "128": "icon128.png"
  } : {
    "16": "icon16-disabled.png",
    "48": "icon48-disabled.png",
    "128": "icon128-disabled.png"
  };
  
  chrome.action.setIcon({ path: path });
  chrome.action.setTitle({ title: enabled ? 'Dark Mode: ON (Click to disable)' : 'Dark Mode: OFF (Click to enable)' });
}