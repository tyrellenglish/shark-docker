const mongoose = require('mongoose');

const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'sharkdb';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbAuthSource = process.env.DB_AUTH_SOURCE || 'admin';

let connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;

if (dbUser && dbPassword) {
  connectionString =
    `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=${dbAuthSource}`;
}

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
