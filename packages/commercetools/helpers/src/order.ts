import { Order } from './types/GraphQL';

// Order

export const getOrderDate = (order: Order): string => order?.createdAt || '';

export const getOrderNumber = (order: Order): string => order?.id || '';

export const getOrderStatus = (order: Order): string => order?.orderState || '';

export const getOrderTotal = (order: Order): number | null => order ? order.totalPrice.centAmount / 100 : null;
