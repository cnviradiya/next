import { Customer } from './types/GraphQL';

// User

export const getUserFirstName = (user: Customer): string => user ? user.firstName : '';

export const getUserLastName = (user: Customer): string => user ? user.lastName : '';

export const getUserFullName = (user: Customer): string => user ? `${user.firstName} ${user.lastName}` : '';
