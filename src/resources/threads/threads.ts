// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import * as ThreadsAPI from 'the-real-deal/resources/threads/threads';
import * as MessagesAPI from 'the-real-deal/resources/threads/messages/messages';
import * as RunsAPI from 'the-real-deal/resources/threads/runs/runs';

export class Threads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Modifies a thread.
   */
  create(threadId: string, body: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<Thread> {
    return this._client.post(`/threads/${threadId}`, { body, ...options });
  }

  /**
   * Retrieves a thread.
   */
  retrieve(threadId: string, options?: Core.RequestOptions): Core.APIPromise<Thread> {
    return this._client.get(`/threads/${threadId}`, options);
  }

  /**
   * Delete a thread.
   */
  delete(threadId: string, options?: Core.RequestOptions): Core.APIPromise<ThreadDeleteResponse> {
    return this._client.delete(`/threads/${threadId}`, options);
  }
}

/**
 * Represents a thread that contains [messages](/docs/api-reference/messages).
 */
export interface Thread {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the thread was created.
   */
  created_at: number;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * The object type, which is always `thread`.
   */
  object: 'thread';
}

export interface ThreadDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'thread.deleted';
}

export interface ThreadCreateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata?: unknown | null;
}

export namespace Threads {
  export import Thread = ThreadsAPI.Thread;
  export import ThreadDeleteResponse = ThreadsAPI.ThreadDeleteResponse;
  export import ThreadCreateParams = ThreadsAPI.ThreadCreateParams;
  export import Messages = MessagesAPI.Messages;
  export import Message = MessagesAPI.Message;
  export import MessageListResponse = MessagesAPI.MessageListResponse;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessageUpdateParams = MessagesAPI.MessageUpdateParams;
  export import MessageListParams = MessagesAPI.MessageListParams;
  export import Runs = RunsAPI.Runs;
  export import Run = RunsAPI.Run;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunCreateParams = RunsAPI.RunCreateParams;
  export import RunListParams = RunsAPI.RunListParams;
  export import RunSubmitToolOutputsParams = RunsAPI.RunSubmitToolOutputsParams;
}
