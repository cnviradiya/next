import {
  AgnosticTotals
} from '@vue-storefront/interfaces';
import {
  Cart,
  LineItem
} from './types/GraphQL';
import { getProductAttributes } from './product';

// Cart

export const getCartProducts = (cart: Cart): LineItem[] => {
  if (!cart) {
    return [];
  }

  return cart.lineItems;
};

export const getCartProductName = (product: LineItem): string => product.name;

export const getCartProductImage = (product: LineItem): string => product.variant.images[0].url;

export const getCartProductPrice = (product: LineItem): number => product.price.value.centAmount / 100;

export const getCartProductQty = (product: LineItem): number => product.quantity;

export const getCartProductAttributes = (product: LineItem, filterByAttributeName?: Array<string>) =>
  getProductAttributes(product.variant, filterByAttributeName);

export const getCartProductSku = (product: LineItem): string => product.variant.sku;

export const getCartTotals = (cart: Cart): AgnosticTotals => {
  if (!cart) {
    return {
      total: 0,
      subtotal: 0
    };
  }

  const subtotalPrice = cart.totalPrice.centAmount;
  const shipping = cart.shippingInfo ? cart.shippingInfo.price.centAmount : 0;

  return {
    total: (shipping + subtotalPrice) / 100,
    subtotal: subtotalPrice / 100
  };
};

export const getCartShippingPrice = (cart: Cart): number => cart && cart.shippingInfo ? cart.shippingInfo.price.centAmount / 100 : 0;

export const getCartTotalItems = (cart: Cart): number => {
  if (!cart) {
    return 0;
  }

  return cart.lineItems.reduce((previous, current) => previous + current.quantity, 0);
};
