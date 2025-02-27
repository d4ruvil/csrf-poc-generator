// Loading state management
const setLoading = (isLoading) => {
    const generateBtn = document.getElementById("generate");
    const downloadBtn = document.getElementById("download");
    const copyBtn = document.getElementById("copy");
    
    [generateBtn, downloadBtn, copyBtn].forEach(btn => {
        btn.disabled = isLoading;
        btn.classList.toggle('loading', isLoading);
    });
};

// Status message handling
const showStatus = (message, isError = false) => {
    const status = document.getElementById("status");
    status.textContent = message;
    status.className = `status-message ${isError ? 'error' : 'success'}`;
    setTimeout(() => {
        status.textContent = '';
    }, 3000);
};

// Generate button handler
document.getElementById("generate").addEventListener("click", async () => {
    try {
        setLoading(true);
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        });
    } catch (error) {
        showStatus(`Error: ${error.message}`, true);
    } finally {
        setLoading(false);
    }
});

// Copy button handler
document.getElementById("copy").addEventListener("click", async () => {
    const content = document.getElementById("csrfOutput").value;
    
    if (!content) {
        showStatus("No content to copy", true);
        return;
    }

    try {
        await navigator.clipboard.writeText(content);
        showStatus("PoC copied to clipboard!");
    } catch (error) {
        showStatus("Failed to copy to clipboard", true);
    }
});

// Download button handler
document.getElementById("download").addEventListener("click", () => {
    const htmlContent = document.getElementById("csrfOutput").value;
    
    if (!htmlContent) {
        showStatus("No content to download", true);
        return;
    }

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "csrf_poc.html";
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    setTimeout(() => URL.revokeObjectURL(url), 100);
    showStatus("Download started successfully");
});

// Listen for PoC content
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "generatePoC") {
        document.getElementById("csrfOutput").value = message.csrfPoC;
        showStatus("PoC generated successfully!");
    }
});

