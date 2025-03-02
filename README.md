# 📲 WhatsApp Number Validator (Node.js + whatsapp-web.js)
This Node.js script checks whether phone numbers listed in a file (`numbers.txt`) are registered on WhatsApp. It then saves the valid WhatsApp numbers to `whatsapp-numbers.txt`.


## 🚀 Features
- ✅ Reads phone numbers from `numbers.txt`
- 🔎 Checks if each number is registered on WhatsApp
- 📄 Saves valid WhatsApp numbers to `whatsapp-numbers.txt`
- 🔄 Uses `whatsapp-web.js` for automation
- 🛠️ Automatically logs in via WhatsApp Web


## 📦 Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/Ninja-Yubaraj/Whatsapp-Number-Validator
   cd Whatsapp-Number-Validator
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create a file `numbers.txt`** and add phone numbers (one per line), including country codes (without the + sign):
   ```
   1234567890
   19876543210
   1122334455
   ```


## 🏃‍♂️ Usage
1. **Run the script**:
   ```sh
   node index.js
   ```

2. **Scan the QR Code** displayed in the terminal with your WhatsApp mobile app.

3. **Wait for the results**:
   - Numbers registered on WhatsApp will be saved in `whatsapp-numbers.txt`.
   - Unregistered numbers will be skipped.


## 📌 Example Output
```
Scan this QR code with your WhatsApp to log in:
📋 Checking 3 numbers...
✅ 1234567890 is on WhatsApp.
❌ 19876543210 is NOT on WhatsApp.
✅ 1122334455 is on WhatsApp.
✅ Saved 2 WhatsApp numbers to whatsapp-numbers.txt
```


## 🛠️ Dependencies
- [Node.js](https://nodejs.org/)
- [whatsapp-web.js](https://www.npmjs.com/package/whatsapp-web.js)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- [puppeteer](https://www.npmjs.com/package/puppeteer)


## ❗ Notes
- You must **scan the QR code** once to authenticate.
- The script uses `LocalAuth` to keep your session logged in.
- Ensure your WhatsApp account is **active** and has **internet access**.


## 🏗️ Future Improvements
- [ ] Add an API endpoint for checking numbers via HTTP request.
- [ ] Implement a UI for better user experience.
- [ ] Enable checking numbers in bulk asynchronously.


## 🤝 Contributing
Feel free to fork this repo and submit a pull request if you have improvements! 🚀
