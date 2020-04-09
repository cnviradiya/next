import { _shopifyClient, settings } from '../index';
import { Collection, CollectionParams } from '../types';

async function getCollection (params: CollectionParams): Promise<Collection> {
  if (settings.overrides.getCollection) return settings.overrides.getCollection(params);
  const collections = await _shopifyClient.collection.fetchAllWithProducts().then((collections) => {
    return collections;
  });
  return collections;
}

export default getCollection;
