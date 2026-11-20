import app from './app.js';
import dotenv from 'dotenv';
import { testConnection } from './src/config/db.js';

dotenv.config();
testConnection();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

