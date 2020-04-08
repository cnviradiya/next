import { ApolloQueryResult } from 'apollo-client';
import { apolloClient, locale } from './../../index';
import defaultQuery from './defaultQuery';
import { CategoryQueryResult } from './../../types/GraphQL';

interface CategoryData {
  categories: CategoryQueryResult;
}

const getCategory = async (): Promise<ApolloQueryResult<CategoryData>> => {
  return await apolloClient.query<CategoryData>({
    query: defaultQuery,
    variables: { locale }
  });
};

export default getCategory;
