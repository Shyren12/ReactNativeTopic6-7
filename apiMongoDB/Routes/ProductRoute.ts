import express, { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import { createProduct, getAllProducts, getProductByCatID, getProductByID, getTrendingProducts } from '../Controllers/ProductControllers'

const router = express.Router();
const imagesStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets')
    },

    filename: (req, file, cb) => {
        cb(null, req.body.name + '-' + Date.now() + path.extname(file.originalname))
    }
})

const images = multer({ storage: imagesStorage }).array('images');

router.post('/createProduct', images, createProduct);
router.get('/getProductByCatID/:CatID', getProductByCatID);
router.get('/getProductByID/:id', getProductByID);
router.get('/getAllProducts', getAllProducts);
// router.get('/getFeaturedProducts/:isFeatured', getFeaturedProducts);
router.get('/getTrendingProducts', getTrendingProducts);
export { router as ProductRoute };