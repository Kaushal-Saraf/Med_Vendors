import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:true,
});

export default async function uploadFile(file , filename) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          public_id: `${filename}.pdf`,
          folder: "Med_Vendor/Degrees",
          tags: ["degree"],
          upload_preset: "ml_default",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
}
