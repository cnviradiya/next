import ApolloClient from 'apollo-client';
import getCollection from './api/getCollection';
import { SetupConfig, ApiConfig, Token } from './types/setup';

let apolloClient: ApolloClient<any> = null;
let locale = 'en';
let currency = '';
let country = '';
let countries = [];
let currencies = [];
let locales = [];
let currentToken: Token = null;
let api: ApiConfig = null;

const setup = <TCacheShape>(setupConfig: SetupConfig<TCacheShape>): ApolloClient<TCacheShape> => {
  api = setupConfig.api || api;
  locale = setupConfig.locale || locale;
  currency = setupConfig.currency || currency;
  country = setupConfig.country || country;
  countries = setupConfig.countries || countries;
  currencies = setupConfig.currencies || currencies;
  locales = setupConfig.locales || locales;
  currentToken = setupConfig.currentToken || currentToken;

  if (setupConfig.api) {
    // apolloClient = new ApolloClient({
    //   link: createCommerceToolsLink(),
    //   cache: new InMemoryCache(),
    //   ...setupConfig.customOptions
    // });
  }

  return apolloClient;
};

export {
  api,
  currentToken,
  apolloClient,
  setup,
  locale,
  locales,
  country,
  currency,
  countries,
  currencies,
  getCollection
};
