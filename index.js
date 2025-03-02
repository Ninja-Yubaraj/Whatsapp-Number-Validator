const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

// Generate and display QR Code for authentication
client.on('qr', qr => {
    console.log('Scan this QR code with your WhatsApp to log in:');
    qrcode.generate(qr, { small: true });
});

// Successfully authenticated
client.on('ready', async () => {
    console.log('Client is ready!');

    // Read numbers from numbers.txt
    const numbersFilePath = path.join(__dirname, 'numbers.txt');
    const outputFilePath = path.join(__dirname, 'whatsapp-numbers.txt');

    if (!fs.existsSync(numbersFilePath)) {
        console.log(`❌ File ${numbersFilePath} not found.`);
        return;
    }

    const numbers = fs.readFileSync(numbersFilePath, 'utf-8')
        .split(/\r?\n/)
        .map(num => num.trim())
        .filter(num => num.length > 0); // Remove empty lines

    console.log(`📋 Checking ${numbers.length} numbers...`);

    const whatsappNumbers = [];

    for (const number of numbers) {
        const formattedNumber = number.includes('@c.us') ? number : `${number}@c.us`;
        try {
            const isRegistered = await client.isRegisteredUser(formattedNumber);
            if (isRegistered) {
                console.log(`✅ ${number} is on WhatsApp.`);
                whatsappNumbers.push(number);
            } else {
                console.log(`❌ ${number} is NOT on WhatsApp.`);
            }
        } catch (error) {
            console.error(`⚠️ Error checking ${number}:`, error);
        }
    }

    // Save valid WhatsApp numbers to whatsapp-numbers.txt
    fs.writeFileSync(outputFilePath, whatsappNumbers.join('\n'), 'utf-8');
    console.log(`✅ Saved ${whatsappNumbers.length} WhatsApp numbers to ${outputFilePath}`);
});

// Start the client
client.initialize();
