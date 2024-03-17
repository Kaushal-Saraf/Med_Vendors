import jsQR from 'jsqr';
import fs from 'fs';
export async function qrCodeDetector(file) {
    const width = 640;
    const height = 480;
    

const readFileInBase64 = async (file) => {
  const base64String = Buffer.from(fileBuffer).toString('base64');
  return base64String;
};

const base64String = await readFileInBase64('my-file.txt');
    try{
        const codeResult = jsQR(code.data, code.width, code.height);
        return codeResult;
    }
    catch(e){
        console.log(e);
        return "NO QR Found";
    }
}