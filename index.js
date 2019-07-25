module.exports = function echo(value, options) {
  const { superSerious } = options;
  console.log(superSerious ? `${value}!!!!!` : value);
};
