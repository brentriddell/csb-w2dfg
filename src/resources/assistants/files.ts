// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as FilesAPI from 'the-real-deal/resources/assistants/files';

export class Files extends APIResource {
  /**
   * Create an assistant file by attaching a [File](/docs/api-reference/files) to an
   * [assistant](/docs/api-reference/assistants).
   */
  create(
    assistantId: string,
    body: FileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssistantFile> {
    return this._client.post(`/assistants/${assistantId}/files`, { body, ...options });
  }

  /**
   * Retrieves an AssistantFile.
   */
  retrieve(
    assistantId: string,
    fileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssistantFile> {
    return this._client.get(`/assistants/${assistantId}/files/${fileId}`, options);
  }

  /**
   * Returns a list of assistant files.
   */
  list(
    assistantId: string,
    query?: FileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse>;
  list(assistantId: string, options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(
    assistantId: string,
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse> {
    if (isRequestOptions(query)) {
      return this.list(assistantId, {}, query);
    }
    return this._client.get(`/assistants/${assistantId}/files`, { query, ...options });
  }

  /**
   * Delete an assistant file.
   */
  delete(
    assistantId: string,
    fileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/assistants/${assistantId}/files/${fileId}`, options);
  }
}

/**
 * A list of [Files](/docs/api-reference/files) attached to an `assistant`.
 */
export interface AssistantFile {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The assistant ID that the file is attached to.
   */
  assistant_id: string;

  /**
   * The Unix timestamp (in seconds) for when the assistant file was created.
   */
  created_at: number;

  /**
   * The object type, which is always `assistant.file`.
   */
  object: 'assistant.file';
}

export interface FileListResponse {
  data: Array<AssistantFile>;

  first_id: string;

  has_more: boolean;

  items: unknown;

  last_id: string;

  object: string;
}

/**
 * Deletes the association between the assistant and the file, but does not delete
 * the [File](/docs/api-reference/files) object itself.
 */
export interface FileDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'assistant.file.deleted';
}

export interface FileCreateParams {
  /**
   * A [File](/docs/api-reference/files) ID (with `purpose="assistants"`) that the
   * assistant should use. Useful for tools like `retrieval` and `code_interpreter`
   * that can access files.
   */
  file_id: string;
}

export interface FileListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include before=obj_foo in order to
   * fetch the previous page of the list.
   */
  before?: string;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
   * order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';
}

export namespace Files {
  export import AssistantFile = FilesAPI.AssistantFile;
  export import FileListResponse = FilesAPI.FileListResponse;
  export import FileDeleteResponse = FilesAPI.FileDeleteResponse;
  export import FileCreateParams = FilesAPI.FileCreateParams;
  export import FileListParams = FilesAPI.FileListParams;
}
