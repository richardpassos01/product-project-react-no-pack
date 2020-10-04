import axios, { AxiosPromise } from 'axios';
import { API_URL } from '../enums/config';
import Endpoints from '../enums/endpoints';
import ProductInterface from '../../pages/Home/components/ProductInterface';

const instance = axios.create({
  baseURL: API_URL,
});

export const getProductList = (): AxiosPromise => instance.get(Endpoints.PRODUCTS);

export const getProductById = (id?: string): AxiosPromise => instance.get(`${Endpoints.PRODUCTS}?id=${id}`);

export const createProduct = (product: ProductInterface): AxiosPromise => instance.post(`${Endpoints.PRODUCTS}`, product);

export const updateProductById = (product: ProductInterface): AxiosPromise => instance.put(`${Endpoints.PRODUCTS}/${product.id}`, product);

export const deleteProductById = (id?: string): AxiosPromise => instance.delete(`${Endpoints.PRODUCTS}/${id}`);

export default instance;
