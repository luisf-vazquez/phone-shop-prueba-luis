export function formatPrice(value) {
  if (!value) {
    return 'Consultar cuota';
  }
  return value.toLocaleString().concat('€');
}

export function getFirstPrice(price) {
  if (!price || price.length === 0) {
    return 'Consultar cuota';
  }
  const value = price.find((option) => option?.price);
  return formatPrice(value?.price);
}

export function getPriceForColor(price, colorCode) {
  const option = price.find((priceOption) => priceOption.color.code === colorCode);
  return formatPrice(option?.price);
}

export function getCheapestPrice(prices) {
  if (!prices || prices.length === 0) {
    return 'Consultar cuota';
  }
  let minValue = 1000000;
  prices.forEach((option) => {
    if (option.price && option.price < minValue) {
      minValue = option.price;
    }
  });
  return formatPrice(minValue !== 1000000 ? minValue : undefined);
}

export function parseNumberPrice(strPrice) {
  const value = parseFloat(strPrice);
  return value || undefined;
}
