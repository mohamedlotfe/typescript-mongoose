import express from 'express';
import { createAuthor, readAuthor, readAll, updateAuthor, deleteAuthor } from '../controllers';
import { Schemas, ValidateSchema } from '../middlewares';

const router = express.Router();

router.get('/get', readAll);
router.get('/get/:authorId', readAuthor);

router.post('/create', ValidateSchema(Schemas.author.create), createAuthor);

router.patch('/update/:authorId', ValidateSchema(Schemas.author.update), updateAuthor);
router.delete('/delete/:authorId', deleteAuthor);

export = router;