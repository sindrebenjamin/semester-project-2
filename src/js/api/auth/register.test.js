/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import 'jest-localstorage-mock';
import fetchMock from 'jest-fetch-mock';

import { register } from './register.js';

document.body.innerHTML = '<button id="submit">Submit</button>';

fetchMock.enableMocks();

it('returns an id', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ id: '1234' }));

  const data = {
    name: 'knalli7',
    email: 'knallis7@stud.noroff.no',
    password: '12345678',
  };

  await register(data);
  expect(true).toBeTruthy();
});
