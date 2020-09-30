import express from 'express'

const app = express();

import IndexRoutes from './routes/index_routes'
import VendorRoutes from './routes/vendors_routes'

//Middlewar
app.use(express.json());

//Settings
app.set('port', process.env.PORT || 3000);

app.use(IndexRoutes);
app.use('/vendors', VendorRoutes)

export default app;
