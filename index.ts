import express, {Express, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './src/routes/routes';
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(helmet());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 5020;

app.listen(port, ()=> console.log(`🚀 Server ready at http://localhost:${port}`));