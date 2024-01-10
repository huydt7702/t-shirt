import { Service } from '../utils';

export const getBestSellingProducts = async () => {
  const response = await Service.get('/bestselling-products');
  return response;
};

export const getDiscountedProducts = async () => {
  const response = await Service.get('/discounted-products');
  return response;
};
