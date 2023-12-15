/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import 'jest-localstorage-mock';
import fetchMock from 'jest-fetch-mock';

import { login } from './login.js';
import { load } from '../storage/load.js';

document.body.innerHTML = '<button id="submit">Submit</button>';

fetchMock.enableMocks();

it('stores a token in local storage', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ accessToken: 'your-token' }));

  const data = {
    email: 'knallis@stud.noroff.no',
    password: '12345678',
  };

  await login(data);

  expect(load('token')).toBeTruthy();
});
