import multer from "multer";
import path from "path";

// Ensure the tmp directory exists
// const tmpDir = path.join(process.cwd(), "tmp");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tmpDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
