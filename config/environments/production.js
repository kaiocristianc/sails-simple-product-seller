module.exports = {
  environment: 'production',
  port: 1340,

  database: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'fibo123',
    database: 'product-seller'
  }
};
