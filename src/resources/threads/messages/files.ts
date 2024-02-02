// File generated from our OpenAPI spec by Stainless.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as FilesAPI from 'the-real-deal/resources/threads/messages/files';

export class Files extends APIResource {
  /**
   * Retrieves a message file.
   */
  retrieve(
    threadId: string,
    messageId: string,
    fileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<File> {
    return this._client.get(`/threads/${threadId}/messages/${messageId}/files/${fileId}`, options);
  }

  /**
   * Returns a list of message files.
   */
  list(
    threadId: string,
    messageId: string,
    query?: FileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse>;
  list(threadId: string, messageId: string, options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(
    threadId: string,
    messageId: string,
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse> {
    if (isRequestOptions(query)) {
      return this.list(threadId, messageId, {}, query);
    }
    return this._client.get(`/threads/${threadId}/messages/${messageId}/files`, { query, ...options });
  }
}

/**
 * A list of files attached to a `message`.
 */
export interface File {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the message file was created.
   */
  created_at: number;

  /**
   * The ID of the [message](/docs/api-reference/messages) that the
   * [File](/docs/api-reference/files) is attached to.
   */
  message_id: string;

  /**
   * The object type, which is always `thread.message.file`.
   */
  object: 'thread.message.file';
}

export interface FileListResponse {
  data: Array<File>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
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
  export import File = FilesAPI.File;
  export import FileListResponse = FilesAPI.FileListResponse;
  export import FileListParams = FilesAPI.FileListParams;
}
