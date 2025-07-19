const express=require('express');

const app = express();


const fileRoutes=require('../routes/routes')


//middleware

app.use(express.json());

// Now routes will be prefixed with /file
app.use('/file', fileRoutes); 




//listen to server
const PORT=5000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
}
)
