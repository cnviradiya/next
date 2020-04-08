import { ApolloClientOptions } from 'apollo-client';

export interface ApiConfig {
  uri: string;
  authHost: string;
  projectKey: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
}

export interface Token {
  accessToken: string;
  scope: string;
}

export interface CookiesConfig {
  currencyCookieName: string;
  countryCookieName: string;
  localeCookieName: string;
}

export interface LocaleItem {
  name: string;
  label: string;
}

export interface SetupConfig<TCacheShape> {
  api?: ApiConfig;
  currentToken?: Token;
  customOptions?: ApolloClientOptions<TCacheShape>;
  currency?: string;
  locale?: string;
  country?: string;
  countries?: LocaleItem[];
  currencies?: LocaleItem[];
  locales?: LocaleItem[];
  cookies?: CookiesConfig;
}

export interface CustomerCredentials {
  username: string;
  password: string;
}
