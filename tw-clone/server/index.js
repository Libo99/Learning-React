const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const PostRoute = require('./Routes/PostRoute');
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log('Connecteeeeeed');
});

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());


app.get('/', (req, res) => {
res.json({
    message: 'hej'
})
});
app.use('/post', PostRoute);




const port = process.env.PORT || 8205;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})




