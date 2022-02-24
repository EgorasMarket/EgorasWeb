const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
var allowedOrigins = [
    "http://localhost:3000",
    "https://v2.egoras.com",
    "https://egoras.com",
    "https://www.egoras.com",
    "http://egoras.com",
    "http://www.egoras.com"
  ];
  app.use(
    cors({
      origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          var msg =
            "The CORS policy for this site does not " +
            "allow access from the specified Origin.";
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    })
  );
// Connect Database
// connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
    limit: "50mb",
  })
);

// // login 
// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });


app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  db.execute(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (err, result)=> {
          if (err) {
              res.send({err: err});
          }
  
          if (result.length > 0) {
              res.send( result);
              }else({message: "Wrong username/password comination!"});
          }
      
  );
 });



app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
);

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/loans', require('./routes/api/loans'));


const PORT = process.env.PORT || 7801;

app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);
