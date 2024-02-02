// File generated from our OpenAPI spec by Stainless.

import TheRealDeal from 'the-real-deal';
import { Response } from 'node-fetch';

const theRealDeal = new TheRealDeal({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource embeddings', () => {
  test('create: only required params', async () => {
    const responsePromise = theRealDeal.embeddings.create({
      input: 'The quick brown fox jumped over the lazy dog',
      model: 'text-embedding-3-small',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await theRealDeal.embeddings.create({
      input: 'The quick brown fox jumped over the lazy dog',
      model: 'text-embedding-3-small',
      dimensions: 1,
      encoding_format: 'float',
      user: 'user-1234',
    });
  });
});
