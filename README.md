# CSRF PoC Generator

A Chrome extension that automatically generates Cross-Site Request Forgery (CSRF) Proof of Concept exploits from existing web forms. This tool is designed for security professionals and penetration testers to quickly create CSRF PoC demonstrations.

![CSRF PoC Generator Icon](icon.png)

## Features

- 🚀 One-click CSRF PoC generation
- 📝 Automatically extracts form details from active page
- 💾 Download PoC as HTML file
- 📋 Copy PoC to clipboard
- 🎨 Clean and modern UI with dark mode support
- ⚡ Auto-submit option for immediate testing

## Installation

1. Clone this repository:
```bash
git clone https://github.com/d4ruvil/csrf-poc-generator.git
```

2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the cloned repository folder

## Usage

1. Navigate to a webpage containing the form you want to test
2. Click the CSRF PoC Generator extension icon
3. Click "Extract & Generate PoC"
4. Choose to either copy or download the generated PoC
5. Test the PoC by opening the downloaded HTML file

## Security Notice

⚠️ This tool is intended for legitimate security testing purposes only. Always ensure you have proper authorization before testing for CSRF vulnerabilities on any web application.

## Technical Details

The extension uses:
- Manifest V3
- Modern JavaScript (ES6+)
- Custom styling with CSS variables
- Dark mode support
- Responsive design

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by [@d4ruvil](https://github.com/d4ruvil)

## Disclaimer

This tool is for educational and authorized testing purposes only. The author is not responsible for any misuse or damage caused by this tool. 