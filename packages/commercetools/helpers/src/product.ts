import {
  UiMediaGalleryItem,
  AgnosticProductAttribute
} from '@vue-storefront/interfaces';
import {
  ProductVariant,
  Image
} from './types/GraphQL';
import {
  formatAttributeList,
  getVariantByAttributes
} from './_utils';

interface ProductVariantFilters {
  master?: boolean;
  masters?: boolean;
  attributes?: Record<string, string>;
}

// Product
export const getProductName = (product: ProductVariant): string => product ? (product as any)._name : '';

export const getProductSlug = (product: ProductVariant): string => product ? (product as any)._slug : '';

// todo change to getProductPrices returning different types of prices https://github.com/DivanteLtd/next/issues/128
export const getProductPrice = (product: ProductVariant): number | null => product ? product.price.value.centAmount / 100 : null;

export const getProductGallery = (product: ProductVariant): UiMediaGalleryItem[] =>
  (product ? product.images : [])
    .map((image: Image) => ({
      small: image.url,
      big: image.url,
      normal: image.url
    }));

/* Returns array of product variants meeting criteria */
export const getProductVariants = (products: ProductVariant[], filters: ProductVariantFilters | any = {}): ProductVariant | ProductVariant[] => {
  if (!products) {
    return [];
  }

  if (filters.attributes && Object.keys(filters.attributes).length > 0) {
    return getVariantByAttributes(products, filters.attributes);
  }

  if (filters.masters) {
    return products.filter((product) => (product as any)._master);
  }

  if (filters.master) {
    return products.find((product) => (product as any)._master);
  }

  return products;
};

export const getProductAttributes = (products: ProductVariant[] | ProductVariant, filterByAttributeName?: Array<string>): Record<string, AgnosticProductAttribute | string> => {
  const isSingleProduct = !Array.isArray(products);
  const productList = (isSingleProduct ? [products] : products) as ProductVariant[];

  if (!products || productList.length === 0) {
    return {} as any;
  }

  const formatAttributes = (product: ProductVariant): Array<AgnosticProductAttribute> =>
    (product ? formatAttributeList(product.attributeList) : [])
      .filter((attribute) => filterByAttributeName ? filterByAttributeName.includes(attribute.name) : attribute);

  const reduceToUniques = (prev, curr) => {
    const isAttributeExist = prev.some((el) => el.name === curr.name && el.value === curr.value);

    if (!isAttributeExist) {
      return [...prev, curr];
    }

    return prev;
  };

  const reduceByAttributeName = (prev, curr) => ({
    ...prev,
    [curr.name]: isSingleProduct ? curr.value : [
      ...(prev[curr.name] || []),
      {
        value: curr.value,
        label: curr.label
      }
    ]
  });

  return productList
    .map((product) => formatAttributes(product))
    .reduce((prev, curr) => [...prev, ...curr], [])
    .reduce(reduceToUniques, [])
    .reduce(reduceByAttributeName, {});
};

export const getProductDescription = (product: ProductVariant): any => (product as any)._description;

export const getProductCategories = (product: ProductVariant): string[] => (product as any)._categoriesRef;

export const getProductId = (product: ProductVariant): number => (product as any)._id;
