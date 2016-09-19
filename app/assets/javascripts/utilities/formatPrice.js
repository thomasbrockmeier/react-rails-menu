var formatPrice = function(price) {
  return Number(price).toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
};
