import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
  createProduct,
  getProducts,
  getProductsByPage,
  updateProduct,
  getProduct,
  deleteProduct,
  getBestSellingProducts,
  getDiscountedProducts
} from 'src/apis/product.api';
import { IProduct, Product } from 'src/common';

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

export const useGetProducts = () => {
  const { data: products = [], ...rest } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => getProducts(),
    select: ({ products }) => products as Product[],
    staleTime: 20 * 1000
  });
  return { products, ...rest };
};

export const useGetProductsByPage = (page: number) => {
  const { data: products = [], ...rest } = useQuery({
    queryKey: ['getProductByPage', page],
    queryFn: () => getProductsByPage(page),
    select: ({ products }) => products as Product[],
    keepPreviousData: true,
    staleTime: 20 * 1000
  });
  return { products, ...rest };
};

export const useGetProduct = (id: number) => {
  const { data: product, ...rest } = useQuery({
    queryKey: ['getProduct', id],
    queryFn: () => getProduct(id),
    staleTime: 20 * 1000,
    enabled: id !== 0
  });
  return { product, ...rest };
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProd: object) => createProduct(newProd),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getProductByPage']
      });
      toast.success('Create successfully');
    },
    onError: () => {
      toast.success('Create failed!');
    }
  });
};

export const useUpdateProduct = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProd: object) => updateProduct(newProd, id),
    onSuccess: (newData) => {
      queryClient.setQueriesData(
        {
          queryKey: ['getProductByPage', id],
          exact: true
        },
        newData
      );
      toast.success('Update successfully');
    },
    onError: () => {
      toast.success('Update failed');
    }
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getProducts']
      });
    },
    onError: (error) => {
      console.error(error);
    }
  });
};
