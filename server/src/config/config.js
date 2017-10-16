module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'sshdb',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Running_123',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
