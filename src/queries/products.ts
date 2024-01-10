import { useQuery } from '@tanstack/react-query';
import { getBestSellingProducts, getDiscountedProducts } from 'src/apis/product.api';
import { IProduct } from 'src/common';

export const useGetBestSellingProducts = () => {
  const { data: products = [], ...rest } = useQuery({
    queryKey: ['getBestSellingProducts'],
    queryFn: () => getBestSellingProducts(),
    select: (data) => data as IProduct[],
    staleTime: 20 * 1000
  });
  return { products, ...rest };
};

export const useGetDiscountedProducts = () => {
  const { data: products = [], ...rest } = useQuery({
    queryKey: ['getDiscountedProducts'],
    queryFn: () => getDiscountedProducts(),
    select: (data) => data as IProduct[],
    staleTime: 20 * 1000
  });
  return { products, ...rest };
};
