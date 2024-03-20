// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TheRealDeal from 'the-real-deal';
import { Response } from 'node-fetch';

const theRealDeal = new TheRealDeal({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generations', () => {
  test('create: only required params', async () => {
    const responsePromise = theRealDeal.images.generations.create({ prompt: 'A cute baby sea otter' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await theRealDeal.images.generations.create({
      prompt: 'A cute baby sea otter',
      model: 'dall-e-3',
      n: 1,
      quality: 'standard',
      response_format: 'url',
      size: '1024x1024',
      style: 'vivid',
      user: 'user-1234',
    });
  });
});
