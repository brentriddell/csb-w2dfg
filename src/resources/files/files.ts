// File generated from our OpenAPI spec by Stainless.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as FilesAPI from 'the-real-deal/resources/files/files';
import * as ContentAPI from 'the-real-deal/resources/files/content';
import { type Uploadable, multipartFormRequestOptions } from 'the-real-deal/core';

export class Files extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);

  /**
   * Upload a file that can be used across various endpoints. The size of all the
   * files uploaded by one organization can be up to 100 GB.
   *
   * The size of individual files can be a maximum of 512 MB or 2 million tokens for
   * Assistants. See the [Assistants Tools guide](/docs/assistants/tools) to learn
   * more about the types of files supported. The Fine-tuning API only supports
   * `.jsonl` files.
   *
   * Please [contact us](https://help.openai.com/) if you need to increase these
   * storage limits.
   */
  create(body: FileCreateParams, options?: Core.RequestOptions): Core.APIPromise<OpenAIFile> {
    return this._client.post('/files', multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Returns information about a specific file.
   */
  retrieve(fileId: string, options?: Core.RequestOptions): Core.APIPromise<OpenAIFile> {
    return this._client.get(`/files/${fileId}`, options);
  }

  /**
   * Returns a list of files that belong to the user's organization.
   */
  list(query?: FileListParams, options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Delete a file.
   */
  delete(fileId: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/files/${fileId}`, options);
  }
}

/**
 * The `File` object represents a document that has been uploaded to OpenAI.
 */
export interface OpenAIFile {
  /**
   * The file identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The size of the file, in bytes.
   */
  bytes: number;

  /**
   * The Unix timestamp (in seconds) for when the file was created.
   */
  created_at: number;

  /**
   * The name of the file.
   */
  filename: string;

  /**
   * The object type, which is always `file`.
   */
  object: 'file';

  /**
   * The intended purpose of the file. Supported values are `fine-tune`,
   * `fine-tune-results`, `assistants`, and `assistants_output`.
   */
  purpose: 'fine-tune' | 'fine-tune-results' | 'assistants' | 'assistants_output';

  /**
   * Deprecated. The current status of the file, which can be either `uploaded`,
   * `processed`, or `error`.
   */
  status: 'uploaded' | 'processed' | 'error';

  /**
   * Deprecated. For details on why a fine-tuning training file failed validation,
   * see the `error` field on `fine_tuning.job`.
   */
  status_details?: string;
}

export interface FileListResponse {
  data: Array<OpenAIFile>;

  object: 'list';
}

export interface FileDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'file';
}

export interface FileCreateParams {
  /**
   * The File object (not file name) to be uploaded.
   */
  file: Uploadable;

  /**
   * The intended purpose of the uploaded file.
   *
   * Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning) and
   * "assistants" for [Assistants](/docs/api-reference/assistants) and
   * [Messages](/docs/api-reference/messages). This allows us to validate the format
   * of the uploaded file is correct for fine-tuning.
   */
  purpose: 'fine-tune' | 'assistants';
}

export interface FileListParams {
  /**
   * Only return files with the given purpose.
   */
  purpose?: string;
}

export namespace Files {
  export import OpenAIFile = FilesAPI.OpenAIFile;
  export import FileListResponse = FilesAPI.FileListResponse;
  export import FileDeleteResponse = FilesAPI.FileDeleteResponse;
  export import FileCreateParams = FilesAPI.FileCreateParams;
  export import FileListParams = FilesAPI.FileListParams;
  export import Content = ContentAPI.Content;
  export import ContentRetrieveResponse = ContentAPI.ContentRetrieveResponse;
}
