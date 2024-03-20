// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import * as ContentAPI from 'the-real-deal/resources/files/content';

export class Content extends APIResource {
  /**
   * Returns the contents of the specified file.
   */
  retrieve(fileId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/files/${fileId}/content`, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }
}

export type ContentRetrieveResponse = string;

export namespace Content {
  export import ContentRetrieveResponse = ContentAPI.ContentRetrieveResponse;
}
