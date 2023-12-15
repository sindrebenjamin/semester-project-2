/**
 * @jest-environment jsdom
 */

import { logout } from './logout.js';
import { load } from '../storage/load.js';
import '@testing-library/jest-dom';
import 'jest-localstorage-mock';

it('removes user data from local storage', () => {
  logout();
  expect(load('profile')).toBeFalsy();
  expect(load('token')).toBeFalsy();
});
