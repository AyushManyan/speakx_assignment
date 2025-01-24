const mongoose = require('mongoose');
const dbUrl = process.env.MONGO_URI;

if (!dbUrl) {
  console.error('MONGO_URI environment variable is not defined');
  process.exit(1);
}

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database');
});

module.exports = db;