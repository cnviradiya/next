import { _shopifyCustomClient } from '../../index';
import { signUpMutation as mutation } from './buildMutations';

const signUp = async (fields): Promise<void> => {

  /**
   * Create a new customer account.
   *
   * const fields = {
   *    email: 'viradiyachirag91@gmail.com',
   *    firstName: 'Chirag',
   *    lastName: 'Viradiya',
   *    password: '123456',
   *    phone: '919726099884'
   *  };
   */
  const data = {
    input: fields
  };

  return await _shopifyCustomClient.graphQLClient
    .send(mutation, data)
    .then(({ model }) => {
      return model;
    });
};

export default signUp;
