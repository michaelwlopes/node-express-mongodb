module.exports = (req, res, next) => {
res.locals.VariavelLocal =  'Valor da variável.'
  next();
};


