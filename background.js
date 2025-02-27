chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "downloadCSRF") {
      try {
        // Create the Blob and URL
        const blob = new Blob([message.htmlContent], { type: "text/html" });
        const url = self.URL.createObjectURL(blob); // Use self.URL
  
        // Trigger the download
        chrome.downloads.download(
          {
            url: url,
            filename: "csrf_poc.html",
            conflictAction: "uniquify",
          },
          (downloadId) => {
            // Revoke the URL after the download starts
            self.URL.revokeObjectURL(url); // Use self.URL here too
            if (chrome.runtime.lastError) {
              sendResponse({ status: "error", message: "Download failed." });
            } else {
              sendResponse({ status: "success" });
            }
          }
        );
      } catch (error) {
        sendResponse({ status: "error", message: error.message });
      }
      return true; // Required for async sendResponse
    }
  });