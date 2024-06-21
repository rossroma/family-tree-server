const formatOrder = (order) => {
  if (!order) return ['updatedAt', 'DESC']
  return [order[0], order[1].replace('ending', '').toUpperCase()]
}

module.exports = {
  formatOrder
}