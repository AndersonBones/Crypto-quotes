import {Request, Response} from 'express'
import express from 'express'
import myRoutes from './routes/routes'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

const app = express();
dotenv.config();

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set statics files
app.use(express.static(path.join(__dirname, '../public')))

app.use(cors())

// Routes
app.use(myRoutes);

app.use((req: Request, res: Response)=>{
    res.status(404).render('pages/404')
})

app.listen(process.env.PORT);