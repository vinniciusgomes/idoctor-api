module.exports  = {
  "type": "postgres",
  "url": "postgres://nourlhtmyushww:d54b32d01cdf576d2f32018a8a11611a5b15872144ca0230a813f829adcfdab3@ec2-54-196-89-124.compute-1.amazonaws.com:5432/d5pe0u0qtg80d3",
  "ssl": {
    "rejectUnauthorized": false,
  },
  "migrations": ["./dist/database/migrations/*.js"],
  "cli": {
    "migrationsDir": "./dist/database/migrations"
  },
  "entities": ["dist/models/*.js"]
}
