import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const generateUniqueId = () => {
    return uuidv4();
};

export { upload, generateUniqueId };