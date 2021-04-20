import express from 'express';

import './database';//importa o index do database
import { routes } from './routes'

const app = express();

app.use(express.json());//pra ele receber json pra testar no isomnia
app.use(routes)

app.listen(3333, () => console.log('BackEnd startado. porta 3333! 🚀'));
