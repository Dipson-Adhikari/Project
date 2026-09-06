import express from "express";
import multer from "multer";
import path from "path";
import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const router = express.Router();

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "uploads/")},
    filename:(req, file, cb) =>
         { const filename = Date.now() + "-" + file.originalname; cb(null, filename); }
});

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    console.log("File extension:", ext);
    if (file.mimetype.startsWith("image/") || allowedExtensions.includes(ext)) {
        cb(null, true);
    }
    else {
        cb(new Error("Only image files are allowed!"), false);
    }
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
router.post("/", upload.single("image"), async(req, res) => {   // upload.array for multiple
    const resp = await cloudinary.uploader.upload(req.file.path, {folder: "Himalayashop"});
    res.send({ message: "Image uploaded", image: resp.secure_url });
});
export default router;