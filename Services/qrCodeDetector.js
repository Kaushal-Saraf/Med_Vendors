import jsQR from 'jsqr';

export async function qrCodeDetector(base64Image) {
    return new Promise((resolve, reject) => {
        const buffer = Buffer.from(base64Image, 'base64');
        const code = jsQR(buffer, buffer.length);
        if (code) {
            resolve(code.data);
        } else {
            reject(new Error('No QR code found in the image.'));
        }
    });
}