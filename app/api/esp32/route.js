import formidable from 'formidable';
import fs from 'fs';
import path from 'path';


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = './public/uploads';
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error occurred while uploading image' });
      return;
    }
    const tempFilePath = files.image.path;
    const uniqueFileName = `${Date.now()}-${files.image.name}`;
    const destinationPath = path.join(form.uploadDir, uniqueFileName);
    fs.renameSync(tempFilePath, destinationPath);
    const imageUrl = `/uploads/${uniqueFileName}`;
    res.status(200).json({ imageUrl });
  });
}