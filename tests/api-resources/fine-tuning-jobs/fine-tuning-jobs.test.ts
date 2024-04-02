// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TheRealDeal from 'the-real-deal';
import { Response } from 'node-fetch';

const theRealDeal = new TheRealDeal({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fineTuningJobs', () => {
  test('create: only required params', async () => {
    const responsePromise = theRealDeal.fineTuningJobs.create({
      model: 'gpt-3.5-turbo',
      training_file: 'file-abc123',
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
    const response = await theRealDeal.fineTuningJobs.create({
      model: 'gpt-3.5-turbo',
      training_file: 'file-abc123',
      hyperparameters: { batch_size: 'auto', learning_rate_multiplier: 'auto', n_epochs: 'auto' },
      suffix: 'x',
      validation_file: 'file-abc123',
    });
  });

  test('retrieve', async () => {
    const responsePromise = theRealDeal.fineTuningJobs.retrieve('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
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
      theRealDeal.fineTuningJobs.retrieve('ft-AF1WoRqd3aJAHsqc9NY7iL8F', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = theRealDeal.fineTuningJobs.list();
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
    await expect(theRealDeal.fineTuningJobs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TheRealDeal.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.fineTuningJobs.list({ after: 'string', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = theRealDeal.fineTuningJobs.cancel('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      theRealDeal.fineTuningJobs.cancel('ft-AF1WoRqd3aJAHsqc9NY7iL8F', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TheRealDeal.NotFoundError);
  });
});
