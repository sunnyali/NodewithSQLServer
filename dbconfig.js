const config = {
  user: "owais", // Database user name
  password: "abc123", // Database passowrd name
  server: "111.31.2.4",  // Database server name
  database: "abc", // Database  name
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "MSSQLSERVER",
  },
  port: 1433,
};

module.exports = config;
