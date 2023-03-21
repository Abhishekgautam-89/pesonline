const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');

const getUser = require('./routes/user')

app.use(bodyparser.json({extended:false}))
app.use(cors());
app.use('/',getUser);

sequelize
// .sync({force:true})
.sync()
.then((result)=>{
    // console.log(result);
    // https.createServer({key: privateKey, cert: certificate}, app).listen(process.env.PORT||3000);
    app.listen(3000) 
})
.catch(err=>console.log(err));
