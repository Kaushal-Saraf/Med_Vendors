import jsQR from 'jsqr';
export const qrCodeDetector =(base64Image)=>{
    const rawImageData = Uint8Array.from(atob(base64Image), c => c.charCodeAt(0));
    const qrCode = jsQR(rawImageData, rawImageData.width, rawImageData.height);
    if (qrCode) {
        console.log(qrCode.data);
    } else {
        console.log('error');
    }   
}
