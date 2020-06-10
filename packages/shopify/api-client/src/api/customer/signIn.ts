import { _shopifyCustomClient } from '../../index';
import { signInMutation as mutation } from './buildMutations';

const signIn = async (email, password): Promise<void> => {

  /**
   * Create customer access token.
   *
   * const email = 'viradiyachirag91@gmail.com';
   * const password = '123456';
   */
  const data = {
    input: {
      email: email,
      password: password
    }
  };

  return await _shopifyCustomClient.graphQLClient
    .send(mutation, data)
    .then(({ model }) => {
      return model;
    });
};

export default signIn;
