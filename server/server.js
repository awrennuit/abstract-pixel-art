const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const router = require(`./routes/route`);
const PORT = process.env.PORT || 5000;

app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/paint`, router);

app.listen(PORT, ()=>{
    console.log('server up on:', PORT);
})