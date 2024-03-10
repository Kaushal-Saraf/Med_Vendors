import jsQR from 'jsqr';

export async function decodeQRCodeFromBase64(base64Image) {
    return new Promise((resolve, reject) => {
        const binaryData = atob(base64Image.split(',')[1]);
        const length = binaryData.length;
        const bytes = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            bytes[i] = binaryData.charCodeAt(i);
        }
        const code = jsQR(bytes, bytes.length);
        if (code) {
            resolve(code.data);
        } else {
            reject(new Error('No QR code found in the image.'));
        }
    });
}