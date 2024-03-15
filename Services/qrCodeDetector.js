import jsQR from 'jsqr';

export async function qrCodeDetector(buffer) {
    const imageData = buffer;
    const width = 640;
    const height = 480;
    const grayPixels = new Uint8ClampedArray(width * height);
    for (let i = 0; i < imageData.length; i += 4) {
        const grayValue = imageData[i] * 0.2126 + imageData[i + 1] * 0.7152 + imageData[i + 2] * 0.0722;
        grayPixels[i / 4] = grayValue;
    }
    const code = {
        data: grayPixels,
        width: width,
        height: height
    };
    console.log(code)
    // const codeResult = jsQR(code.data, code.width, code.height);
    // if (codeResult) {
    //     console.log("QR Code detected with data: ", codeResult.data);
    // } else {
    //     console.log("No QR Code detected.");
    // }
}