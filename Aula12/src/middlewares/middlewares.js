module.exports = (req, res, next) => {
  console.log();
  console.log('Executando Middlewares...');
  console.log();

  next();
};


