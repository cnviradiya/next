import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/interfaces';
import { Category } from '@vue-storefront/shopify-api/src/types';

export const getCategoryTree = (category: Category): AgnosticCategoryTree => {
  return {} as AgnosticCategoryTree;
};

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree
};

export default categoryGetters;
