import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./projecto_todo.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
  });