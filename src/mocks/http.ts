import express from 'express';
import cors from 'cors';
import { handlers } from './handlers';
import { createMiddleware } from '@mswjs/http-middleware';

const app = express();
const port = 9090;

// 모바일인지 pc인지 확인 하는

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
  })
);

app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => console.log('mock>>>'));
