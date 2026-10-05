
// import mysql from "mysql2/promise";

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT) || 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,

//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });


// export default db;


import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "139.167.173.43",
  port: 3306,
  user: "dbupload",
  password: "123qwe!@#",
  database: "baderia_metroprime",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT || 3306),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

export default db;