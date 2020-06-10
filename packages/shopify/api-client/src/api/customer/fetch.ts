import {_shopifyCustomClient} from '../../index';
import { customerQuery as query } from "./buildQueries";

const fetch = async (token): Promise<void> => {

    return await _shopifyCustomClient.graphQLClient
        .send(query)
        .then(({ model }) => {
            return model;
        });
};

export default fetch;
