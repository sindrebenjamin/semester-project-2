/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { login } from './login.js';
import { load } from '../storage/load.js';

document.body.innerHTML = '<button id="submit">Submit</button>';

it('stores a token in local storage', async () => {
  const data = {
    email: 'knallis@stud.noroff.no',
    password: '12345678',
  };

  await login(data);

  expect(load('token')).toBeTruthy();
});
