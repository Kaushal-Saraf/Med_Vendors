import {v2 as cloudinary} from 'cloudinary';
import{promises as fs} from 'fs';
          
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET
});
