// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TheRealDeal from 'the-real-deal';
import { Response } from 'node-fetch';

const theRealDeal = new TheRealDeal({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('list', async () => {
    const responsePromise = theRealDeal.models.list('gpt-3.5-turbo');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.models.list('gpt-3.5-turbo', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = theRealDeal.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });
});
