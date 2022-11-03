import express from 'express';
import { createBook, readBook, updateBook } from '../controllers';
import { Schemas, ValidateSchema } from '../middlewares';

const router = express.Router();

router.get('/get/:bookId', readBook);

router.post('/create', ValidateSchema(Schemas.book.create), createBook);
router.patch('/update/:bookId', ValidateSchema(Schemas.book.update), updateBook);

export = router;