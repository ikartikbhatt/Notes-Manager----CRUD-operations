const express=require('express');

const app = express();


const fileRoutes=require('../routes/routes')


//middleware

app.use(express.json());

// Now routes will be prefixed with /file
app.use('/file', fileRoutes); 





const PORT=5000;    //listen to server
const HOST = ''; // 👈 replace with your desired IP address

app.listen(PORT,() => {
    console.log(`Server running at localhost on ${PORT}`);
}
)
