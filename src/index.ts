// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { TheRealDeal } from './client';

export { TheRealDeal };
export default TheRealDeal;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export const {
  TheRealDealError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export * from './client';
