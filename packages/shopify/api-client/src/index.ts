import getCollections from './api/getCollections';
import { apiClientFactory } from '@vue-storefront/factories';
import Client from 'shopify-buy';

let client;
const defaultConfiguration = {
  domain: 'testimonial-aula.myshopify.com',
  storefrontAccessToken: '29d77b8cb02a1b019fb50e57c7249936'
};

function onSetup(config) {
  client = Client.buildClient(config);
}

const { setup, update, override, settings } = apiClientFactory<any, any>(defaultConfiguration, onSetup);

export {
  getCollections,
  override,
  setup,
  update,
  settings,
  client as _shopifyClient
};
