const express = require('express');
const app = express();
app.use(express.json());
const PORT = 4000;
const userRoutes = require('./routes/user.route');
const db = require('./models');

app.use('/user', userRoutes);

app.get('/',(req,res)=>{
    res.send('App is working')
})

db.sequelize.sync().then((req)=>{
    console.log('Database Connection Successful');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});


