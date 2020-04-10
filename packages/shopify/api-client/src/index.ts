import getCollection from './api/getCollections';
import { apiClientFactory } from '@vue-storefront/factories';
import Client from 'shopify-buy';

let client;
const defaultSettings = {
  domain: 'lauridukaan.myshopify.com',
  storefrontAccessToken: '1daf49e906c0433bae0335731776facf'
};

function onSetup(config) {
  client = Client.buildClient(config);
}
const { setup, update, override, getSettings } = apiClientFactory<any, any>({ defaultSettings, onSetup });
console.log('inside the shopify-index.ts', getCollection);

export {
  getCollection,
  override,
  setup,
  update,
  getSettings as settings,
  client as _shopifyClient
};
