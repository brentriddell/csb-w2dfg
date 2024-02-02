// File generated from our OpenAPI spec by Stainless.

import TheRealDeal from 'the-real-deal';
import { Response } from 'node-fetch';

const theRealDeal = new TheRealDeal({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assistants', () => {
  test('create: only required params', async () => {
    const responsePromise = theRealDeal.assistants.create({ model: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await theRealDeal.assistants.create({
      model: 'string',
      description: 'string',
      file_ids: ['string', 'string', 'string'],
      instructions: 'string',
      metadata: {},
      name: 'string',
      tools: [{ type: 'code_interpreter' }, { type: 'code_interpreter' }, { type: 'code_interpreter' }],
    });
  });

  test('retrieve', async () => {
    const responsePromise = theRealDeal.assistants.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.assistants.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = theRealDeal.assistants.update('string', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = theRealDeal.assistants.list();
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
    await expect(theRealDeal.assistants.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TheRealDeal.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.assistants.list(
        { after: 'string', before: 'string', limit: 0, order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = theRealDeal.assistants.delete('string');
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
      theRealDeal.assistants.delete('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });
});
