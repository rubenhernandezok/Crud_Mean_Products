import express, { urlencoded } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routes/routes.js';

const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(urlencoded({extended:true}))
app.use('/api/products', router);


const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(mongoURI);
    console.log('Conexión a MongoDB exitosa');
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
  }
};

start();