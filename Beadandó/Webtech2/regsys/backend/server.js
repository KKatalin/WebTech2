let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dbConfig = require('./AdatB/db');

let now = new Date();

// Csatlakozás a mongo db-hez
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected')
},
  error => {
    console.log('Database could not connected: ' + error)
  }
)

// Port beállítása express js segítségével
const kertTermRoute = require('./Utv/KertTerm.utv')
const userRoute = require('./Utv/felh.utv')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/meanapp')));
app.use('/', express.static(path.join(__dirname, 'dist/meanapp')));
app.use('/api', kertTermRoute)
app.use('/api', userRoute)

// port létrehozása
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Listening on port: ' + port + " Time: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
});
