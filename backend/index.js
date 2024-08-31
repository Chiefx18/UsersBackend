const express = require('express');
const app = express();
app.use(express.json());
const PORT = 4000;
const userRoutes = require('./routes/user.route');
const db = require('./models');


const { User } = require('./models');

app.use('/user', userRoutes);

app.get('/',(req,res)=>{
    res.send('App is working')
})

app.get('/insert', (req,res)=>{
    User.create({
        firstName:"John",
        lastName:"Doe",
        age:25,
        email:"johndoe@gmail.com",
        mobile:9999,
    }).catch((err)=>{
        console.log(err.message);
    })
    res.send("insert")
} );
db.sequelize.sync().then((req)=>{
    console.log('Database Connection Successful');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});


