// Load saved state
chrome.storage.sync.get(['darkModeEnabled'], function(result) {
  const isEnabled = result.darkModeEnabled !== false; // Default to true
  document.getElementById('toggleSwitch').checked = isEnabled;
  updateStatus(isEnabled);
});

// Handle toggle change
document.getElementById('toggleSwitch').addEventListener('change', async function(e) {
  const isEnabled = e.target.checked;
  
  // Save state
  chrome.storage.sync.set({ darkModeEnabled: isEnabled }, function() {
    updateStatus(isEnabled);
  });
  
  // Get current tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab && tab.url.includes('projects.netcentric.biz')) {
    // Send message to background script to toggle CSS
    chrome.runtime.sendMessage({ 
      action: 'toggleDarkMode', 
      enabled: isEnabled,
      tabId: tab.id
    });
    
    // Reload the page to apply changes
    setTimeout(() => {
      chrome.tabs.reload(tab.id);
    }, 100);
  }
});

function updateStatus(enabled) {
  const status = document.getElementById('status');
  status.textContent = enabled ? 'Active' : 'Inactive';
  status.style.color = enabled ? '#2196F3' : '#999';
}
