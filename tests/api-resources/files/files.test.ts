// File generated from our OpenAPI spec by Stainless.

import TheRealDeal, { toFile } from 'the-real-deal';
import { Response } from 'node-fetch';

const theRealDeal = new TheRealDeal({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('create: only required params', async () => {
    const responsePromise = theRealDeal.files.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'fine-tune',
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
    const response = await theRealDeal.files.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'fine-tune',
    });
  });

  test('retrieve', async () => {
    const responsePromise = theRealDeal.files.retrieve('string');
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
    await expect(theRealDeal.files.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TheRealDeal.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = theRealDeal.files.list();
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
    await expect(theRealDeal.files.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TheRealDeal.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.files.list({ purpose: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = theRealDeal.files.delete('string');
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
    await expect(theRealDeal.files.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TheRealDeal.NotFoundError,
    );
  });
});
